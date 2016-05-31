class App extends React.Component {

  componentDidMount() {
    // let articles = this.getArticles();
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );

    $.get('http://localhost:3000/v1/articles', function (result) {
      store.dispatch({type: 'LOAD_ARTICLES', articles: result.data});
    }.bind(this));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const props = this.props;
    const state = store.getState();

    // console.log('state: ', state);

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
              <Main articles={state.articles} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
