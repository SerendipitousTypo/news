import React from 'react'
var update = require('react-addons-update');
import ReactDOM from 'react-dom';
import { fsetContent } from '../actions'
import { Component } from 'react'
import Chart from './PieChart.js'
import GoogleMap from './GoogleMap'
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
  }

  handleOpenDialog() {

    this.setState({
      openDialog: true
    });
    var mainText;
    var bool = true;
    var context = this;
    var regionName = this.props.article.publisher.region;
    var snippit = this.props.article.content;
    var url = this.props.article.url.trim();
    console.log('props regionName: ', regionName);
    //make request, then change the state of modal text
    fetch("http://localhost:3000/v1/pages?url=" + url)
    .then( function(data) {
      return data.json()
    })
    .then(function(text){
      console.log('this is text: ', text);
      if(regionName === 'Oceania'){
        mainText = snippit;
        bool = false
      } else {
        mainText = text.data[0].text
      }
      return mainText;
    })
    .catch(function(e){
      if(e){
        console.log('i am error in first catch', e);
        mainText = snippit;
        bool = false;
      };
      return mainText;
    })
    .then(function(data){
      console.log('this is text', mainText);
      return fetch("http://localhost:3000/v1/tone_analyzers?text=" + mainText);
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
      if(bool){
        return context.setState({
          modalText:
                    <div>
                      <GoogleMap location={regionName} />
                      <p className="article-paragraph">
                        {mainText}
                        <br/>
                      </p>
                      <div className="article-paragraph">
                        <Chart pieData={ context.state.emotion_tone }/>
                        <br/>
                      </div>
                      <div>
                      <div id="fb-root"></div>
                      <script>{(function(d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) return;
                        js = d.createElement(s); js.id = id;
                        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
                        fjs.parentNode.insertBefore(js, fjs);
                      }(document, 'script', 'facebook-jssdk'))}</script>
                      </div>
                    </div>
        })
      }else{
        context.setState({
          modalText:
                    <div>
                      <GoogleMap location={regionName} />
                      <p className="article-paragraph">
                        {mainText}
                        <br/>
                      </p>
                      <div className="article-paragraph">
                        <Chart pieData={ context.state.emotion_tone }/>
                        <br/>
                      </div>
                      <div>
                      <div id="fb-root"></div>
                      <script>{(function(d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) return;
                        js = d.createElement(s); js.id = id;
                        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
                        fjs.parentNode.insertBefore(js, fjs);
                      }(document, 'script', 'facebook-jssdk'))}</script>
                      </div>
                      <div>
                      <div className="error-message">
                        <div className="error-icon-wrapper">
                          <i className="material-icons error-icon">error_outline</i>
                        </div>
                        Sorry, this article is not available to be shared. Please visit the source.
                        <Button colored raised className="error-btn">
                          <a href={context.props.article.url} target="_blank" className="error-link">View source</a>
                        </Button>
                      </div>
                    </div>
                    </div>
        })
      }
    })
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }

  componentDidMount() {
    this.setState({
      modalText:
      <Spinner className="spinner"/>
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
              <div className="card-editor" onClick={ this.handleOpenDialog}> - {this.props.article.publisher.name}</div>
              <div className="mdl-card__actions mdl-card--border">
                <Button colored onClick={this.handleOpenDialog} raised ripple>Full article</Button>
                <div className="url-link-btn"><a href={this.props.article.url} target="_blank" className="btn-link mdl-button mdl-js-button mdl-js-ripple-effect"><i className="material-icons">public</i></a></div>

                  <Dialog open={this.state.openDialog} className="article-dialog">
                    <DialogTitle className="dialog-title">{this.props.article.title}</DialogTitle>
                    <DialogContent>
                      <div className="article-main-text">
                      {this.state.modalText}</div>
                      <div className="fb-comments"
                      data-href={this.props.article.url}
                      data-numposts="5">
                      </div>
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
