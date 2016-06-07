import React from 'react'
import { combineReducers } from 'redux'
import articles  from './articles'
import articleFilter from './articleFilter'
// import articleContent from './articleContent'
// import fetchStatus from './fetchStatus'

export default combineReducers({
  articles,
  articleFilter
  //articleContent
  //fetchStatus
});

