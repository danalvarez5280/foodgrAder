import React, { Component } from 'react'
import MainContainer from '../containers/MainContainer';
import { Link } from 'react-router-dom';

class MoreInfo extends Component {
  // constructor() {
  //   super();
  // }

  render() {
    const { userLocations, nearBy, match } = this.props;
    const restId = match.params.restaurant_id;
    const places = userLocations ? userLocations : nearBy;
    const place = places.find(elem => {
      return elem.restaurant.id=== restId })
    return (
      <div className='moreinfo-rest'>
        <h2>{ place.restaurant.name }</h2>
        <h3>Cuisine Type</h3>
        <p>{ place.restaurant.cuisines }</p>
        <h3>Address</h3>
        <p>{ place.restaurant.location.address }</p>
        <h3>Average Cost For Two:</h3>
        <p>${ place.restaurant.average_cost_for_two }</p>
        <h3>Average Rating:</h3>
        <p>{place.restaurant.user_rating.aggregate_rating}/5</p>
        <h3>Total Reviews</h3>
        <p>{place.restaurant.user_rating.votes}</p>
        <h3>Its...</h3>
        <p>{place.restaurant.user_rating.rating_text}</p>
        <Link to='/'>
          Back
        </Link>
      </div>
    )
  }
}

export default MainContainer(MoreInfo);
