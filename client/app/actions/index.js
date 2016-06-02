require('es6-promise').polyfill();
require('isomorphic-fetch');

export const fetchArticles = () => {

  return dispatch => {

    //change isFetching state to TRUE


    return fetch('http://localhost:3000/v1/articles')
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