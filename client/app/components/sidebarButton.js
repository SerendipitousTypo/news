import React from 'react'
import { fetchArticles, setFilter } from '../actions'
import { sanitize } from '../utils'


export const SidebarButton = ({store, button, filter}) => {
  button.query = button.query || '';

  return (
    <div className="mdl-list__item">
      <span className="mdl-list__item-primary-content">
        <span onClick={() => {
              //change filter.topic to
              //'Politics'
              filter.topic = button.title;
              store.dispatch(setFilter(
                filter,
                button.title
              ));

              //fetch articles w/ topic 'Politics'
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