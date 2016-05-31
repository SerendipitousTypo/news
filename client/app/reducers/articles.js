const article = (state, action) => {
  switch (action.type) {
    case 'OPEN_ARTICLE':
      return state;
      //change view to ARTICLE_VIEW
      //get content of ARTICLE
    default:
      return state;
  }
}

const articles = (state = [], action) => {
  console.log('action: ', action);
  switch (action.type) {
    case 'LOAD_ARTICLES':
      //clear current articles collection and retrieve new articles
      return action.articles;

    case 'ADD_ARTICLES':
      //add to current articles collection
      return [
        ...state,
        getArticles()
      ]

    default:
      return state;
  }
}

// export default articles