/** Static server Router */

var master = require('../services/master.js');

module.exports = (app) => {
  /** Endpoint to read publishers and channels and populate the articles table */
  app.get('/test', (req, res) => {
    master(req, res);
  });
};