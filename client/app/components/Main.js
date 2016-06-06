import React from 'react'
import _ from 'lodash'
import { sanitize, sortArticle } from '../utils'
import { ArticlesRow } from './ArticlesRow'

export const Main = ({store, articles}) => (
  <div className="main-block">
    <h3>{createTitle(store)}</h3>
    {populateRows(store, articles)}
  </div>
);

const createTitle = (store) => {
  let filter = store.getState().articleFilter;
  switch (filter.view) {
    case 'ALL_REGIONS':
      return 'All Regions'
    case 'A_REGION':
      return filter.region
    case 'A_TOPIC':
      return sanitize(filter.topic)
    case 'A_TOPIC_FROM_A_REGION':
      return sanitize(filter.topic) + ' in ' + filter.region
    default:
      return '';
  }
}

const populateRows = (store, articles) => {
  let filter = store.getState().articleFilter;
  let categories = {};
   //will be set to articleFilter on category click
   //in a article row
  let nextFilter = Object.assign({}, filter);
  let prop;

  //filter articles based on state.articleFilter
  if (filter.view === 'ALL_REGIONS') {
      nextFilter.view = 'A_REGION';
      nextFilter.type = 'REGION';

      articles.forEach(article => {
        prop = article.publisher.region;
        categories = sortArticle(categories, article, prop);
      });

  } else if (filter.view === 'A_REGION') {
    //all articles served should be of that region,
    //display all articles by Topic
    nextFilter.view = 'A_TOPIC_FROM_A_REGION';
    nextFilter.type = 'TOPIC';

    articles.forEach(article => {

      article.artTopics.forEach(artTop => {
        prop = artTop.topic.name;
        categories = sortArticle(categories, artTop, prop);
      });
    });

  } else if (filter.view === 'A_TOPIC') {
    nextFilter.view = 'A_TOPIC_FROM_A_REGION';
    nextFilter.type = 'REGION';

    articles.forEach(article => {
        prop = article.publisher.region;
        categories = sortArticle(categories, article, prop);
    });

  } else if (filter.view === 'A_TOPIC_FROM_A_REGION') {
    //create a row with every four articles
    let rows = [];
    let row = [];

    articles.forEach((article, idx, collection) => {
      row.push(article);
      if ( (idx + 1) % 4 === 0 ||
        idx >= collection.length - 1 ) {
        rows.push(row);
        row = [];
      }
    });

    //return array of ArticlesRow's
    return _.map(rows, (articles, idx) => {
      return(
        <ArticlesRow
          store={store}
          key={idx}
          articles = {articles}
          title={''}
        />
      );
    });
  }

  //TODO: make a utility function
  console.log('categories: ', categories);
  return _.map(categories, (category, catName) => {
    console.log('blip');
    return(
      <ArticlesRow
        store={store}
        key={catName}
        title={catName}
        articles={category}
        nextFilter={nextFilter}
      />
    );
  });
};
