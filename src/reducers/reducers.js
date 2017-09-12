import { pickLocation, mapUrlFetch } from '../actions';

export const foodFetch = (state = [], action) => {
  switch (action.type) {
    case 'FOOD_FETCH_SUCCESS':
      return action.data

    default:
      return state
  }
};

export const setLocation = (state=[], action) => {
  switch(action.type) {
    case 'SET_LOCATION':
    return action.location

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
