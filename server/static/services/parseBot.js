var parser = require ('rss-parser');
var rp = require('request-promise');

module.exports = (url, pub_id) => {

  parser.parseURL(url, (err, parsed) => {
    console.log(parsed.feed.title);
    parsed.feed.entries.forEach(entry => {
      let artId = 0;
      //store article
      var options = {
          method: 'POST',
          uri: 'http://127.0.0.1:3000/v1/articles',
          body: {
            title: entry.title,
            date: entry.pubDate,
            url: entry.link,
            content: entry.contentSnippet,
            'publisher_id': pub_id
          },
          json:true
      }
      rp(options)
      .then(response => {
        console.log('Article posted successfully');
        return artId = response.data[0].id;
      })
      .then( id => {
         if(entry.categories) {
          entry.categories.forEach(keyword => {
            options = {
              method: 'POST',
              uri: 'http://127.0.0.1:3000/v1/keywords',
              body: {
                keyword: keyword['_'],
              },
              json:true
            };
            rp(options)
            .then(response => {
              console.log('article ID', id);
              console.log('keyword ID', response.data[0].id);
            })
            .catch(err => {
              console.log('keyword entry error', err)
            })
        });
       }
      }).catch(err => console.log('article post error', err));
    });
  })
}

module.exports ('http://rss.nytimes.com/services/xml/rss/nyt/World.xml','1');

//update any keywords that are not in our keyword database
//store the articles in the article database
//