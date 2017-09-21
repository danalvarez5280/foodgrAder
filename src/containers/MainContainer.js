import { connect } from 'react-redux';
import { submitSearch, setLocation, userSearch, signIn, signOut, addFaves } from '../actions/index';


const mapStateToProps = (store) => {
  return {
    cityId: store.foodFetch.cityId,
    location: store.foodFetch.location,
    nearBy: store.foodFetch.nearbyPlaces,
    userInput: store.setLocation.userInput,
    userLocation: store.setLocation.userLocation,
    user: store.signIn.userName,
    loggedIn: store.signIn.loggedIn,
    favorites: store.addFaves
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findFood: (lat, long) => dispatch(submitSearch(lat, long)),
    setLocation: (location) => dispatch(setLocation(location)),
    userSearch: (name, location) => dispatch(userSearch(name, location)),
    signIn: (user) => dispatch(signIn(user)),
    signOut: (user) => dispatch(signOut(user)),
    addFaves: (favorite) => dispatch(addFaves(favorite))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)
