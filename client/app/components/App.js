import React from 'react'
import { Component } from 'react'

import { fetchArticles, getFilteredArticles } from '../actions'

import { Sidebar } from './Sidebar';
import { Search } from './Search';
import { Main } from './Main';
import { Footer } from './Footer';

require('es6-promise').polyfill();
require('isomorphic-fetch');


export class App extends Component {
  //TODO: what is purpose of constructor?
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    const { store } = this.props;

    //re-render App on any changes to the state in store
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );

    store.dispatch(fetchArticles());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }


  render() {
    const { store } = this.props;
    const state = store.getState();

    //nextFilter is changed according to user interactions
    //determines what articles will be queried & rendered
    //shallow copy used for sake of isolating conflicting changes from each other
    let nextFilter = Object.assign({}, state.articleFilter);

    //will display the current state before every render
    // console.log('state: ', state);

    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Search store={store} />

        <main className="mdl-layout__content">
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--2-col my-sidebar">
              <Sidebar store={store} nextFilter={nextFilter}/>
            </div>
            <div className="mdl-cell mdl-cell--10-col graybox">
              <Main
                store={store}
                articles={state.articles}
                nextFilter={nextFilter}
              />
            </div>
          </div>
        </main>

        <Footer />

      </div>
    );
  }
}
