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
  // console.log('action: ', action);
  switch (action.type) {
    //replace current articles with new articles
    case 'LOAD_ARTICLES':
      return action.articles

    //add to current articles collection
    case 'ADD_ARTICLES':
      return [
        ...state
      ]

    default:
      return state;
  }
}

export default articles