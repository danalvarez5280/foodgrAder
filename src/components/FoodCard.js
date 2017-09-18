import React from 'react'
// import { Link } from 'react-router-dom'
import MainContainer from '../containers/MainContainer';



const FoodCard = ({ restaurant }) => {

  return (
    <div className="food-card">
      <h2>{ restaurant.name }</h2>
      <p>Cuisine Type:</p>
      <p>{ restaurant.cuisines }</p>
      <p>Average Cost For Two:</p>
      <p>${ restaurant.average_cost_for_two }</p>
      <p>Rating:</p>
      <p>{restaurant.user_rating.aggregate_rating}</p>
      <p>{restaurant.user_rating.text_rating}</p>
      <p><img className='food-image' src={restaurant.featured_image}/></p>
    </div>
  )
}

export default MainContainer(FoodCard);
