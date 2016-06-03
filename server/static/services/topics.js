'use strict'

const rp = require('request-promise');
const API_KEY = require('./../config/apikey.js');
var RateLimiter = require('limiter').RateLimiter;

let getTopics = function(content, artId) {
  'use strict'

  console.log('inside the getTopics function');
  let topics = [];

  let options = {
    method: 'POST',
    uri: 'https://api.thomsonreuters.com/permid/calais',
    headers: {
      'Content-Type': 'text/raw',
      'x-ag-access-token': API_KEY,
      'outputFormat': 'application/json'
    },
    body: content
  };

  rp(options)
  .then(result => {
    let results = JSON.parse(result);
    let docID = results.doc.info.docId;
    for (var i = 0; i < 5; i++) {
      let topicExt = docID + '/cat/' + i;
      if (results[topicExt]) {
        topics.push(results[topicExt].name);
      }
    };
    console.log('these are the topics within the request', topics);
    return topics;
  })
  .then(topics => {
    topics.forEach(topic => {
      options = {
        method: 'POST',
        uri: 'http://127.0.0.1:3000/v1/topics',
        body: {
          topic: topic,
        },
        json:true
      };
      rp(options)
      .then(response => {
        options = {
          method: 'POST',
          uri: 'http://127.0.0.1:3000/v1/art_topics/',
          body: {
            article_id: artId, 
            topic_id: response.data[0].id
          },
          json:true
        };
        rp(options)
        .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
    });
  })
  .catch(err => console.log(err));

};

//set rate limiter to run this function only once per second
var limiter = new RateLimiter(1, 'second');

var throttledRequest = function(content, artId) {
  limiter.removeTokens(1, function() {
    getTopics(content, artId);
  });
}

module.exports = throttledRequest;