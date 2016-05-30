/** Worker Service
* v 0.0.1 called from the master.js bot. 
* 
*/

var parser = require ('rss-parser');
var rp = require('request-promise');

/** parseBot
*@params url
*@params publisher id
*
* parses url and stores appropriate fields in the articles table
* if there are categories provided it will update the keywords table as well
*/
module.exports = (url, pub_id) => {
'use strict'
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
              options = {
                method: 'POST',
                uri: 'http://127.0.0.1:3000/v1/art_keys/',
                body: {
                  article_id: id, 
                  keyword_id: response.data[0].id
                },
                json:true
              };
              rp(options)
              .then(response => console.log('success updating art_keys'))
              .catch(err => console.log('error updating art_keys', err));
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