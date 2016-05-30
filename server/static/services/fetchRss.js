/** Service that accepts a rss feed URL and sends the content in the response
*@params url
*/

var rp = require('request-promise');


module.exports = (url, req, res) => {
  rp(url).then( rss => {
    console.log('from fetch', rss);
    res.send(rss);
  })
  .catch( err => console.log(err));
} 

