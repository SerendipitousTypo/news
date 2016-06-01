
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { articles } from './reducers/articles';
import reducer  from './reducers/index';
import { App } from './components/App';
// //TODO: convert all jsx files to js files

// let createStore = Redux.createStore;


// let store = createStore(reducer)
// console.log('store ====>', store);

//TODO: how does Provider work?
ReactDOM.render(
    <App store={createStore(reducer)} />,
  document.getElementById('app')
);

