/**Worker Service
* reads the articles table and checks for any article that doesn't have a snippet
* gets the acutal text and adds the first 150 characters as a snippet
*/
var rp = require('request-promise');
var e = require('./errors.js');

module.exports = () => {
  'use strict'

  //get all articles that have no content
<<<<<<< 441661066dfaef6e5d74b3d8a1178eab12fa0135

=======
  console.log('Snippet Manager Running##############')
>>>>>>> FEAT - inprogress snippetManager
  rp('http://127.0.0.1:3000/v1/articles?content=')
  .then(articles => {
    let art = JSON.parse(articles);
    art.data.forEach(article => {
      let target = 'http://127.0.0.1:3000/v1/pages?url=' + article.url;
      rp(target)
      .then(response => {
        let resp = JSON.parse(response);
        let snippet = resp.data[0].text.slice(0, 150) + '...';
<<<<<<< 441661066dfaef6e5d74b3d8a1178eab12fa0135
=======
        // console.log('*************', snippet)
      
>>>>>>> FEAT - inprogress snippetManager
       let putUrl ='http://127.0.0.1:3000/v1/articles/' + article.id;
       var options = {
        method: 'PUT',
        uri: putUrl,
        body: {
          content: snippet
<<<<<<< 441661066dfaef6e5d74b3d8a1178eab12fa0135
        },
        json: true

       };
        rp(options)
        .catch(err => {
          e('snippetManagerLog', 'PUT issue', err);
        })
      })
    });
  })
  .catch( err => {
    e('snippetManagerLog', 'get articles with no content issue', err);
  });
=======
        }
       };
        rp(options)
        .then(response => console.log("should be good go check"))
        .catch(err => console.log("error putting", err))
      })
    });
  })
  .catch( err => console.log('error getting articles', err));
>>>>>>> FEAT - inprogress snippetManager
}

module.exports();