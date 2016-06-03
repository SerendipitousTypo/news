//for every article served, create a articleEntry (4 articles served)
import React from 'react';
import { ArticleEntry } from './ArticleEntry';

export var ArticlesRow = ({title, articles}) => (
  <div className='articles-row'>
    <div className="left-margin-fix"><a href="#" className="main-link"><h4>{title}</h4></a></div>
    <div className='mdl-grid'>
      {populateRow(articles)}
    </div>
  </div>
);

var populateRow = articles => {
  let i = 0;
  const articlesPerRegion = 4; 
  return articles.map(article => {
    if (i < articlesPerRegion) {
      return <ArticleEntry article={article} key ={i++}/>;
    }
  });
};