module.exports = (() => {

  'use strict';

  const http = require('http');
  const url = require('url');
  const utilities = require('./utilities.js');

  /**
  * Single HTTP Application. Logging and response functionality.
  * @class
  */
  class Application {

    constructor(name) {

      this.name = name || 'fxn';

      this.server = http.createServer(this.handler.bind(this));
      this.router = require(`${process.cwd()}/app/router.js`);

      console.log(`[${this.name}.${process.pid}] Startup: Starting HTTP Worker`);

      process.on('uncaughtException', e => {
        process.send({
          error: {
            name: e.name,
            message: e.message,
            stack: e.stack
          }
        });
        process.exit(1);
      });

      process.on('message', data => {
        data.invalidate && process.exit(0);
      });

      process.on('exit', (code) => {
        console.log(`[${this.name}.${process.pid}] Shutdown: Exited with code ${code}`);
      });

    }

    /**
    * Listens for incoming connections on a provided port
    * @param {Number} port
    */
    listen(port) {

      port = port || 3000;

      this.server.listen(port);
      console.log(`[${this.name}.${process.pid}] Ready: HTTP Worker listening on port ${port}`);
      process.send({message: 'ready'});

    }

    getTime() {

      let hrTime = process.hrtime()
      return (hrTime[0] * 1000 + hrTime[1] / 1000000);

    }

    /**
    * Logs a server response in the console
    * @param {Number} statusCode HTTP Status Code
    * @param {String} url The url that was hit
    * @param {String} t The time to execute the request
    */
    logResponse(statusCode, url, t, str) {

      let num = Math.floor(statusCode / 100);
      str = str || '';

      if (num === 2) {
        str = str || 'Request OK';
      } else if (num === 3) {
        str = str || 'Request Redirect';
      } else if (num === 4) {
        str = str || 'Request Error';
      } else if (num === 5) {
        str = str || 'Server Error';
      } else {
        str = str || 'Unknown';
      }

      console.log(`[${this.name}.${process.pid}] ${str} [${statusCode | 0}]: ${url} loaded in ${t} ms`);

    }

    /**
    * HTTP Request Handler
    * @param {http.ClientRequest} req
    * @param {http.ServerResponse} res
    */
    handler(req, res) {

      let body = [];
      let bodyLength = 0;
      let maxSize = utilities.parseSize(process.env.MAX_UPLOAD_SIZE) || utilities.parseSize('20MB');
      let start = this.getTime();

      console.log(`[${this.name}.${process.pid}] Incoming Request: ${req.url} from ${req.connection.remoteAddress}`);

      let route = this.router.find(req.url);

      if (!route) {
        this.error(req, res, start, 404, 'Not Found');
        return;
      }

      req.on('data', data => {
        body.push(data);
        bodyLength += data.length;
        if (bodyLength > maxSize) {
          this.error(req, res, start, 413, 'Request Too Large');
          req.connection.destroy();
        }
      });

      req.on('end', () => {

        if (req.connection.destroyed) {
          return;
        }

        body = Buffer.concat(body);

        return this.router.dispatch(
          this.router.prepare(
            req.connection.remoteAddress,
            req.url,
            req.method,
            req.headers,
            body
          ),
          (err, status, headers, data) => {

            if (err) {
              this.error(req, res, start, 500, 'Internal Server Error', err);
            } else {
              this.send(req, res, start, status, headers, data);
            }

          }
        );

      });

    }

    /**
    * HTTP Error
    */
    error(req, res, start, status, message, err) {

      status = status || 500;
      message = message || 'Internal Server Error';

      let headers = {'Content-Type': 'text/plain'};

      err && console.log(err.stack);

      this.send(req, res, start, status, headers, message + (err ? `\n${err.stack}` : ''), message);

    }

    /**
    * Ends the HTTP Response
    */
    send(req, res, start, status, headers, data, log) {

      res.writeHead(status, headers);
      res.end(data);

      this.logResponse(res.statusCode, req.url, (this.getTime() - start).toFixed(3), log);

    }

  }

  return Application;

})();
