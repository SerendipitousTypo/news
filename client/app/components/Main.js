import React from 'react'
import _ from 'lodash'
import { sanitize, sortArticle } from '../utils'
import { ArticlesRow } from './ArticlesRow'

export const Main = ({store, articles, nextFilter}) => (
  <div className="main-block">
    <h3 className="top-header">{createTitle(store)}</h3>
    {populateRows(store, articles, nextFilter)}
  </div>
);

const populateRows = (store, articles, nextFilter) => {
  let filter = store.getState().articleFilter;
  let categories = {};
  let prop;

  if (filter.view === 'ALL_REGIONS') {
      nextFilter.view = 'A_REGION';
      nextFilter.type = 'REGION';

      articles.forEach(article => {
        prop = article.publisher.region;
        categories = sortArticle(categories, article, prop);
      });

  } else if (filter.view === 'A_REGION') {
      //all articles served should be of filter.region,
      //display all articles by Topic
      nextFilter.view = 'A_TOPIC_FROM_A_REGION';
      nextFilter.type = 'TOPIC';
      articles.forEach(article => {

        article.artTopics.forEach(artTop => {
          prop = artTop.topic.name;

          categories = sortArticle(categories, article, prop);
        });
      });

  } else if (filter.view === 'A_TOPIC') {
      //all articles served should be of filter.topic
      //display all article by Region
      nextFilter.view = 'A_TOPIC_FROM_A_REGION';
      nextFilter.type = 'REGION';

      articles.forEach(article => {
          prop = article.publisher.region;
          categories = sortArticle(categories, article, prop);
      });

  } else if (filter.view === 'A_TOPIC_FROM_A_REGION') {
      //all articles served should be of
      //filter.topic and filter.region
      //create rows of four articles
      let rows = [];
      let row = [];

      articles.forEach((article, idx, collection) => {
        row.push(article);
        if (
          (idx + 1) % 4 === 0 ||
          idx >= collection.length - 1
        ) {
          rows.push(row);
          row = [];
        }
      });

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

  return _.map(categories, (category, catName) => {

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
