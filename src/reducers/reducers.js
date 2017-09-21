
export const foodFetch = (state = {}, action) => {
  switch (action.type) {
    case 'FOOD_FETCH':
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

export const userSearch = (state = [], action) => {
  switch (action.type) {
    case 'FOOD_SEARCH':
      return [...state, action.places]

    default:
      return state
  }
};
