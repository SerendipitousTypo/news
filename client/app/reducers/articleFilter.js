const filter = (
  state = {
    view: 'ALL_REGIONS',
    type: 'REGION',
    region: '',
    topic: ''
  },
  action
) => {
  console.log('action: ', action);
  // let { filter } = action;
  switch (action.type) {
    case 'SET_FILTER':
      if (action.filter.type === 'TOPIC') {
        return {
          view: action.filter.view,
          type: action.filter.type,
          region: action.filter.region,
          topic: action.filter.category //change topic
        }
        if (action.filter.type === 'REGION') {
          return {
          view: action.filter.view,
          type: action.filter.type,
          region: action.filter.category, //change region
          topic: action.filter.topic

          }
        }
        //otherwise,
        return state;
      }

    default:
      return state;
  }
}

export default filter;