import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import { withRouter } from 'react-router';
import App from './App';
import WelcomePage from './components/WelcomePage';
import MyMap from './components/Map';
import FoodCard from './components/FoodCard';
// import { store } from './index.js'


describe('my tests', () => {
  const wrapper =  withRouter(<App />);
  const wrapperWelcome = withRouter(<WelcomePage />);
  const wrapperMap = withRouter(<MyMap />);
  const wrapperCard = withRouter(<FoodCard />);
  const fetchMock = require('fetch-mock');

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined()
  });

  it('should display the welcome page after it renders', () => {
    expect(wrapperWelcome).toBeDefined()
  });

  it('should display the may when the welcome page loads', () => {
    expect(wrapperMap).toBeDefined()
  });

  it('should display the food cards', ()=> {
    expect(wrapperCard).toBeDefined()
  });

});
