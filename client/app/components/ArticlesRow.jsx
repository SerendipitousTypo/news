//for every article served, create a articleEntry (4 articles served)
var ArticlesRow = ({title, articles}) => (
  <div className='articlesRow'>
    <div className="rowTitle">{title}</div>
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