import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { withRouter } from 'react-router';
import App from './App';
import WelcomePage from './components/WelcomePage';
import MyMap from './components/Map';
import FoodCard from './components/FoodCard';
import submitSearch from './actions/submitSearch'

describe('my tests', () => {
  const wrapper =  withRouter(<App />)
  const wrapperWelcome = withRouter(<WelcomePage />)
  const wrapperMap = withRouter(<MyMap />)
  const wrapperCard = withRouter(<FoodCard />)
  const fetchMock = require('fetch-mock');

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined()
    expect(wrapperWelcome).toBeDefined()
    expect(wrapperMap).toBeDefined()
    expect(wrapperCard).toBeDefined()
  });

  it('should render a card', () => {
    expect(wrapperCard.length).toEqual(1)
  });

  it('should make an inital fetch call', () => {
    
  })

})
