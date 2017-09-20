import { connect } from 'react-redux';
import { submitSearch, setLocation, userSearch, userQuery } from '../actions/index';


const mapStateToProps = (store) => {
  return {
      cityId: store.foodFetch1.cityId,
      location: store.foodFetch1.location,
      nearBy: store.foodFetch1.nearbyPlaces,
      userInput: store.setLocation.userInput,
      userLocation: store.setLocation.userLocation,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      findFood: (lat, long) => dispatch(submitSearch(lat, long)),
      setLocation: (location) => dispatch(setLocation(location)),
      userSearch: (name, location) => dispatch(userSearch(name, location)),
      locationClear: (location) => dispatch(userQuery(location)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
