var fetch = require('../services/fetchRss.js');
var master = require('../services/master.js');

module.exports = (app) => {
  
  app.get('/test', (req, res) => {
    master(req, res);
  });

  app.get('/pull', (req, res) => {
    fetch('http://rss.nytimes.com/services/xml/rss/nyt/Politics.xml', req,res);
  });
};