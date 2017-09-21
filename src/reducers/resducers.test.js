import React from 'react'
import { foodFetch, setLocation, userSearch } from './reducers'

describe('actions reducers', () => {

  const mockFoodInfo = {
    location: 'Denver',
    cityId: 305,
    nearBy: [
      {restaurant: {
        average_cost_for_two: 25,
        cuisines: 'American, Diner',
        featured_image: "https://b.zmtcdn.com/data/pictures/chains/7/16971517/52fc25392dea9238e6a9e45b658281a7_featured_v2.JPG",
        location: {
          address: '1500 Curtis Street, Denver 80202',
          city: 'Denver',
          city_id: 305,
          latitude: '39.7459555556',
          locality: 'Central Business District',
          longitude: '-104.9956138889',
          zipcode: '80202',
        },
        name: "Sam's No. 3",
        user_rating: {
          aggregate_rating: '4.1',
          rating_color: '5BA829',
          rating_text: 'Very Good',
          votes: '548',
        }
      }
    }],
  };

  const userQuery = {userInput: 'chipotle', userLocation: 'denver'}

  const foodMockAction = {
    type: 'FOOD_FETCH',
    data: mockFoodInfo
  };

  const state = {};

  it('should start with nothing in the store', () => {
    expect(foodFetch(undefined, {})).toEqual({})
  });

  it('should not do anything when other reducers fire', ()=> {
    expect(foodFetch(state, locationMockAction.type)).toEqual({})
    expect(foodFetch(state, searchMockAction.type)).toEqual({})
  });

  it('should fetch food information on page load', () => {
    expect(foodFetch(foodMockAction.data, foodMockAction.type)).toEqual(mockFoodInfo)
  });

  const locationMockAction = {
    type: 'SET_LOCATION',
    data: userQuery
  };

  it('should start with no user location or user input', () => {
    expect(setLocation(state, {})).toEqual({})
  });

  it('should not do anything when other reducers fire also', ()=> {
    expect(foodFetch(state, foodMockAction.type)).toEqual({})
    expect(foodFetch(state, searchMockAction.type)).toEqual({})
  });

  it('should add a user location and user input to the store', () => {
    expect(setLocation(locationMockAction.data, locationMockAction.type)).toEqual(userQuery)
  });

  const searchMockAction = {
    type: 'FOOD_SEARCH',
    data: mockFoodInfo
  };

  it('should start with no searched food data in the store', ()=> {
    expect(userSearch(state, {})).toEqual({})
  });

  it('should not do anything when other reducers fire as well', ()=> {
    expect(foodFetch(state, foodMockAction.type)).toEqual({})
    expect(foodFetch(state, locationMockAction.type)).toEqual({})
  });

  it('should add data to the store on a user search', ()=> {
    expect(userSearch(searchMockAction.data, searchMockAction.type)).toEqual(mockFoodInfo)
  })

})
