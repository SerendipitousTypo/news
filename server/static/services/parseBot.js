var parser = require ('rss-parser');
// var rp = require('request-promise');

module.exports = url => {
  parser.parseURL(url, (err, parsed) => {
    console.log(parsed.feed.title);
    parsed.feed.entries.forEach(function(entry) {
      console.log(entry.categories[1]['_']);
    })
  })
}

module.exports ('http://rss.nytimes.com/services/xml/rss/nyt/World.xml');