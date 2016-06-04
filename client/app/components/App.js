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

    console.log('state: ', state);

    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <Search store={store}/>
      
        <main className="mdl-layout__content">    
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--3-col">
              <Sidebar />
            </div>
<<<<<<< HEAD
          </div>
          <div className="row">
            <div className="col-md-12">
              <Main store={store} articles={
                getFilteredArticles(
                  state.articles,
                  state.articleFilter
                )}
              />
=======
            <div className="mdl-cell mdl-cell--9-col graybox">
              <Main articles={state.articles} />
>>>>>>> 9f35841a383964a7205f1c06e000be4abbcd16db
            </div>
          </div>
        </main>

        <Footer />

      </div>
    );
  }
}
