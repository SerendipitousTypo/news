//for every article served, create a articleEntry (4 articles served)
import React from 'react'
import { fetchArticles, setFilter } from '../actions'
import { sanitize } from '../utils'
import { ArticleEntry } from './articleEntry'

export var ArticlesRow = ({store, title, articles, nextFilter}) => (
  <div className='articles-row'>
    <div onClick={() => {
        //TODO: refactor
          //modify nextFilter outside of ArticlesRow's
          //return statement (see sidebar)
        //change view to a Region
        nextFilter.type === 'TOPIC' ?
          nextFilter.topic = title :
          nextFilter.region = title;


        console.log('nextFilter: ', nextFilter);
        store.dispatch(setFilter(
          nextFilter,
          title
        ));


        store.dispatch(fetchArticles(
          nextFilter
        ));

    }}
    className="left-margin-fix">
      <h4 className="main-link">
        {sanitize(title)}
      </h4>
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