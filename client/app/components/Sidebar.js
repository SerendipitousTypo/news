import React from 'react'
import { fetchArticles, setFilter } from '../actions'

export const Sidebar = ({store}) => {
  let filter = store.getState().articleFilter;
  let nextFilter = Object.assign({}, filter);
  nextFilter.view = 'A_TOPIC';
  nextFilter.type = 'TOPIC';
  return (

    <div>
        <h3 className="topics-heading left-margin-fix">Topics</h3>

        <div className="demo-list-action mdl-list">
          <div className="mdl-list__item">
            <span className="mdl-list__item-primary-content">

              <a href="#" className="main-link">
                <span onClick={() => {
                    //change filter.topic to
                    //'Politics'
                    nextFilter.topic = 'Politics';
                    store.dispatch(setFilter(
                      nextFilter,
                      'Politics'
                    ));

                    //fetch articles w/ topic 'Politics'
                    store.dispatch(fetchArticles(
                      nextFilter
                    ));
                  }

                  }
                >Politics</span>
              </a>

            </span>
          </div>
          <div className="mdl-list__item">
              <span className="mdl-list__item-primary-content">

                <a href="#" className="main-link">
                  <span>Economics</span>
                </a>
              </span>
          </div>
          <div className="mdl-list__item">
            <span className="mdl-list__item-primary-content">

              <a href="#" className="main-link">
                <span>US elections</span>
              </a>
            </span>
          <span className="mdl-list__item-secondary-content">
            <a className="mdl-list__item-secondary-action" href="#"></a>
          </span>
        </div>
        <div className="mdl-list__item">
          <span className="mdl-list__item-primary-content">

            <a href="#" className="main-link">
              <span>Current events</span>
            </a>
          </span>
          <span className="mdl-list__item-secondary-content">
          </span>
        </div>
      </div>
    </div>
  )
};
