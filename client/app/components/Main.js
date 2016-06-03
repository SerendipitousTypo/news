import React from 'react'
import _ from 'lodash'
import { ArticlesRow } from './ArticlesRow';

export var Main = ({store, articles}) => (
  <div className="main-block">
    {populateRows(store, articles)}
  </div>
);


var populateRows = (store, articles) => {
  //TODO: change name from 'topics'
  var topics = {};

  //sort articles by category, according to filter, ie. {'North America': [Articles. . . ]}
  articles.forEach(article => {

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
  return _.map(topics, (topic, category) => {
    return <ArticlesRow store={store} title={category} articles={topic} />;
  });
};

//TODO: Delete
window.Main = Main;

