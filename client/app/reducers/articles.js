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
    //clear current articles collection and retrieve new articles
    case 'LOAD_ARTICLES':
      return action.articles

      // return fetch('http://localhost:3000/v1/articles')
      // .then(response => {
      //   //TODO: handle error
      //   return response.json()
      // })
      // .then(result => {
      //   console.log('data: ', result.data);
      //   return result.data;
      // })


    case 'ADD_ARTICLES':
      //add to current articles collection
      return [
        ...state
      ]

    default:
      return state;
  }
}

export default articles