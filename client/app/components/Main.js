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
    nextFilter.view = 'A_TOPIC_FROM_A_REGION';
    nextFilter.type = 'TOPIC';
    console.log('articles: ', articles);
    articles.forEach(article => {

      //TODO: limit articles rendered here?
      //IF categories does not have a categories
      //create key for categories
      console.log('topic: ', article.artTopics);
      article.artTopics.forEach(artTop => {
        if ( categories.hasOwnProperty(artTop.topic.name) ) {
          categories[artTop.topic.name].push(article);
        } else {
          categories[artTop.topic.name] = [article];
        }
      });
    });
    console.log('categories: ', categories);
  }

  //sort articles by categories, according to filter, ie. {'North America': [Articles. . . ]}

  // console.log('categories: ', categories);

  //create a row of articles per categories, according to filter
  return _.map(categories, (category, catName) => {
    return <ArticlesRow store={store} key={catName} title={catName} articles={category} nextFilter={nextFilter} />;
  });
};
