export const foodFetch1 = (foodInfo) => {
  return {
    type: 'FOOD_FETCH_1',
    foodInfo
  }
}

export const submitSearch = (latitude, longitude) => {
  return dispatch => {
    const reqHeaders = new Headers();
    reqHeaders.append('user-key', '653afb0849eb30d03b5f8b6072b83ffa')
    fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${latitude}&lon=${longitude}`, {
      method: 'GET',
      headers: reqHeaders
    })
      .then(response => response.json())
      // .then(thing => console.log('thing', thing))
      .then(object => Object.assign({}, {
        cityId: object.location.city_id,
        location: object.location.city_name,
        nearbyPlaces: object.nearby_restaurants,
      }))
      .then(object => dispatch(foodFetch1(object)))
      .catch(error => console.log('wtf mate', error))
  }
}

export const setLocation = (location) => {
  return {
    type: 'SET_LOCATION',
    location
  }
}

export const userQuery = (newFoodInfo) => {
  return {
    type: 'USER_QUERY',
    newFoodInfo
  }
}

export const foodSearch = (places) => {
  return {
    type: 'FOOD_SEARCH',
    places
  }
}



export const userSearch = (name, location) => {
  return dispatch => {
    const reqHeaders = new Headers();
    reqHeaders.append('user-key', '653afb0849eb30d03b5f8b6072b83ffa')
    fetch(`https://developers.zomato.com/api/v2.1/locations?query=${location}`, {
      method: 'GET',
      headers: reqHeaders
    })
    .then(data => data.json())
    .then(object => object.location_suggestions[0])
    .then(object => Object.assign({}, {lat: object.latitude, long: object.longitude}))
    // .then(thing => console.log('thing', thing))
    .then(object => dispatch(userSearch2(name, object.lat, object.long)))
    .catch(error => console.log('wtf mate', error))

  }
}

export const userSearch2 = (name, lat, long) => {
  return dispatch => {
    const reqHeaders = new Headers();
    reqHeaders.append('user-key', '653afb0849eb30d03b5f8b6072b83ffa')
    fetch(`https://developers.zomato.com/api/v2.1/search?q=${name}&count=20&lat=${lat}&lon=${long}&sort=rating`, {
      method: 'GET',
      headers: reqHeaders
    })
    .then(data => data.json())
    .then(object => Object.assign({}, {
      cityId: object.restaurants[0].restaurant.location.city_id,
      location: object.restaurants[0].restaurant.location.city,
      nearbyPlaces: object.restaurants,
    }))
    .then(object => dispatch(foodFetch1(object)))
    .catch(error => console.log('wtf mate', error))

  }
}



export const signIn = (user) => {
  return {
    type: 'SIGN_IN',
    user
  }
}

export const signOut = (user) => {
  return {
    type: 'SIGN_OUT',
    user
  }
}
