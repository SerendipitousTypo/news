import React from 'react';

export default class Chat extends React.Component {
  //console.log('this is url in chat', this.props.url);
	render() {
    return (
        <div id="fb-root"></div>
    )
  }

  componentWillMount() {
    this.createChat()
  }

  createChat() {
    ((d, s, id) => {
       let js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) return;
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
       fjs.parentNode.insertBefore(js, fjs);
     })(document, 'script', 'facebook-jssdk');

  }

}
