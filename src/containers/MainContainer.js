import { connect } from 'react-redux';
import { submitSearch, setLocation, userSearch } from '../actions/index';


const mapStateToProps = (store) => {
  return {
      cityId: store.foodFetch.cityId,
      location: store.foodFetch.location,
      nearBy: store.foodFetch.nearbyPlaces,
      userInput: store.setLocation.userInput,
      userLocation: store.setLocation.userLocation,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      findFood: (lat, long) => dispatch(submitSearch(lat, long)),
      setLocation: (location) => dispatch(setLocation(location)),
      userSearch: (name, location) => dispatch(userSearch(name, location)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
