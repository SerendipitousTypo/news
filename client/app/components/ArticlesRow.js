//for every article served, create a articleEntry (4 articles served)
import React from 'react'
import { ArticleEntry } from './articleEntry'
import { setView } from '../actions'

export var ArticlesRow = ({store, title, articles}) => (
  <div className='articlesRow'>
    <div onClick={() => {
      //change view to a Region
      store.dispatch(setView(
        'A_REGION',
        title
      ))
    }}
    className="rowTitle">{title}</div>
    <div className='rowArticles'>
      {populateRow(articles, store)}
    </div>
  </div>
);

var populateRow = (articles, store) => {
  return articles.map((article, key) => {
    return <ArticleEntry store={store} key={key} article={article} />;
  });
};