var Main = ({articles}) => (
  <div className="main-block">
    {arrangeByFilter(articles)}
  </div>
);

//filter articles by region
var arrangeByFilter = articles => {
  var topics = {};

 /*
    {
      North America: 

    }
 */

  //sort articles by region, ie. {'North America': [Articles. . . ]}
  articles.forEach(article => {
    if (topics.hasOwnProperty(article.region)) {
      topics[article.region].push(article);
    } else {
      topics[article.region] = [article];
    }   
  });
  console.log('topics: ', topics);

  return populateRows(topics);
};
//populate rows

var populateRows = topics => {
  return _.map(topics, (topic, filter) => {
    // console.log(topic);
    return <ArticlesRow filter={filter} articles={topic} />;
  });  
};

window.Main = Main;

