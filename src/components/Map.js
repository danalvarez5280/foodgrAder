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
    this.setState({
      userLocation: '',
    })
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
    const userParam1 = userInput ? userInput : userSelection;
    const userParam2 = userLocation ? userLocation : autoLocation;
    // const param2 = userParam2 ? userParam2 : autoLocation;
    const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDAOPlM-JOakw3AcI0FwW23r6L-Rhgc-lI&q=${userParam1},${userSelection}`
    return(
      <div className="map-area">
        <p>{this.props.neighborhood}</p>
        <p>{this.props.location}</p>
        <div>
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
              value="Food Search" />
          </form>
        </div>
          <Iframe
            className="map-window"
            url={ url }
            width="900px"
            height="450px"
            position="relative"
            margin="200px"
            allowFullScreen />
      </div>
    )
  }
};

export default MainContainer(MyMap);
