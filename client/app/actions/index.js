import _ from 'lodash'

require('es6-promise').polyfill();
require('isomorphic-fetch');

const viewToQuery = (filter, searchQuery) => {
  switch (filter.view) {
    case 'ALL_REGIONS':
      return searchQuery === undefined ?
        'articles' : ''
    case 'A_REGION':
      return 'articles?publisher__region=' + filter.region
    case 'A_TOPIC':
      //TODO: return proper query
      return ''
    case 'A_TOPIC_FROM_A_REGION':
      //TODO: return proper query
      return '';
    default:
      console.log('error: filter not properly defined');
      return ''
  }
}

export const setFilter = (filter, category) => (
    //category is the name of  a region or topic
    {
      type: 'SET_FILTER',
      filter: Object.assign({}, filter, {category})
    }
)

export const getFilteredArticles = (articles, filter) => {
  switch (filter.view) {
    case 'ALL_REGIONS':
      return articles
    case 'A_REGION':
      return articles.filter(
        a => a.publisher.region === filter.region
      )
    // case 'A_TOPIC':
    //   //TODO: return proper query
    //   return ''
    // case 'A_TOPIC_FROM_A_REGION':
    //   //TODO: return proper query
    //   return '';
    default:
      console.log('error: filter not properly defined');
      return articles
  }
}

/*
  'ALL_REGIONS'
    if query.length
      return 'search?q=' + query
    return 'articles'
  'A_REGION'
    if query.length
      return 'search?q=' + query + '&&publisher__region='

*/


export const fetchArticles = (filter, searchQuery) => {
  // searchQuery = (searchQuery === undefined || searchQuery === '') ?
  //   'articles' : 'search?q=' + searchQuery;

  //TODO: handle case where filter = 'All_REGIONS' and a
  //user-searchQuery is passed-in
  //search?q=[keyword]&&articles is an invalid searchQuery

  filter = filter || {view: 'ALL_REGIONS'};
  searchQuery = (searchQuery === undefined || searchQuery === '') ?
    viewToQuery(filter) : 'search?q=' + searchQuery + '&&' + viewToQuery(filter, searchQuery);

  let url = 'http://localhost:3000/v1/' + searchQuery

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
