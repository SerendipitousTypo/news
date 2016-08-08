import React from 'react'
import { fetchArticles, setFilter } from '../actions'
import { sanitize } from '../utils'
import { ArticleEntry } from './ArticleEntry'

export const ArticlesRow = ({store, title, articles, nextFilter}) => {

  //shallow copy isolates THIS nextFilter object
  //from changes to other nextFilter objects
  nextFilter = Object.assign({}, nextFilter);

  return (
    <div className='articles-row'>
      <div onClick={() => {
          //Assign 'title' to topic or region
          //depending on the current state of the app
          nextFilter.type === 'TOPIC' ?
            nextFilter.topic = title :
            nextFilter.region = title;

          //TODO: batch these dispatches
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
  )
};

const populateRow = (articles, store) => {

  //limit articleEntry per row to 5
  let collection = [];
  for (let i = 0; i < articles.length && i < 4; i++) {
    collection.push(
      <ArticleEntry
        store={store}
        key={i}
        article={articles[i]}
      />
    )
  }

  return collection;
};