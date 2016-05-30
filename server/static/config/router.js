/** Static server Router */

var fetch = require('../services/fetchRss.js');
var master = require('../services/master.js');

module.exports = (app) => {
  /** Endpoint to read publishers and channels and populate the articles table */
  app.get('/test', (req, res) => {
    master(req, res);
  });

//hardcoded get for testing --- commented out 5-30-2016
  // app.get('/pull', (req, res) => {
  //   fetch('http://rss.nytimes.com/services/xml/rss/nyt/Politics.xml', req,res);
  // });
};