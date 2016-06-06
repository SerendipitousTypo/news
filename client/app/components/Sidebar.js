import React from 'react'
import { fetchArticles, setFilter } from '../actions'

export const Sidebar = ({store}) => {
  let filter = store.getState().articleFilter;
  let nextFilter = Object.assign({}, filter);

  nextFilter.view = nextFilter.view === 'ALL_REGIONS'
  nextFilter.view = 'A_TOPIC';
  nextFilter.type = 'TOPIC';
  return (

    <div>
        <h3 className="topics-heading left-margin-fix">Topics</h3>

        <div className="demo-list-action mdl-list">
          <div className="mdl-list__item">
            <span className="mdl-list__item-primary-content">

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
                  className="main-link"
                >
                  Politics
                </span>

            </span>
          </div>
          <div className="mdl-list__item">
              <span className="mdl-list__item-primary-content">

                <span onClick={() => {
                      //change filter.topic to
                      //'Politics'
                      nextFilter.topic = 'Business_Finance';
                      store.dispatch(setFilter(
                        nextFilter,
                        'Business_Finance'
                      ));

                      //fetch articles w/ topic 'Politics'
                      store.dispatch(fetchArticles(
                        nextFilter
                      ));
                    }
                  }
                  className="main-link"
                >
                  Business
                </span>

              </span>
          </div>
          <div className="mdl-list__item">
            <span className="mdl-list__item-primary-content">

                <span onClick={() => {
                      //change filter.topic to
                      //'Politics'
                      nextFilter.topic = 'US Elections';
                      store.dispatch(setFilter(
                        nextFilter,
                        'US Elections'
                      ));

                      //fetch articles w/ topic 'Politics'
                      store.dispatch(fetchArticles(
                        nextFilter
                      ));
                    }
                  }
                  className="main-link"
                >
                  US Elections
                </span>

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
