/** Worker Service
* v 0.0.1 runs when the /test endpoint is hit. 
* will eventually run on a schedule
*/

var rp = require('request-promise');
var pb = require('./parseBot.js');

/** Accpts and HTTP request and response
* reads the channels database
* gets the last updated date
* checks the publishers URL to see if they have fresh conent
* if there is new conent it updates the last_updated date in the channel table
* and calls the parseBot service passing in the appropriate params 
*/
module.exports = (req, res) => {
  'use strict'

  rp('http://127.0.0.1:3000/v1/channels')
  .then( data => {
    data = JSON.parse(data);
    return data.data;
  })
  .then(dataArray => {
    dataArray.forEach(data => {
      let lastUpdate = data.last_updated || 'Thu, 26 May 2016 23:30:18 GMT';
      lastUpdate = Date.parse(lastUpdate);
      
      let options = {
        resolveWithFullResponse: true,
        headers:{
          'If-Modified-Since': lastUpdate
        }
      }
      
      rp(data.url, options)
      .then(response => {  
        let modDate = Date.parse(response.headers['last-modified']);
        // console.log('pre parse modDate: ', modDate);
        
        // console.log('modDate', typeof modDate, ":", modDate);
        // console.log('lastUpdate', typeof lastUpdate, ":", lastUpdate)

        if(modDate > lastUpdate && response.body !== undefined) {
          //update the lastMod
         let options = {
            method: 'PUT',
            uri: 'http://127.0.0.1:3000/v1/channels/' + data.id,
            body: {
              'last_updated': modDate
            }, 
            json: true
          }
          rp(options)
          .then(some => console.log('posted'))
          .catch(err => console.log('shit', err));
          console.log('made it in the if');
          pb(data.url, data.publisher_id);
        }      
      }
      ).catch (err => console.log('ERRRRRROOOOOR', err));
    })
    res.send('done');
  })
  .catch( err => console.log(err));
}