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

  grabLocation(object) {
    this.props.setLocation(object)
    this.props.userSearch(object.userLocation)
    this.props.userFoodSearch({userInput: undefined, userLocation: undefined})
    this.setState({
      userInput: '',
      userLocation: '',
    })
  }

  userInfo(object) {
    this.props.setLocation(object)
    this.props.userFoodSearch(object.userInput, this.props.cityId)
    this.setState({
      userInput: '',
      userLocation: '',
    })
  }

  resetSearch(object) {
    this.props.setLocation(object)
    this.props.userFoodSearch(object.userInput, object.userLocation)
    this.props.locationClear(object.userLocation)
  }

  grabInfo(e) {
    this.setState({
      [e.target.title] : e.target.value
    })
  }

  render() {
    const { location, nearBy, userInput, userLocation, userLocations } = this.props;
    const autoParam = nearBy[0].restaurant.name;
    const userSelection = userLocations ? userLocations[0].restaurant.name : autoParam;
    const autoLocation = location;
    const locationParam = userLocation ? userLocation : autoLocation;
    const userParam = userInput ? userInput : userSelection;
    const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDAOPlM-JOakw3AcI0FwW23r6L-Rhgc-lI&q=${userParam},${locationParam}`
    return(
      <div className="map-area">
        <p>{this.props.neighborhood}</p>
        <p>{this.props.location}</p>
        <div className="forms">
        <form className="main-form">
          <input
            className='input-field'
            title='userInput' type="text" value={this.state.userInput}
            placeholder="search by name"
            onChange={(e) => this.grabInfo(e)} />
          <input
            className='input-field form-button'
            type='button'
            onClick={ (e) => {this.userInfo(this.state)}}
            value="Food Search" />
        </form>
          <form className="main-form">
            <input
              className='input-field'
              title='userLocation' type="text" value={this.state.userLocation}
              placeholder="search for location"
              onChange={(e) => this.grabInfo(e)} />
            <input
              className='input-field form-button'
              type='button'
              onClick={ (e) => {this.grabLocation(this.state)}}
              value="Location Search" />
          </form>
        </div>
        <button
        onClick={ () => this.resetSearch({userInput: undefined, userLocation: undefined})}
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
