class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      publishers: {},
      articles: [
        {
          region: 'North America',
          publisher: 'NY Times',
          title: 'title1',
          snippet: 'some snippet about the article',
          url: 'https://www.google.com'
        },
        {
          region: 'North America',
          publisher: 'NY Times',
          title: 'title2',
          snippet: 'some snippet about the article',
          url: 'https://www.google.com'
        },
        {
          region: 'North America',
          publisher: 'NY Times',
          title: 'title3',
          snippet: 'some snippet about the article',
          url: 'https://www.google.com'
        },
        {
          region: 'Russia',
          publisher: 'NY Times',
          title: 'title1',
          snippet: 'some snippet about the article',
          url: 'https://www.google.com'
        }
        // {
        //   region: 'Russia',
        //   publisher: 'NY Times',
        //   title: 'title2',
        //   snippet: 'some snippet about the article',
        //   url: 'https://www.google.com'
        // },
        // {
        //   region: 'Russia',
        //   publisher: 'NY Times',
        //   title: 'title3',
        //   snippet: 'some snippet about the article',
        //   url: 'https://www.google.com'
        // }
      ]
    };
  }

  //DELETE
  // getPublishers(cb) {
  //   var publishers;
  //   this.serverRequest = $.get('http://localhost:3000/v1/publishers', function (result) {
  //     console.log('result: ', result.data);
  //     publishers = result.data;
  //     this.setState({publishers: publishers});
  //   }.bind(this));  

  //   return publishers;  
  // }

  getArticles(cb) {
    var articles;
    this.serverRequest = $.get('http://localhost:3000/v1/articles', function (result) {
      console.log('result: ', result.data);
      articles = result.data;
      this.setState({articles: articles});
    }.bind(this));  

    return articles;
  }

  componentDidMount() {
    var articles = this.getArticles();
  }

  //DELETE
  // findRegion(article) {
  //   //retrieve article publisher id
  //   var pubId = article.publisher_id;
  //   //find publisher with this id
  //   for (var i = 0; i < this.state.publishers; i++) {
  //     if ( this.state.publishers[i].id === pubId) {
  //       return this.state.publishers[i].region;
  //     }
  //   }
  // }


  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
     
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header className="mdl-layout__header">
         <div className="mdl-layout__header-row">      
            <span className="mdl-layout-title">News worldwide</span>          
         </div>       
      </header>
      
      <main className="mdl-layout__content">    
        
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--3-col graybox">
            <Sidebar />
          </div>
          
          <div className="mdl-cell mdl-cell--9-col graybox">
            <Main articles={this.state.articles} />
            </div>
        
        </div>
      </main>
   </div>
    );
  }


}
