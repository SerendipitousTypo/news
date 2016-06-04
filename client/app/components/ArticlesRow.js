//for every article served, create a articleEntry (4 articles served)
import React from 'react'
import { ArticleEntry } from './articleEntry'
import { fetchArticles, setFilter } from '../actions'

export var ArticlesRow = ({store, title, articles, nextFilter}) => (
  <div className='articles-row'>
    <div onClick={() => {
      //TODO: change view to a Region OR Topic
      //change view to a Region

      console.log('nextFilter: ', nextFilter);
      store.dispatch(setFilter(
        nextFilter,
        title
      ))
      // store.dispatch(fetchArticles())
    }}
    className="left-margin-fix">
      <a href="#" className="main-link"><h4>
        {title}
      </h4></a>
    </div>
    <div className='mdl-grid'>
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