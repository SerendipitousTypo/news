const fetchStatus = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      if (action.status === 'success') {
        return false;
      } else if (action.status === 'error') {
        return false;
      } else { //no status, fetch is being made
        return true;
      }
    default:
      return state;
  }
}

export default fetchingStatus;