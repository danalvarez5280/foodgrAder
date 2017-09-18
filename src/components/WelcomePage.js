import React, { Component } from 'react';
import MainContainer from '../containers/MainContainer';
import FoodCard from './FoodCard';
// import Iframe from 'react-iframe';
import MyMap from './Map';
import './styles.css'


// import { Redirect } from 'react-router-dom';
// import googleMapsKey from '../key/googleMapsKey';

export class WelcomePage extends Component{

  componentDidMount() {
        this.getPosition()
  }

  getPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      let currentLocation = position.coords
      // document.getElementById('startLat').innerHTML = currentLocation.latitude;
      // document.getElementById('startLon').innerHTML = currentLocation.longitude;
      this.props.findFood(currentLocation.latitude, currentLocation.longitude)
    })
  };


  render() {
    const foodList = this.props.nearBy ? this.props.nearBy : []

    const allFood = foodList.map((food, i) => {
      return <FoodCard key={ i } {...food}/>
    })

    return (
      <div>
      {
        (this.props.location !== undefined) &&
        <div className="welcome-page">
          <p>You are currently in</p>
          <MyMap />
          <h2>In Your Area</h2>
          <div className="card-container">
            {allFood}
          </div>
        </div>
      }
      {
        (this.props.location === undefined) &&
        <img className="loading" src='https://media.giphy.com/media/l2JHRhAtnJSDNJ2py/giphy.gif' />
      }
      </div>
    )
  }

}

export default MainContainer(WelcomePage)
