export var ArticleEntry = ({article}) => (
  <div className="articleEntry">
    <div className='articleTitle'>{article.title}</div>
    <div className='articleSnipper'>{article.snippet}</div>
  </div>
);