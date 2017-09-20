import React from 'react'
import MainContainer from '../containers/MainContainer';
import { Link } from 'react-router-dom';

const FoodCard = ({ restaurant, setLocation }) => {
  const getLetter = () => {
    const ratingGrade = parseFloat(restaurant.user_rating.aggregate_rating)
    const letterGrade = ((ratingGrade / 5) * 100)
    const votes = parseInt(restaurant.user_rating.votes);
    if(votes === 0){
      return "No Grade"
    }
    else if (letterGrade > 90) {
      return "A"
    }
    else if (letterGrade > 79) {
      return "B+"
    }
    else if (letterGrade > 75) {
      return "B"
    }
    else if (letterGrade > 70) {
      return "B-"
    }
    else if (letterGrade > 66) {
      return "C+"
    }
    else if (letterGrade > 62) {
      return "C"
    }
    else if (letterGrade > 59) {
      return "C-"
    }
    else if (letterGrade > 50) {
      return "D+"
    }
    else if (letterGrade > 45) {
      return "D"
    }
    else if (letterGrade > 39) {
      return "D"
    }
    else {
      return "F"
    }
  }

  return (
    <div className="food-card"
      onClick={ () => setLocation({
        userInput: restaurant.name,
        userLocation: restaurant.location.locality
      })}>
      <h2>{ restaurant.name }</h2>
      <p><img className='food-image' src={restaurant.thumb} alt="restaurant img"/></p>
      <p>{getLetter()}</p>
      <Link to={`restaurant_detail/${restaurant.id}`}>
      More Info
      </Link>
    </div>
  )
}

export default MainContainer(FoodCard);
