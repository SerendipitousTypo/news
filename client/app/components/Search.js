import React from 'react'
import { fetchArticles } from '../actions'
import {IconButton, Textfield, Menu, MenuItem} from 'react-mdl';
// var Spinner = ReactMDL.Spinner;
export var Search = ({store}) => {
  let input;
  //TODO: refactor into separate components?
  return (
    <div>

      <header className="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
        <div className="mdl-layout__header-row">
          <a href="" className="logo-link">
            <span className="mdl-layout-title">
              <div className="logo"><i className="material-icons logo-icon">public</i></div>
              Worldwide news
            </span>
          </a>
          <div className="mdl-layout-spacer"></div>
            <div className="search-box">
              <div className="search-icon"><i className="material-icons">search</i></div>
               
                <Textfield
                  className="search-field"
                  label="Search articles..."
                  type="text"
                  id="search-input"
                  ref={node => {
                    input = node;
                  }}
                  onChange={
                    _.debounce( ( () => {
                      store.dispatch(
                        fetchArticles(
                          store.getState().articleFilter,
                          input.refs.input.value
                        )
                      )}
                    ),
                      300
                    )
                  }
                />
            </div>
          <div style={{position: 'relative'}}>
            <IconButton name="more_vert" id="demo-menu-lower-right" />
            <Menu target="demo-menu-lower-right" align="right">
              <MenuItem>About</MenuItem>
              <MenuItem>Contact</MenuItem>
              <MenuItem>Legal information</MenuItem>
            </Menu>
          </div>
        </div>
      </header>
    </div>
  );
}
