var request = require('request-promise');

module.exports = (req, res) => {
  let d = request('http://127.0.0.1:3000/v1/channels')
  .then( data => data.data)
  .catch( err => console.log(err));

  console.log('this is the d', d);

  //iterate over d and get 200 or 304 for each channel in D
  d.forEach(data => {
    let lastUpdate = data.last_updated || 'Thu, 26 May 2016 23:30:18 GMT';
    let options = {
      headers:{
        'If-Modified-Since': lastUpdate
      }
    }
    request(data.url, options)
    .then( response => console.log(response));
  });
}