import _ from 'lodash'

require('es6-promise').polyfill();
require('isomorphic-fetch');


export const fetchArticles = (query) => {
  query = (query === undefined || query === '') ?
    'articles' : 'search?q=' + query;

  let url = 'http://localhost:3000/v1/' + query

  return dispatch => {

    //TODO: change isFetching state to TRUE

    return fetch(url)
        .then(response => {
          //TODO: handle error
          return response.json()
        })
        .then(result => {
          console.log('data: ', result.data);
          dispatch({type: 'LOAD_ARTICLES', articles: result.data})
        })
  }
}
