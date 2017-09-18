import { connect } from 'react-redux';
import { submitSearch, setLocation, userSearch, setLink, userFoodSearch, userFetch } from '../actions/index';


const mapStateToProps = (store) => {
  return {
      cityId: store.foodFetch1.cityId,
      location: store.foodFetch1.location,
      neighborhood: store.foodFetch1.neighborhood,
      entityId: store.foodFetch1.entityId,
      entityType: store.foodFetch1.entityType,
      nearBy: store.foodFetch1.nearbyPlaces,
      userInput: store.setLocation.userInput,
      userLocation: store.setLocation.userLocation,
      userLocations: store.userSearch[(store.userSearch.length - 1)],
      moreInfoLink: store.setLink,
      userInfo: store.userFoodSearch[(store.userFoodSearch.length -1)],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      findFood: (lat, long) => dispatch(submitSearch(lat, long)),
      setLocation: (location) => dispatch(setLocation(location)),
      userSearch: (location) => dispatch(userSearch(location)),
      userFoodSearch: (name, locationId) => dispatch(userFoodSearch(name, locationId)),
      locationClear: (location) => dispatch(userFetch(location)),
      setLink: (link) => dispatch(setLink(link)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
