const articles = (state = [], action) => {
  // console.log('action: ', action);
  switch (action.type) {
    //replace current articles with new articles
    case 'LOAD_ARTICLES':
      return action.articles

    //add to current articles collection
    case 'ADD_ARTICLES':
      return [
        ...state,
        action.articles
      ]

    default:
      return state;
  }
}

export default articles