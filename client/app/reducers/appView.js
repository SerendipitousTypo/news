export default const appView = (
  state = 'HOME',
  action
  ) => {
  switch (action.type) {
    case 'HOME':
      //load main feed
      //set article to none
    case 'ARTICLE':
      //set article to given article
      //display article
    default:
      return state;
  }
}