<<<<<<< 8737d8fe75e37cc421b8995cd8e51319ec756236

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { articles } from './articles'
import { App } from './components/App';
// //TODO: convert all jsx files to js files

let createStore = Redux.createStore;

let store = createStore(newsApp)

//TODO: how does Provider work?
ReactDOM.render(
    <App />,
  document.getElementById('app')
);

