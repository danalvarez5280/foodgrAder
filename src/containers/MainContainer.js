import { connect } from 'react-redux';
import { submitSearch, setLocation, mapUrlFetch } from '../actions/index';


const mapStateToProps = (store) => {
    return {
        data: store.restaurants,
        location: store.location,
        url: store.url,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        findFood: (user) => dispatch(submitSearch(user)),
        setLocation: (location) => dispatch(setLocation(location)),
        mapUrlFetch: (url) => dispatch(mapUrlFetch(url)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)
