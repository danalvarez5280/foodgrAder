import React, { Component } from 'react';
import Iframe from 'react-iframe';
import MainContainer from '../containers/MainContainer';
// import googleMapsKey from '../key'
import './styles.css'


export class MyMap extends Component{
  constructor(){
    super();
    this.state = {
      userInput: '',
      userLocation: '',
    }
  }
  // const { userInput, userLocation} = this.state

  grabLocation() {
    if (this.state.userInput === '' && this.state.userLocation === '') {
      alert("Hey Dummy! What are you looking for?")
    }
    else {
      this.userInfo()
    }
    console.log('store', this.props);
  }

  userInfo() {
    const foodPlace = this.state.userInput === '' ? '' : this.state.userInput;
    const foodLocation = this.state.userLocation === '' ? this.props.location : this.state.userLocation;
    console.log('food and location', foodPlace, foodLocation);
    this.props.setLocation({
      userInput: foodPlace,
      userLocation: foodLocation,
    })
    this.props.userSearch(foodPlace, foodLocation);
  }

  resetSearch() {
    this.getPosition()
    this.props.setLocation({userInput: undefined, userLocation: undefined})
    this.setState({
      userInput: '',
      userLocation: '',
    })
  }

  getPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      let currentLocation = position.coords
      this.props.findFood(currentLocation.latitude, currentLocation.longitude)
    })
  };

  grabInfo(e) {
    this.setState({
      [e.target.title] : e.target.value
    })
  }

  render() {
    const { location, nearBy, userInput } = this.props;
    const param1 = userInput ? userInput : nearBy[0].restaurant.name;
    const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDAOPlM-JOakw3AcI0FwW23r6L-Rhgc-lI&q=${param1},${location}`;

    return(
      <div className="map-area">
        <p>{this.props.location}</p>
        <div className="forms">
        <form className="main-form">
          <input
            className='input-field'
            title='userInput' type="text" value={this.state.userInput}
            placeholder="food type or name"
            onChange={(e) => this.grabInfo(e)} />
            <input
              className='input-field'
              title='userLocation' type="text" value={this.state.userLocation}
              placeholder="location"
              onChange={(e) => this.grabInfo(e)} />
            <input
              className='input-field form-button'
              type='button'
              onClick={ (e) => this.grabLocation()}
              value="Search" />
          </form>
        </div>
        <button
          onClick={ () => this.resetSearch()}
          className='input-field form-button refresh'>
          Reset Search
        </button>
          <Iframe
            className="map-window"
            url={ url }
            width="450px"
            height="250px"
            position="relative"
            margin="200px"
            allowFullScreen />
      </div>
    )
  }
};

export default MainContainer(MyMap);
