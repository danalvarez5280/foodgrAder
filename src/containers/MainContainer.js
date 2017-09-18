import { connect } from 'react-redux';
import { submitSearch, setLocation, mapUrlFetch } from '../actions/index';


const mapStateToProps = (store) => {
    return {
        cityId: store.foodFetch1.cityId,
        location: store.foodFetch1.location,
        neighborhood: store.foodFetch1.neighborhood,
        entityId: store.foodFetch1.entityId,
        entityType: store.foodFetch1.entityType,
        nearBy: store.foodFetch1.nearbyPlaces,
        // userSearch: store.setLocation,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        findFood: (lat, long) => dispatch(submitSearch(lat, long)),
        setLocation: (location) => dispatch(setLocation(location)),
        mapUrlFetch: (url) => dispatch(mapUrlFetch(url)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)
