import React from 'react'
import MainContainer from '../containers/MainContainer';
// import { Link } from 'react-router-dom'
// import { Route, NavLink} from 'react-router-dom';
// import MoreInfo from './MoreInfo'


const FoodCard = ({ restaurant, setLocation }) => {
  const link = `${restaurant.menu_url}`;
  return (
    <div className="food-card"
      onClick={ () => setLocation({userInput: restaurant.name,
      userLocation: restaurant.location.locality})}>
      <h2>{ restaurant.name }</h2>
      <p><img className='food-image' src={restaurant.featured_image} alt="restaurant img"/></p>
      <h3>Cuisine Type:</h3>
      <p>{ restaurant.cuisines }</p>
      <h3>Address</h3>
      <p>{ restaurant.location.address }</p>
      <h3>Average Cost For Two:</h3>
      <p>${ restaurant.average_cost_for_two }</p>
      <h3>Average Rating:</h3>
      <p>{restaurant.user_rating.aggregate_rating}</p>
      <h3>Total Reviews</h3>
      <p>{restaurant.user_rating.votes}</p>
      <h3>Its...</h3>
      <p>{restaurant.user_rating.rating_text}</p>
      <a href={link} target="_blank">Menu</a>
    </div>
  )
}

// <Route exact path={link} render={ () => <MoreInfo info={restaurant} /> } />
export default MainContainer(FoodCard);
