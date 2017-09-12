import React, { Component } from 'react';
import MainContainer from '../containers/MainContainer';
import FoodCard from './FoodCard';
import Iframe from 'react-iframe';
import MyMap from './Map';
import './styles.css'


// import { Redirect } from 'react-router-dom';
// import googleMapsKey from '../key/googleMapsKey';

export class WelcomePage extends Component{
  constructor() {
    super()
  };

  componentDidMount() {

  }

  arrayFunc() {
    return [
      {name: 'Chipotle', cuisine: 'mexican', grade: 'A+'},
      {name: 'SmashBurger', cuisine: 'american', grade: 'A'},
      {name: 'Spanellis', cuisine: 'deli', grade: 'A+'},
      {name: 'Arbys', cuisine: 'garbage', grade: 'F-'},
      {name: 'MacDowells', cuisine: 'garbage', grade: 'F'}
    ]
  }


  render() {
    const allFood = this.arrayFunc().map((food, i) => {
      return <FoodCard key={ i } {...food}/>
    })

    return (
      <div>
        <h3>Welcome to foodgrAder!</h3>
        <p>You can search fo restaurants by...</p>
        <MyMap />
        {allFood}
      </div>
    )
  }

}

export default MainContainer(WelcomePage)
