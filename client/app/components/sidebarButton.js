import React from 'react'
import { fetchArticles, setFilter } from '../actions'
import { sanitize } from '../utils'


export const SidebarButton = ({store, button, filter}) => {

  //if button.query is provided then a special
  //query is being sought (e.g. 'US Elections')
  !!button.query ?
    filter.view = 'ALL_REGIONS' :
    button.query = '';

  return (
    <div className="mdl-list__item">
      <span className="mdl-list__item-primary-content">
        <span onClick={() => {
              filter.topic = button.title;
              store.dispatch(setFilter(
                filter,
                button.title
              ));

              store.dispatch(fetchArticles(
                filter,
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