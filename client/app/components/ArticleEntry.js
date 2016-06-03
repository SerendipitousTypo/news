import React from 'react';

export var ArticleEntry = ({article}) => (
  <div className="articleEntry mdl-cell mdl-cell--3-col ">
    <div className="row valign-wrapper">
      <div className="col s6 offset-s3 valign">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">Card Title</span>
            <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
          </div>
          <div className="card-action">
            <a href="#">This is a link</a>
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);