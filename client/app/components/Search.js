import React from 'react'
import { fetchArticles, debouncedFetch } from '../actions'


export var Search = ({}) => {
  let input;
  return (
    <div className="col-md-12">
      <div className="search">
        <input type="text" className="form-control" placeholder="Search..."
          onChange={(() => console.log(input.value))}
          ref={node => {
            input = node;
          }}
        />
        <button onClick={() => fetchArticles(input.value)}>
          Search
        </button>
      </div>
    </div>
  );
}

// window.Search = Search;

