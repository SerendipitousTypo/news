//for every article served, create a articleEntry (4 articles served)
import React from 'react';
import { ArticleEntry } from './ArticleEntry';

export var ArticlesRow = ({title, articles}) => (
  <div className='articlesRow'>
    <div className="rowTitle">{title}</div>
    <div className='mdl-grid'>
      {populateRow(articles)}
    </div>
  </div>
);

var populateRow = articles => {
  var i = 0;
  return articles.map(article => {
    return <ArticleEntry article={article} key ={i++}/>;
  });
};