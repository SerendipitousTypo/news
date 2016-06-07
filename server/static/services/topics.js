/** Topics
* sends articles to Open Calais API 
* receives the information back from Open Calais
* stores the topics keywords in the database
*/

'use strict'

const rp = require('request-promise');
const API_KEY = require('./../config/apikey.js');
var e = require('./errors.js');
var RateLimiter = require('limiter').RateLimiter;

let getTopics = function(content, artId) {
  'use strict'

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
        const politicsGroup = [
          'Disaster_Accident',
          'Law_Crime',
          'Politics',
          'Social Issues',
          'War_Conflict'
          ];
        let topicName = results[topicExt].name;
        if (politicsGroup.indexOf(topicName) !== -1) {
          topicName = 'Politics';
        }
        if(topics.indexOf(topicName) === -1) {
          topics.push(topicName);
        }
      }
    };
    topics.forEach(topic => {
      options = {
        method: 'POST',
        uri: 'http://127.0.0.1:3000/v1/topics',
        body: {
          name: topic,
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
        .catch(err => {
          e('topicsErrorLog', 'article_topic post error in topics', err);
        });
      })
      .catch(err => {
        e('topicsErrorLog', 'Topic post error in topics', err);
      });
    });
  })
  .catch(err => {
    e('CalaisErrorLog', 'topic parsing error in Open Calais', err);
  });

};

//set rate limiter to run this function only once per second
var limiter = new RateLimiter(1, 'second');

var throttledRequest = function(content, artId) {
  limiter.removeTokens(1, function() {
    getTopics(content, artId);
  });
}

module.exports = throttledRequest;