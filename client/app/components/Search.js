import React from 'react'
import { fetchArticles } from '../actions'


export var Search = ({store}) => {
  let input;
  return (
    <div className="col-md-12">
      <div className="search">
        <input type="text" className="form-control" placeholder="Search..."
          ref={node => {
            input = node;
          }}
          onChange={
            _.debounce(
              (() =>
                store.dispatch(
                  fetchArticles(
                    store.getState().articleFilter.view,
                    input.value
                  )
              )),
            300)}
        />
      </div>
    </div>
  );
}
