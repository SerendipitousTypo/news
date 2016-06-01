
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { articles } from './articles'
// //TODO: convert all jsx files to js files
import { App } from './components/App';

let createStore = Redux.createStore;

let store = createStore(newsApp)

//TODO: how does Provider work?
ReactDOM.render(
    <App />,
  document.getElementById('app')
);

