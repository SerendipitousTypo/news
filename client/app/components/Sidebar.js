import React from 'react'

export var Sidebar = ({}) => (
  <div>
  <h3 className="topics-heading left-margin-fix">Topics</h3>
  
    <div className="demo-list-action mdl-list">
  <div className="mdl-list__item">
      <span className="mdl-list__item-primary-content">
        <i className="material-icons mdl-list__item-avatar">account_balance</i>
        <a href="#" className="main-link">
          <span>Politics</span>
        </a>
      </span>
  </div>
  <div className="mdl-list__item">
      <span className="mdl-list__item-primary-content">
        <i className="material-icons mdl-list__item-avatar">assessment</i>
        <a href="#" className="main-link">
          <span>Economics</span>
        </a>
      </span>
  </div>
  <div className="mdl-list__item">
      <span className="mdl-list__item-primary-content">
        <i className="material-icons mdl-list__item-avatar">assignment_turned_in</i>
        <a href="#" className="main-link">
          <span>US elections</span>
        </a>
      </span>
    <span className="mdl-list__item-secondary-content">
      <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
    </span>
  </div>
  <div className="mdl-list__item">
    <span className="mdl-list__item-primary-content">
      <i className="material-icons mdl-list__item-avatar">whatshot</i>
      <a href="#" className="main-link">
        <span>Current events</span>
      </a>
    </span>
    <span className="mdl-list__item-secondary-content">
    </span>
  </div>
</div>











  </div>
);

//TODO: Delete
window.Sidebar = Sidebar;

