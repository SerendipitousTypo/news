const filter = (
  state = 'ALL_REGIONS',
  action
) => {
  switch (action.type) {
    case 'SET_VIEW':
      return action.filter

    default:
      return state;
  }
}

export default filter;