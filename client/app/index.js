import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { articles } from './reducers/articles' //TODO: remove
import reducer  from './reducers/index'
import { App } from './components/App'

let store = createStore(
  reducer,
  applyMiddleware(thunk)
  );

//TODO: implement Provider
render(
    <App store={store} />,
  document.getElementById('app')
);

