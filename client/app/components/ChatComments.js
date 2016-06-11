import React from 'react';

export default class ChatComments extends React.Component {
  //console.log('this is url in chat', this.props.url);
	render() {
    return (
      <div className="fb-comments"
        data-href={this.props.url}
        data-numposts="5">
      </div>
    )
  }

  componentDidMount() {
    console.log('inside component did mount comment');

  }
}
