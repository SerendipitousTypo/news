import _ from 'lodash'

require('es6-promise').polyfill();
require('isomorphic-fetch');


export const fetchArticles = (query) => {
  query = (query === undefined) ? 'articles' : 'search?q=' + query;

  console.log('query: ', query);

  return dispatch => {

    //change isFetching state to TRUE


    return fetch('http://localhost:3000/v1/' + query)
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

export const debouncedFetch = _.debounce(fetchArticles, 0, { 'maxWait': 1000 });