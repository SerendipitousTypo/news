class App extends React.Component {
  // constructor (props) {
  //   super(props);

  // }

  // getArticles(cb) {
  //   var articles;
  //   this.serverRequest = $.get('http://localhost:3000/v1/articles', function (result) {
  //     console.log('result: ', result.data);
  //     articles = result.data;
  //     this.setState({articles: articles});
  //   }.bind(this));

  //   return articles;
  // }

  componentDidMount() {
    // let articles = this.getArticles();
    console.log('store: ', store.getState());
  }

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
              <Main articles={store.getState()} />
            </div>
          </div>
        </div>
      </div>
    );
  }


}
