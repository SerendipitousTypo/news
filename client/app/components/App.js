import React from 'react'
import { Component } from 'react'

import { fetchArticles, getFilteredArticles } from '../actions'

import { Sidebar } from './Sidebar';
import { Search } from './Search';
import { Main } from './Main';

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

      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-12">
              <Search store={store}/>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Main store={store} articles={
                getFilteredArticles(
                  state.articles,
                  state.filter
                )}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
