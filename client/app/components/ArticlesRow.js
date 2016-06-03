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
  //perhaps temporary
  //limit articleEntry per row to 5
  let collection = [];
  for (var i = 0; i < articles.length && i < 4; i++) {
    collection.push(
      <ArticleEntry
        store={store}
        key={i}
        article={articles[i]}
      />
    )
  }

  // console.log('articlesRow: ', articles);
  return collection;

  // return articles.map((article, key) => {
  //   return <ArticleEntry store={store} key={key} article={article} />;
  // });

};