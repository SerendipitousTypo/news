const article = (state, action) => {
  switch (action.type) {
    case: 'OPEN_ARTICLE'
      //change view to ARTICLE_VIEW
      //get content of ARTICLE
    default:
      return state;
  }
}

//TODO: convert to es6
const getArticles = () => {
    let articles;
    this.serverRequest = $.get('http://localhost:3000/v1/articles', function (result) {
      console.log('result: ', result.data);
      articles = result.data;
    }.bind(this));

    return articles;
  }

const articles = (state, action) => {
  switch (action.type) {
    case "LOAD_ARTICLES":
      //clear current articles collection and retrieve new articles
      return getArticles()

    case "ADD_ARTICLES":
      //add to current articles collection
      return [
        ...state,
        getArticles()
      ]

    default:
      return state;
  }
}

export default articles