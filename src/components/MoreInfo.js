import React, { Component } from 'react'
import MainContainer from '../containers/MainContainer';
import { Link } from 'react-router-dom';

class MoreInfo extends Component {

  render() {
    const { nearBy, match } = this.props;
    const restId = match.params.restaurant_id;
    const place = nearBy.find(elem => {
      return elem.restaurant.id === restId })
    return (
      <div className='moreinfo-rest'>
        <table>
          <tr>
            <td>Name:</td>
            <td>{ place.restaurant.name }</td>
          </tr>
          <tr>
            <td>Cuisine Type:</td>
            <td>{ place.restaurant.cuisines }</td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>{ place.restaurant.location.address }</td>
          </tr>
          <tr>
            <td>Average Cost for Two:</td>
            <td>{ place.restaurant.average_cost_for_two }</td>
          </tr>
          <tr>
            <td>Average Rating:</td>
            <td>{place.restaurant.user_rating.aggregate_rating}/5</td>
          </tr>
          <tr>
            <td>Total Reviews:</td>
            <td>{place.restaurant.user_rating.votes}</td>
          </tr>
          <tr>
            <td>Its..</td>
            <td>{place.restaurant.user_rating.rating_text}</td>
          </tr>
          <tr colspan='2' className='nav2'>
              <Link className='nav' to='/'>
                BACK
              </Link>
          </tr>
        </table>
      </div>
    )
  }
}

export default MainContainer(MoreInfo);
