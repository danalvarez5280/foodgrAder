import { connect } from 'react-redux'


const mapStateToProps = (store) => {
    return {
        data: store.restaurants,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        findFood: (user) => dispatch(submitSearch(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)
