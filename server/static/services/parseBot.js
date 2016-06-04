/** parseBot
*@params url
*@params publisher id
*
* parses url and stores appropriate fields in the articles table
* if there are categories provided it will update the keywords table as well
*/

var parser = require ('rss-parser');
var rp = require('request-promise');
var e = require('./errors.js');
var topics = require('./topics.js');


module.exports = (url, pub_id) => {
'use strict'
  parser.parseURL(url, (err, parsed) => {
    // console.log(parsed.feed.title);
    parsed.feed.entries.forEach(entry => {
      //store article
      var options = {
          method: 'POST',
          uri: 'http://127.0.0.1:3000/v1/articles',
          body: {
            title: entry.title,
            date: entry.pubDate || entry.pubdate,
            url: entry.link,
            content: entry.contentSnippet,
            'publisher_id': pub_id
          },
          json:true
      }
      rp(options)
      .then(results => {
        let artId = results.data[0].id;
        let content = results.data[0].content;
        topics(content, artId);
      })
      .catch(err => {
        e('parseBotErrorLog', 'Article post error in parsebot', err);
      });
    });
  })
}