import React from 'react'
import { SidebarButton } from './SideBarButton'
import { fetchArticles, setFilter } from '../actions'

export const Sidebar = ({store, nextFilter}) => {
  // let filter = store.getState().articleFilter;
  nextFilter = Object.assign({}, nextFilter);

  nextFilter.view = 'A_TOPIC';
  nextFilter.type = 'TOPIC';


  return (
    <div>
      <h3 className="topics-heading left-margin-fix">Topics</h3>
      <div className="demo-list-action mdl-list">
        {populateSidebar(store, nextFilter)}
      </div>
    </div>
  );

}

const populateSidebar = (store, filter) => {
  //for each button define variables
  return sidebarButtons.map((button, id) => {
    return (
      <SidebarButton
        store={store}
        button={button}
        filter={filter}
        key={id}
      />
    );
  });
}

const sidebarButtons = [
  {
    title: 'US Elections',
    query: 'election AND (US OR united states OR america)'
  },
  {
    title: 'Politics'
  },
  {
    title: 'Business_Finance'
  },
  {
    title: 'Technology_Internet'
  },
  {
    title: 'Sports'
  },
  {
    title: 'Environment'
  }

];

