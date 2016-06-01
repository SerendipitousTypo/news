var path = require('path');
var fs = require('fs');

module.exports = (log, location, error) => {

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