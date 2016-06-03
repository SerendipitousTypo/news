import React from 'react';
import _ from 'lodash';
import { ArticlesRow } from './ArticlesRow';

export var Main = ({articles}) => (
  <div className="main-block">
    {populateRows(articles)}
  </div>
);



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
  });
};

window.Main = Main;

