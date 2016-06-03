import React from 'react'
import _ from 'lodash'
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
  let nextFilter;

  //filter articles based on state.articleFilter
  if (filter === 'ALL_REGIONS') {
      nextFilter = 'A_REGION'
      articles.forEach(article => {

        //IF categories does not have a categories
        //create key for categories
        if ( categories.hasOwnProperty(article.publisher.region) ) {
          categories[article.publisher.region].push(article);
        } else {
          categories[article.publisher.region] = [article];
        }
      });
  }

  //sort articles by categories, according to filter, ie. {'North America': [Articles. . . ]}

  // console.log('categories: ', categories);

  //create a row of articles per categories, according to filter
  return _.map(categories, (category, catName) => {
    return <ArticlesRow store={store} key={catName} title={catName} articles={category} filter={nextFilter} />;
  });
};
