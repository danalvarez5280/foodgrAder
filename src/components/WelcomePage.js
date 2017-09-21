import React, { Component } from 'react';
import MainContainer from '../containers/MainContainer';
import FoodCard from './FoodCard';
import MyMap from './Map';
// import Navigation from './Navigation';
import './styles.css'

export class WelcomePage extends Component{
  componentDidMount() {
    if(this.props.location === undefined){
      this.getPosition()
    }
  }

  getPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      let currentLocation = position.coords
      this.props.findFood(currentLocation.latitude, currentLocation.longitude)
    })
  };

  shouldComponentUpdate(nextProps) {
    const locationChange = (
      this.props.userLocations !== nextProps.userLocations ||
      this.props.nearBy !== nextProps.nearBy ||
      this.props.userInfo !== nextProps.userInfo
    )

    if (locationChange) {
      return true
    }
    return false
  };


  render() {
    let {nearBy, location} = this.props;
    let nearByList = nearBy ? nearBy : [];

    const allFood = nearByList.map((food, i) => {
      return <FoodCard key={ i } {...food}/>
    })
    return (
      <div>

      {
        (location !== undefined) &&
        <div className="welcome-page">
          <p>You are currently searching in</p>
          <MyMap />
          <h1 id="area">Restaurants</h1>
            <div className="card-container">
            { allFood }
            </div>
        </div>
      }
      {
        (location === undefined) &&
        <div className="loading-screen">
          <img className="loading" src='https://media.giphy.com/media/l2JHRhAtnJSDNJ2py/giphy.gif' alt="avocados dancing loading page"/>
        </div>
      }
      </div>
    )
  }

}

export default MainContainer(WelcomePage)
