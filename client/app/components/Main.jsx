var Main = ({articles}) => (
  <div className="main-block">
    {populateRows(articles)}
  </div>
);


var populateRows = articles => {
  var topics = {};

  //sort articles by category, according to filter, ie. {'North America': [Articles. . . ]}
  articles.forEach(article => {

    //IF topics does not have a category
    //create key for category 
    if ( topics.hasOwnProperty(article.publisher.region) ) {
      topics[article.publisher.region].push(article);
    } else {
      topics[article.publisher.region] = [article];
    }   
  });
  console.log('topics: ', topics);

  //create a row of articles per category, according to filter
  return _.map(topics, (topic, category) => {
    return <ArticlesRow title={category} articles={topic} />;
  });  
};

window.Main = Main;

