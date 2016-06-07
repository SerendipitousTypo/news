/**Snippet Manager
* reads the articles table and checks for any article that doesn't have a snippet
* gets the acutal text and adds the first 150 characters as a snippet
*/
var rp = require('request-promise');
var e = require('./errors.js');

module.exports = () => {
  'use strict'

  //get all articles that have no content
  rp('http://127.0.0.1:3000/v1/articles?content=')
  .then(articles => {
    let art = JSON.parse(articles);
    art.data.forEach(article => {
      let target = 'http://127.0.0.1:3000/v1/pages?url=' + article.url;
      rp(target)
      .then(response => {
        let resp = JSON.parse(response);
        let snippet = resp.data[0].text.slice(0, 150) + '...';
       let putUrl ='http://127.0.0.1:3000/v1/articles/' + article.id;
       var options = {
        method: 'PUT',
        uri: putUrl,
        body: {
          content: snippet
        },
        json: true

       };
        rp(options)
        .catch(err => {
          e('snippetManagerLog', 'PUT issue', err);
        })
      }).catch(err => {
        e('snippetManagerLog', 'line 37 catch', err);
      })
    });
  })
  .catch( err => {
    e('snippetManagerLog', 'get articles with no content issue', err);
  });
}

module.exports();