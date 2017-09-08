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
  }
}
