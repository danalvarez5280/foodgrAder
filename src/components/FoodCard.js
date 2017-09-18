import React from 'react'
import { Link } from 'react-router-dom'
import MainContainer from '../containers/MainContainer';
import { Route, NavLink} from 'react-router-dom';
import MoreInfo from './MoreInfo'


const FoodCard = ({ restaurant, setLocation }) => {
  const link = `/${restaurant.name}`;
  // console.log('dan5', link);
  // console.log('potential props', restaurant);
  return (
    <div className="food-card"
      onClick={ () => setLocation({userInput: restaurant.name})}>
      <h2>{ restaurant.name }</h2>
      <p><img className='food-image' src={restaurant.featured_image} alt="image not found"/></p>
      <p>Cuisine Type:</p>
      <p>{ restaurant.cuisines }</p>
      <p>Average Cost For Two:</p>
      <p>${ restaurant.average_cost_for_two }</p>
      <p>Rating:</p>
      <p>{restaurant.user_rating.aggregate_rating}</p>
      <p>Its...</p>
      <p>{restaurant.user_rating.rating_text}</p>
      <Link className='favorites-nav' to={link}>
        More Info
      </Link>
      <Route exact path={link} render={ () => <MoreInfo info={restaurant} /> } />
    </div>
  )
}

export default MainContainer(FoodCard);
