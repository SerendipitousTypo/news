import React from 'react'
import { fetchArticles, debouncedFetch } from '../actions'


export var Search = ({store}) => {
  let input;
  return (
    <div>
      <header className="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">Worldwide news</span>
          <div className="mdl-layout-spacer"></div>
            <div className="search-box">
              <div className="search-icon"><i className="material-icons">search</i></div>
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input className="mdl-textfield__input" 
                       type="text" 
                       id="search-input"
                       ref={node => {
                         input = node;
                       }}
                       onChange={
                         _.debounce((() =>
                         store.dispatch(fetchArticles(input.value))), 
                       300)}
                />
                <label className="mdl-textfield__label" htmlFor="search-input">Search for topics...</label>
              </div>
            </div>
          <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn">
            <i className="material-icons">more_vert</i>
          </button>
          <ul className="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" htmlFor="hdrbtn">
            <li className="mdl-menu__item">About</li>
            <li className="mdl-menu__item">Contact</li>
            <li className="mdl-menu__item">Legal information</li>
          </ul>
        </div>
      </header>
    </div>
  );
}
