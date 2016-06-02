import React from 'react'
import { combineReducers } from 'redux'
import articles  from './articles'
import filter from './appView'

export default combineReducers({
  articles,
  filter
});

