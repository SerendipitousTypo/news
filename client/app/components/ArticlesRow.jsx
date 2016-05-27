//for every article served, create a articleEntry (4 articles served)
var ArticlesRow = ({filter, articles}) => (
  <div className='articlesRow'>
    <div className="rowTitle">{filter}</div>
    <div className='rowArticles'>
      {populateRow(articles)}
    </div>
  </div>

);

var populateRow = articles => {
  return articles.map(article => {
    return <ArticleEntry article={article} />;
  });
};