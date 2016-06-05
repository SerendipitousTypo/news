import React from 'react';
import _ from 'lodash';
import { ArticlesRow } from './ArticlesRow';

export const Main = ({store, articles}) => (
  <div className="main-block">
    {populateRows(store, articles)}
  </div>
);

const populateRows = (store, articles) => {
  let filter = store.getState().articleFilter;
  let categories = {};
   //will be set to articleFilter on category click
   //in a article row
  let nextFilter = Object.assign({}, filter);

  //filter articles based on state.articleFilter
  if (filter.view === 'ALL_REGIONS') {
      nextFilter.view = 'A_REGION';
      nextFilter.type = 'REGION';

      //TODO: use a utlity function
      articles.forEach(article => {

        if ( categories.hasOwnProperty(article.publisher.region) ) {
          categories[article.publisher.region].push(article);
        } else {
          categories[article.publisher.region] = [article];
        }
      });
  } else if (filter.view === 'A_REGION') {
    //all articles served should be of that region,
    //display all articles by Topic
    nextFilter.view = 'A_TOPIC_FROM_A_REGION';
    nextFilter.type = 'TOPIC';

    console.log('articles: ', articles);
    //TODO: use a utlity function
    articles.forEach(article => {

      article.artTopics.forEach(artTop => {
        if ( categories.hasOwnProperty(artTop.topic.name) ) {
          categories[artTop.topic.name].push(article);
        } else {
          categories[artTop.topic.name] = [article];
        }
      });
    });
    console.log('categories: ', categories);
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
      return <ArticlesRow
                store={store}
                key={idx}
                articles = {articles}
                title={''}
             />
    });
  }

  //TODO: make a utility function
  return _.map(categories, (category, catName) => {
    return <ArticlesRow store={store} key={catName} title={catName} articles={category} nextFilter={nextFilter} />;
  });
};
