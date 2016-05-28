import React from 'react'

var ArticleEntry = ({article}) => (
  <div className="articleEntry mdl-cell mdl-cell--3-col graybo">
    <div className="demo-card-square mdl-card mdl-shadow--2dp">
      <div className="mdl-card__title mdl-card--expand">
      <h2 className="mdl-card__title-text">{article.title}</h2>
      </div>
      <div className="mdl-card__supporting-text">{article.snippet}</div>
      <div className="mdl-card__actions mdl-card--border">
        <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
          View Updates
        </a>
      </div>
    </div>
  </div>
);