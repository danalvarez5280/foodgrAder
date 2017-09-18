import React, { Component } from 'react';
import MainContainer from '../containers/MainContainer';
import FoodCard from './FoodCard';
import MyMap from './Map';
import './styles.css'

export class WelcomePage extends Component{

  componentDidMount() {
        this.getPosition()
  }

  getPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      let currentLocation = position.coords
      this.props.findFood(currentLocation.latitude, currentLocation.longitude)
    })
  };

  shouldComponentUpdate(nextProps) {
    if (this.props.userLocations !== nextProps.userLocations) {
      return true;
    }
    if (this.props.nearBy !== nextProps.nearBy){
      return true;
    }
    if(this.props.userInfo !== nextProps.userInfo){
      return true;
    }
    return false;
  };


  render() {
    let {nearBy, userLocations, userInfo} = this.props;
    let foodList1 = nearBy ? nearBy : [];
    let foodList2 = userLocations ? userLocations : [];
    let userList = userInfo ? userInfo : [];

    let foodList = foodList2.length > 0 ? foodList2 : foodList1;
    let finalList = userList.length > 0 ? userList : foodList;

    const allFood = finalList.map((food, i) => {
      return <FoodCard key={ i } {...food}/>
    })

    return (
      <div>
      {
        (this.props.location !== undefined) &&
        <div className="welcome-page">
          <p>You are currently in</p>
          <MyMap />
          <h2 id="area">Restaurants</h2>
            <div className="card-container">
            { allFood }
            </div>
        </div>
      }
      {
        (this.props.location === undefined) &&
        <div className="loading-screen">
          <img className="loading" src='https://media.giphy.com/media/l2JHRhAtnJSDNJ2py/giphy.gif' alt="avocados dancing loading page"/>
        </div>
      }
      </div>
    )
  }

}

export default MainContainer(WelcomePage)
