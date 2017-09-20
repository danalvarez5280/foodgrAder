
export const foodFetch1 = (state = {}, action) => {
  switch (action.type) {
    case 'FOOD_FETCH_1':
      return Object.assign({}, state, action.foodInfo)

    default:
      return state
  }
};


export const setLocation = (state={}, action) => {
  switch(action.type) {
    case 'SET_LOCATION':
      return Object.assign({}, state, action.location)

    default:
      return state
  }
};

export const userQuery = (state = [], action) => {
  switch(action.type) {
    case 'USER_QUERY':
    return [...state, action.newFoodInfo]

    default:
      return state
  }
}

export const userSearch = (state = [], action) => {
  switch (action.type) {
    case 'FOOD_SEARCH':
      return [...state, action.places]

    default:
      return state
  }
}
