
export const foodFetch1 = (state = {}, action) => {
  switch (action.type) {
    case 'FOOD_FETCH_1':
      return Object.assign({}, state, action.foodInfo)

    default:
      return state
  }
};


export const setLocation = (state={}, action) => {
  console.log('user locale', action.location)
  switch(action.type) {
    case 'SET_LOCATION':
    return Object.assign({}, state, action.location)

    default:
    return state
  }
};

export const mapUrl = (state='', action) => {
  switch (action.type) {
    case 'MAP_FETCH':
    return action.url

    default:
      return state
  }
}
