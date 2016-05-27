var parser = require ('rss-parser');
// var rp = require('request-promise');

module.exports = (url, pub_id) => {

  parser.parseURL(url, (err, parsed) => {
    console.log(parsed.feed.title);
    parsed.feed.entries.forEach(function(entry) {
      //store article
      console.log('*****************');
      if(entry.categories) {

      console.log(entry.categories[0]['_']);
        
      }

      //load keywords into keywords
      //iterate over the categoreis 
    })
  })
}

// module.exports ('http://rss.nytimes.com/services/xml/rss/nyt/World.xml');

//update any keywords that are not in our keyword database
//store the articles in the article database
//