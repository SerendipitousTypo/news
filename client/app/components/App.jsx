class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      articles: [
        {
          region: 'North America',
          publisher: 'NY Times',
          title: 'title1',
          snippet: 'a title has appeared',
          url: 'https://www.google.com'
        },
        {
          region: 'North America',
          publisher: 'NY Times',
          title: 'title2',
          snippet: 'a title has appeared',
          url: 'https://www.google.com'
        },
        {
          region: 'North America',
          publisher: 'NY Times',
          title: 'title3',
          snippet: 'a title has appeared',
          url: 'https://www.google.com'
        },
        {
          region: 'Russia',
          publisher: 'NY Times',
          title: 'title1',
          snippet: 'a title has appeared',
          url: 'https://www.google.com'
        },
        {
          region: 'Russia',
          publisher: 'NY Times',
          title: 'title2',
          snippet: 'a title has appeared',
          url: 'https://www.google.com'
        },
        {
          region: 'Russia',
          publisher: 'NY Times',
          title: 'title3',
          snippet: 'a title has appeared',
          url: 'https://www.google.com'
        }
      ]
    };
  }

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