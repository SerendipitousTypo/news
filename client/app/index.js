import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { articles } from './reducers/articles'
import reducer  from './reducers/index'
import { App } from './components/App'
// //TODO: convert all jsx files to js files

// let createStore = Redux.createStore;


let store = createStore(
  reducer,
  applyMiddleware(thunk)
  );
// console.log('store ====>', store);

//TODO: how does Provider work?
render(
    <App store={store} />,
  document.getElementById('app')
);

