import React from 'react'
import { fetchArticles, setView } from '../actions'

export var ArticleEntry = ({store, article}) => (
  <div className="articleEntry">
    <div className='articleTitle'>{article.title}</div>
    <div className='articleSnipper'>{article.content}</div>
  </div>
);