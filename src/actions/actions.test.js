import * as action from "./index";
import fetchMock from "fetch-mock";

describe('my action tests', () => {
    const url = `https://developers.zomato.com/api/v2.1/geocode?lat=39.7506195&lon=-104.99670569999999`
    const url2 =`https://developers.zomato.com/api/v2.1/locations?query=denver`
    const url3 =`https://developers.zomato.com/api/v2.1/search?q=SamsNo3&count=20&lat=39.7506195&lon=-104.99670569999999&sort=rating`
    const foodFetch = jest.fn()
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

  it('should make an initial fetch', () => {
    fetchMock.get(url, {
      status: 200,
      body: mockFoodInfo,
    })
    action.submitSearch(39.7506195, -104.99670569999999)()
    expect(fetchMock.routes[0].method).toEqual('GET')
    expect(fetchMock.routes[0].response.body).toEqual(mockFoodInfo)
    expect(fetchMock.lastUrl()).toEqual(url)

  });

  it('should be able to make a user fetch', () => {
    fetchMock.get(url2, {
      status: 200,
      body: mockFoodInfo
    })

    action.userSearch("Sam's No 3", 'denver')()
    expect(fetchMock.routes[0].method).toEqual('GET')
    expect(fetchMock.routes[0].response.body).toEqual(mockFoodInfo)
    expect(fetchMock.lastUrl()).toEqual(url2)
  });

  it('should be able to make the second part of a user fetch', () => {
    fetchMock.get(url3, {
      status: 200,
      body: mockFoodInfo
    })

    action.userSearch2("SamsNo3", '39.7506195', '-104.99670569999999')()
    expect(fetchMock.routes[0].method).toEqual('GET')
    expect(fetchMock.routes[0].response.body).toEqual(mockFoodInfo)
    expect(fetchMock.lastUrl()).toEqual(url3)
  });


  it('should return the object of food info on the initial fetch', () => {
    const foodInfo = mockFoodInfo
    const expectedAction = {
      type: 'FOOD_FETCH',
      foodInfo
    }
    expect(action.foodFetch(foodInfo)).toEqual(expectedAction)
  });

  it('should return the object to set location on the map', () => {
    const location = mockFoodInfo
    const expectedAction = {
      type: 'SET_LOCATION',
      location
    }
    expect(action.setLocation(location)).toEqual(expectedAction)
  });

  it('should be able to take a user and sign them in', () => {
    const user = 'dan'
    const expectedAction = {
      type: 'SIGN_IN',
      user
    }
    expect(action.signIn(user)).toEqual(expectedAction)
  });

  it('should be able to take a user and sign them out', () => {
    const user = 'dan'
    const expectedAction = {
      type: 'SIGN_OUT',
      user
    }
    expect(action.signOut(user)).toEqual(expectedAction)
  });

});
