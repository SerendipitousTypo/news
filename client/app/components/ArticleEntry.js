import React from 'react'
import { fsetContent } from '../actions'
import { Component } from 'react'
import {IconButton, Textfield, Menu, MenuItem, Button, Dialog, DialogTitle, DialogContent, DialogActions, Spinner} from 'react-mdl'

require('es6-promise').polyfill();
require('isomorphic-fetch');

// for the dialog example, we have to register the dialogs window
const dialogs = document.querySelector("dialog");
dialogs && dialogPolyfill.registerDialog(dialogs);

//TODO: convert to Redux
export class ArticleEntry extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
    var context = this;
    //make request, then change the state of modal text
    fetch("http://localhost:3000/v1/pages?url=" + this.props.article.url)
    .then( function(text) {
      return text.json();
    })
    .then(function(text) {
      console.log('formated text', text.data[0].text);
      return context.setState({
        modalText:  text.data[0].text.split('\n').map(function(item) {
                        return (
                          <p className="article-paragraph">
                            {item}
                            <br/>
                          </p>
                        )
                      })
      })
    })
    .catch(function(e) {
      context.setState({
        modalText:  <div className="error-message">
                      <div className="error-icon-wrapper">
                        <i className="material-icons error-icon">error_outline</i>
                      </div>
                      Sorry, the article is not available at this time. You can view source here:
                      <Button colored raised className="error-btn">
                        <a href={context.props.article.url} target="_blank" className="error-link">View source</a>
                      </Button>
                    </div>
      })
    });


  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }

  componentDidMount() {
    this.setState({
      modalText: <Spinner className="spinner"/>
    });
  }

  render() {
    return (
    <div className="articleEntry mdl-cell mdl-cell--3-col ">
      <div className="row valign-wrapper">
        <div className="col s6 offset-s3 valign">
          <div className="card mdl-color--white mdl-shadow--2dp">
            <div className="card-content white-text">
              <div className="card-title" onClick={ this.handleOpenDialog}>{this.props.article.title}</div>
              <div className="card-text" onClick={ this.handleOpenDialog}>{this.props.article.content}</div>
              <div className="mdl-card__actions mdl-card--border">
                <Button colored onClick={this.handleOpenDialog} raised ripple>Full article</Button>
                <div className="url-link-btn"><a href={this.props.article.url} target="_blank" className="btn-link mdl-button mdl-js-button mdl-js-ripple-effect"><i className="material-icons">public</i></a></div>

                  <Dialog open={this.state.openDialog} className="article-dialog">
                    <DialogTitle className="dialog-title">{this.props.article.title}</DialogTitle>
                    <DialogContent>
                      <div className="article-main-text">
                      {this.state.modalText}</div>
                    </DialogContent>
                    <DialogActions>
                      <Button type='button' onClick={this.handleCloseDialog} className="close-btn">Close</Button>
                    </DialogActions>
                  </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}