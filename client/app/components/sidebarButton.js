import React from 'react'
import { fetchArticles, setFilter } from '../actions'
import { sanitize } from '../utils'


export const SidebarButton = ({store, button, nextFilter}) => {
  nextFilter = Object.assign({}, nextFilter);

  //if button.query is provided then a special
  //query is being sought (e.g. 'US Elections')
  !!button.query ?
    nextFilter.view = 'ALL_REGIONS' :
    button.query = '';

  return (
    <div className="mdl-list__item">
      <span className="mdl-list__item-primary-content">
        <span onClick={() => {
              nextFilter.topic = button.title;
              store.dispatch(setFilter(
                nextFilter,
                button.title
              ));

              store.dispatch(fetchArticles(
                nextFilter,
                button.query
              ));
            }
          }
          className="main-link"
        >
          {sanitize(button.title)}
        </span>
      </span>
    </div>
    );
}