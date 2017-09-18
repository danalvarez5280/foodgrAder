import React, { Component } from 'react';
import Iframe from 'react-iframe';
import MainContainer from '../containers/MainContainer';
// import googleMapsKey from '../key'
import './styles.css'


export class MyMap extends Component{
  constructor(){
    super();
    this.state = {
      foodName: '',
      query: ''
    }
    // this.getPosition = this.getPosition.bind(this);

  }

  // componentDidMount(){
  //   this.getPosition()
  // }

  grabLocation(query) {
    console.log('current props', this.props);
    // this.props.setLocation(query)

  }


  // getPosition() {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     let currentLocation = position.coords
  //     // document.getElementById('startLat').innerHTML = currentLocation.latitude;
  //     // document.getElementById('startLon').innerHTML = currentLocation.longitude;
  //     this.props.findFood(currentLocation.latitude, currentLocation.longitude)
  //   })
  // };

  render() {
    const { location, nearBy } = this.props;
    const param1 = nearBy[0].restaurant.name
    console.log('param1', param1)
    const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDAOPlM-JOakw3AcI0FwW23r6L-Rhgc-lI&q=${param1},${location}`
    return(
      <div className="map-area">
        <p>{this.props.neighborhood}</p>
        <p>{this.props.location}</p>
        <div className="main-form">
          <form>
            <input
              className='input-field'
              title='location' type="text" value={this.state.query}
              placeholder="location"
              onChange={(e) => this.grabInfo(e)} />
            <input
              className='input-field form-button'
              type='button'
              onClick={ (e) => {this.grabLocation(this.state.query)}}
              value="Where You At" />
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
