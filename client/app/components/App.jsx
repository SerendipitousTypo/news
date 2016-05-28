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
        },
        {
          region: 'Russia',
          publisher: 'NY Times',
          title: 'title2',
          snippet: 'some snippet about the article',
          url: 'https://www.google.com'
        },
        {
          region: 'Russia',
          publisher: 'NY Times',
          title: 'title3',
          snippet: 'some snippet about the article',
          url: 'https://www.google.com'
        }
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

  // componentDidMount() {
  //   var publishers = this.getPublishers();
  //   var articles = this.getArticles();
  // }

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


  // componentWillUnmount() {
  //   this.serverRequest.abort();
  // }

  render() {
    return (
     
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-12">
              <Search />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Main articles={this.state.articles} />
            </div>
          </div>
        </div>
      </div>      
    );
  }


}
