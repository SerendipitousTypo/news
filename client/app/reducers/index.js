import React from 'react'
import { combineReducers } from 'redux'
import articles  from './articles'
import articleFilter from './articleFilter'

export default combineReducers({
  articles,
  articleFilter
});

