var path = require('path');
var fs = require('fs');

module.exports = (log, location, error) => {
  'use strict'
  //log any error that is not caused by a duplicate entry
  if(error.statusCode !== 400 && error.error.meta.error.match('duplicate key value')) {
    let file = log + '.json';
    let targetFile = path.resolve(__dirname, '..', 'logs', file);
    let errorObject = {
      date: Date.now(),
      location: location,
      message: error
    } 
    fs.appendFile(targetFile, JSON.stringify(errorObject, null, 4), (err) => {
      if (err) {
        console.log('file system error');
      }
      
    })
  }
}