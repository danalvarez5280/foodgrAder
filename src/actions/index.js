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
      .then(object => Object.assign({}, {
        cityId: object.location.city_id,
        location: object.location.city_name,
        entityId: object.location.entity_id,
        entityType: object.location.entity_type,
        neighborhood: object.location.title,
        nearbyPlaces: object.nearby_restaurants,
      }))
      .then(object => dispatch(foodFetch1(object)))
  }
}

export const setLocation = (location) => {
  return {
    type: 'SET_LOCATION',
    location
  }
}

export const userFetch = (newFoodInfo) => {
  return {
    type: 'USER_FETCH',
    newFoodInfo
  }
}

export const userSearch = (location) => {
  return dispatch => {
    const reqHeaders = new Headers();
    reqHeaders.append('user-key', '653afb0849eb30d03b5f8b6072b83ffa')
    fetch(`https://developers.zomato.com/api/v2.1/locations?query=${location}`, {
      method: 'GET',
      headers: reqHeaders
    })
    .then(data => data.json())
    .then(object => object.location_suggestions[0])
    .then(object => Object.assign({}, {
      entityId: object.entity_id,
      entityType: object.entity_type
    }))
    .then(newObject => dispatch(userSearch2(newObject)))
  }
}

export const userSearch2 = (object) => {
  return dispatch => {
    const reqHeaders = new Headers();
    reqHeaders.append('user-key', '653afb0849eb30d03b5f8b6072b83ffa')
    fetch(`https://developers.zomato.com/api/v2.1/location_details?entity_id=${object.entityId}&entity_type=${object.entityType}`, {
      method: 'GET',
      headers: reqHeaders
    })
    .then(data => data.json())
    .then(object => object.best_rated_restaurant)
    .then(object => dispatch(userFetch(object)))
  }
}

export const foodSearch = (places) => {
  return {
    type: 'FOOD_SEARCH',
    places
  }
}

export const userFoodSearch = (name, locationId) => {
  return dispatch => {
    const reqHeaders = new Headers();
    reqHeaders.append('user-key', '653afb0849eb30d03b5f8b6072b83ffa')
    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=${locationId}&q=${name}`, {
      method: 'GET',
      headers: reqHeaders
    })
    .then(data => data.json())
    .then(object => object.restaurants)
    .then(array => dispatch(foodSearch(array)))
  }
}

export const setLink = (link) => {
  return {
    type: 'SET_LINK',
    link
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
