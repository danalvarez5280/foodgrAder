import React, { Component } from 'react';
import Iframe from 'react-iframe';
import MainContainer from '../containers/MainContainer';
import './styles.css'


export class MyMap extends Component{
  constructor(props){
    super();
    this.state = {
      foodName: '',
      cuisine: '',
      location: '',
    }
    this.getPosition = this.getPosition.bind(this);

  }

  componentDidMount(){
    this.getPosition()
  }

  grabInfo(e) {
    this.setState({
      [e.target.title]: e.target.value
    })
  }

  grabLocation(locale) {
    this.props.setLocation(locale)
    return locale
  }

  getPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      document.getElementById('startLat').innerHTML = position.coords.latitude;
      document.getElementById('startLon').innerHTML = position.coords.longitude;
      this.props.setLocation(position.coords);
    });
  };

  render() {
    const param1 = this.state.foodName || 'chipotle';
    const param2 = this.state.cuisine || '';
    const location = this.state.location || ' downtown denver';
    const url = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDAOPlM-JOakw3AcI0FwW23r6L-Rhgc-lI&q=${param1},${location}`
    return(
      <div className="map-area">
        <p id='startLat'></p>
        <p id='startLon'></p>
        <div className="main-form">
          <form>
            <input
              title='foodName' type="text" value={this.state.foodName}
              placeholder="name"
              onChange={(e) => this.grabInfo(e)} />
            <button className='form-button'
              onClick={ (e) => {e.preventDefault();
              this.testFunc()}}>
                Search
            </button>
          </form>
          <input
            title='cuisine' type="text" value={this.state.cuisine}
            placeholder="cuisine"
            onChange={(e) => this.grabInfo(e)} />
            <form>
              <input
                title='location' type="text" value={this.state.location}
                placeholder="location"
                onChange={(e) => this.grabInfo(e)} />
              <button className='form-button'
                onClick={ (e) => {e.preventDefault();
                this.grabLocation(this.state.location)}}>
                Where You At
              </button>
              </form>
        </div>
        <Iframe url={url}
          width="450px"
          height="450px"
          position="relative"
          margin="200px"
          allowFullScreen />
      </div>
    )
  }
};

export default MainContainer(MyMap);
