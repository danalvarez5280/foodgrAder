export const foodSearch = (restaurants) => {
  return {
    type: 'FOOD_FETCH_SUCCESS',
    data: restaurants
  }
}

export const submitSearch = (url) => {
  return dispatch => {
    fetch(url)
      .then(response => response.json())
      .then(response => console.log('initial fetch', response))
      // .then(object => object.arrayORestaurants)
      // .then(array => foodSearch(array))
  }
}

export const mapUrlFetch = (url) => {
  return{
    type: 'MAP_FETCH',
    url
  }
}

export const setLocation = (location) => {
  return {
    type: 'SET_LOCATION',
    location
  }
}
