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
    // console.log('this is the result from the request', result);
    let docID = results.doc.info.docId;
    console.log(docID);
    for (var i = 0; i < 5; i++) {
      let topicExt = docID + '/cat/' + i;
      console.log('this is the cat obj', topicExt);
      console.log(results[topicExt]);
      if (results[topicExt]) {
        topics.push(results[topicExt].name);
      }
    };
    console.log('these are the topics within the request', topics);
    return topics;
  })
  .catch(err => console.log(err));

  // let req = https.request(options, res => {
  //   console.log('in the response from calias');
  //   let result = '';
  //   res.on('data', (chunk) => {
  //     result += chunk;
  //   });
  //   res.on('end', () => {
  //     result = JSON.parse(result);
  //     console.log('this is the result from the https request', result);
  //     let docID = result.doc.docID;
  //     for (var i = 0; i < 5; i ++) {
  //       let topicExt = docID + '/cat/' + i;
  //       if (result[topicExt]) {
  //         topics.push(result[topicExt].name);
  //       }
  //     };
  //     console.log('these are the topics within the request', topics);
  //   });
  // });
  // req.on('error', e => console.log('problem with request', e.message))
  // return topics;
};

var limiter = new RateLimiter(1, 'second');

var throttledRequest = function(content) {
  limiter.removeTokens(1, function() {
    getTopics(content);
  });
}

module.exports = throttledRequest;