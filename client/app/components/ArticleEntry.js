import React from 'react'
var update = require('react-addons-update');
import ReactDOM from 'react-dom';
import { fsetContent } from '../actions'
import { Component } from 'react'
import Chart from './PieChart.js'
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
    this.state = {
      emotion_tone: {
        watsonData: [],
        circleAttributes: {}
      },
    };
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
    this.handleAnalyze = this.handleAnalyze.bind(this);
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
  //return fetch("http://localhost:3000/v1/pages?text=" + text)
  handleAnalyze() {
    var hello = 'hello'
    this.setState({
      openDialog: true
    });
    var context = this;
    //make request, then change the state of modal text
    fetch("http://localhost:3000/v1/pages?url=" + this.props.article.url)
    .then( function(text) {
      return text.json();
    })
    .then(function(text){
      var text = text.data[0].text
      console.log('this is text', text);
      return fetch("http://localhost:3000/v1/tone_analyzers?text=" + text)
    })
    .then(function(data){
      return data.json();
    })
    .then(function(data) {
      // populate emotion property
      let emotion_Arr = [];
      for (let watsonData of data.data[0].tone_categories[0].tones) {
        const obj = {
          label: watsonData.tone_name,
          value: Math.floor(watsonData.score * 100)
        }
        emotion_Arr.push(obj);
      }
      console.log('this is emotion arr: ', emotion_Arr);
      context.setState({
        emotion_tone: update(context.state.emotion_tone, {
          watsonData: {$set: emotion_Arr}
        }),
      });
      //emotion_Arr = JSON.stringify(emotion_Arr);
      return context.setState({
        modalText:  <div className="article-paragraph">
                      <Chart pieData={ context.state.emotion_tone }/>
                      <br/>
                    </div>
      })
    })
    .catch(function(e) {
      context.setState({
        modalText:  <div className="error-message">
                      <div className="error-icon-wrapper">
                        <i className="material-icons error-icon">error_outline</i>
                      </div>
                      Sorry, the article is not available at this time.
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
      modalText: <Spinner className="spinner"/>,
      // emotion_tone: initialData[0].emotion_tone
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
                <Button colored onClick={this.handleAnalyze} raised ripple>Analyze</Button>
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
