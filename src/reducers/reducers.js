
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

export const signIn = (state = {}, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return Object.assign({}, state, action.user)

    default:
      return state
  }
};

export const signOut = (state = {}, action) => {
  switch (action.type) {
    case 'FOOD_SEARCH':
      return Object.assign({}, state, action.user)

    default:
      return state
  }
};

export const addFaves = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVE':
      return [...state, action.favorite]

    default:
      return state
  }
};
