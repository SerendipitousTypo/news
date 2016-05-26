var fetch = require('../services/fetchRss.js');

module.exports = (app) => {
  
  app.get('/test', (req, res) => {
    res.send('made it yo!');
  });

  app.get('/pull', (req, res) => {
    fetch('http://rss.nytimes.com/services/xml/rss/nyt/Politics.xml', req,res);
  });
};