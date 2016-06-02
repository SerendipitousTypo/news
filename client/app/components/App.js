import React from 'react'
// import { Component } from 'react'

import { fetchArticles } from '../actions'

import { Sidebar } from './Sidebar';
import { Search } from './Search';
import { Main } from './Main';

//TODO convert to import/from
require('es6-promise').polyfill();
require('isomorphic-fetch');


export class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      publishers: {},
      articles: [
        {
          region: 'North America',
          publisher: 'NY Times',
          title: 'title1',
          snippet: 'some snippet about the article',
          url: 'https://www.google.com'
        },
        {
          region: 'North America',
          publisher: 'NY Times',
          title: 'title2',
          snippet: 'some snippet about the article',
          url: 'https://www.google.com'
        },
        {
          region: 'North America',
          publisher: 'NY Times',
          title: 'title3',
          snippet: 'some snippet about the article',
          url: 'https://www.google.com'
        },
        {
          region: 'Russia',
          publisher: 'NY Times',
          title: 'title1',
          snippet: 'some snippet about the article',
          url: 'https://www.google.com'
        },
        {
          region: 'Russia',
          publisher: 'NY Times',
          title: 'title2',
          snippet: 'some snippet about the article',
          url: 'https://www.google.com'
        },
        {
          region: 'Russia',
          publisher: 'NY Times',
          title: 'title3',
          snippet: 'some snippet about the article',
          url: 'https://www.google.com'
        }
      ]
    };
  }

  componentDidMount() {
    const { store } = this.props;
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
    const props = this.props;
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
              <Main articles={state.articles} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
