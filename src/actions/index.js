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
      // .then(thing => console.log('thing', thing))
      // .then(obj => obj.location_suggestions)
      // .then(array => array[0])
      // .then(object => object.foodInfo.location)
      // .then(location => dispatch(secondFetch(location)))
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
