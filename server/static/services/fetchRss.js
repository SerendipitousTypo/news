/*Service that accepts a rss feed URL and displays 
*@params url
*the result in a window*/

var rp = require('request-promise');


module.exports = (url, req, res) => {
  rp(url).then( rss => {
    console.log('from fetch', rss);
    res.send(rss);
  })
  .catch( err => console.log(err));
} 

