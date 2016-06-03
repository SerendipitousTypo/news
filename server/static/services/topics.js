'use strict'

const rp = require('request-promise');
const API_KEY = require('./../config/apikey.js');
var RateLimiter = require('limiter').RateLimiter;

let getTopics = function(content) {
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
  .catch(err => console.log(err));

};

//set rate limiter to run this function only once per second
var limiter = new RateLimiter(1, 'second');

var throttledRequest = function(content) {
  limiter.removeTokens(1, function() {
    getTopics(content);
  });
}

module.exports = throttledRequest;