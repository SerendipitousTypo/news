import React from 'react'

export var Sidebar = ({}) => (
  <div>
  <h3 className="topics-heading">Topics</h3>
  
    <div className="demo-list-action mdl-list">
  <div className="mdl-list__item">
    <span className="mdl-list__item-primary-content">
      <i className="material-icons mdl-list__item-avatar">account_balance</i>
      <span>Politics</span>
    </span>
  </div>
  <div className="mdl-list__item">
    <span className="mdl-list__item-primary-content">
      <i className="material-icons mdl-list__item-avatar">assessment</i>
      <span>Economics</span>
    </span>
  </div>
  <div className="mdl-list__item">
    <span className="mdl-list__item-primary-content">
      <i className="material-icons mdl-list__item-avatar">assignment_turned_in</i>
      <span>US elections</span>
    </span>
    <span className="mdl-list__item-secondary-content">
      <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">star</i></a>
    </span>
  </div>
  <div className="mdl-list__item">
    <span className="mdl-list__item-primary-content">
      <i className="material-icons mdl-list__item-avatar">whatshot</i>
      <span>Current events</span>
    </span>
    <span className="mdl-list__item-secondary-content">
    </span>
  </div>
</div>











  </div>
);

window.Sidebar = Sidebar;

