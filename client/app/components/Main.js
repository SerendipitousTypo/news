import React from 'react';
import _ from 'lodash';
import { ArticlesRow } from './ArticlesRow';

export const Main = ({store, articles}) => (
  <div className="main-block">
    {populateRows(store, articles)}
  </div>
);


<<<<<<< HEAD
const populateRows = (store, articles) => {
  let filter = store.getState().articleFilter;
  let categories = {};
   //will be set to articleFilter on category click
   //in a article row
  let nextFilter = Object.assign({}, filter);

  //filter articles based on state.articleFilter
  if (filter.view === 'ALL_REGIONS') {
      nextFilter.view = 'A_REGION';
      nextFilter.type = 'TOPIC';
      articles.forEach(article => {

        //TODO: limit articles rendered here?
        //IF categories does not have a categories
        //create key for categories
        if ( categories.hasOwnProperty(article.publisher.region) ) {
          categories[article.publisher.region].push(article);
        } else {
          categories[article.publisher.region] = [article];
        }
      });
  } else if (filter.view === 'A_REGION') {
    //all articles served should be of that region,
    //display all articles by Topic
    console.log('view is A_REGION!');
  }

  //sort articles by categories, according to filter, ie. {'North America': [Articles. . . ]}

  // console.log('categories: ', categories);

  //create a row of articles per categories, according to filter
  return _.map(categories, (category, catName) => {
    return <ArticlesRow store={store} key={catName} title={catName} articles={category} nextFilter={nextFilter} />;
=======

var populateRows = articles => {
  var topics = {};

  //sort articles by category, according to filter, ie. {'North America': [Articles. . . ]}
  articles.forEach(article => {
    //TODO: get rid of this
    //IF topics does not have a category
    //create key for category
    if ( topics.hasOwnProperty(article.publisher.region) ) {
      topics[article.publisher.region].push(article);
    } else {
      topics[article.publisher.region] = [article];
    }
  });
  // console.log('topics: ', topics);

  //create a row of articles per category, according to filter
  var i = 0;
  return _.map(topics, (topic, category) => {

    return <ArticlesRow title={category} articles={topic} key={i++}/>;
>>>>>>> 9f35841a383964a7205f1c06e000be4abbcd16db
  });
};
