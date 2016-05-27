var request = require('request-promise');

module.exports = (req, res) => {
  let s = [];
  let d = request('http://127.0.0.1:3000/v1/channels')
  .then( data => {
    data = JSON.parse(data);
    return data.data;
  })
  .then(dataArray => {
    dataArray.forEach(data => {
      let lastUpdate = data.last_updated || 'Wed, 25 May 2016 23:30:18 GMT';
      let options = {
        headers:{
          'If-Modified-Since': lastUpdate
        }
      }
      request(data.url, options)
      .then( response => 
        s.push(response)
      ).then( () => console.log(s));
    })
    // res.send(s);
  })
  .catch( err => console.log(err));

  //iterate over d and get 200 or 304 for each channel in D
  // d.then(dataArray => {
  //   dataArray.forEach(data => {
  //   let lastUpdate = data.last_updated || 'Thu, 26 May 2016 23:30:18 GMT';
  //   let options = {
  //     headers:{
  //       'If-Modified-Since': lastUpdate
  //     }
  //   }
  //   request(data.url, options)
  //   .then( response => console.log(response));
  // })})
  // .catch(err => console.log(err));
}