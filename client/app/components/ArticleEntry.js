import React from 'react'
import { fetchArticles, setView } from '../actions'

export var ArticleEntry = ({article}) => (
  <div className="articleEntry mdl-cell mdl-cell--3-col ">
    <div className="row valign-wrapper">
      <div className="col s6 offset-s3 valign">
        <div className="card mdl-color--white mdl-shadow--2dp">
          <div className="card-content white-text">
            <div className="card-title">{article.title}</div>
            <div className="card-text">{article.content}</div>
            <div className="mdl-card__actions mdl-card--border">
              <a href="http://localhost:3000/v1/pages?url=http://www.bbc.co.uk/news/world-us-canada-31120958#sa-ns_mchannel=rss&ns_source=PublicRSS20-sa" target="_blank" className="mdl-button mdl-js-button mdl-js-ripple-effect">Read</a>
              <a href={article.url} target="_blank" className="mdl-button mdl-js-button mdl-js-ripple-effect">URL</a>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);