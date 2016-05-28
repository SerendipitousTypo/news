import React from 'react'

export var Sidebar = ({}) => (
  <div>
  <h3 className="topics-heading">Topics</h3>
  <ul>
    <li>Politics</li>
    <li>Economics</li>
    <li>US elections</li>
    <li>Current events</li>
  </ul>
  </div>
);

window.Sidebar = Sidebar;

