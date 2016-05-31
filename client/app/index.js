import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import articles from './articles'
//TODO: convert all jsx files to js files
import App from './components/App.jsx'

let store = createStore(articles, articles: [
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
      ]);

//TODO: how does Provider work?
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);