import _ from 'lodash'

require('es6-promise').polyfill();
require('isomorphic-fetch');


export const setFilter = (filter, category) => (
    //category is the name of  a region or topic
    {
      type: 'SET_FILTER',
      filter: Object.assign({}, filter, {category})
    }
)

export const setContent = (content) => (
  {
    type: 'SET_CONTENT',
    content
  }
)

//Not currently in use
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

const createQuery = (filter, searchQuery) => {
  switch (filter.view) {
    case 'ALL_REGIONS':
      return searchQuery === undefined ?
        'frontPage' : ''

    case 'A_REGION':
      return 'articles?publisher__region=' + filter.region

    case 'A_TOPIC':
      return 'articles?artTopics__topic__name=' + filter.topic

    case 'A_TOPIC_FROM_A_REGION':
      //TODO: utilize multiple liness
      return 'articles?artTopics__topic__name=' + filter.topic + '&&publisher__region=' + filter.region

    default:
      console.log('error: filter not properly defined');
      return ''
  }
}

export const fetchArticles = (filter, searchQuery) => {

  return dispatch => {

    filter = filter || {view: 'ALL_REGIONS'};
    searchQuery = (searchQuery === undefined ||
    searchQuery === '') ?
      createQuery(filter) :
      'search?q=' + searchQuery + '&&' + createQuery(filter, searchQuery).slice(9);

    let url = 'http://localhost:3000/v1/' + searchQuery;
    // console.log('url: ', url);

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
        //TODO: change isFetching state to False
  }
}
