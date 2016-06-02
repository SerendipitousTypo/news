const filter = (
  state = {
    view: 'ALL_REGIONS',
    specifier: ''
  },
  action
) => {
  switch (action.type) {
    case 'SET_APP_VIEW':
      return action.filter

    default:
      return state;
  }
}

export default filter;