import React from 'react'
import MainContainer from '../containers/MainContainer';
import { Link } from 'react-router-dom';

const FoodCard = ({ restaurant, setLocation, addFaves, favorites, userInput, userLocation }) => {
  const getLetter = () => {
    const ratingGrade = parseFloat(restaurant.user_rating.aggregate_rating)
    const letterGrade = ((ratingGrade / 5) * 100)
    const votes = parseInt(restaurant.user_rating.votes);
    if(votes === 0){
      return 'No Grade'
    }
    else if (letterGrade > 90) {
      return 'A'
    }
    else if (letterGrade > 79) {
      return 'B+'
    }
    else if (letterGrade > 75) {
      return 'B'
    }
    else if (letterGrade > 70) {
      return 'B-'
    }
    else if (letterGrade > 66) {
      return 'C+'
    }
    else if (letterGrade > 62) {
      return 'C'
    }
    else if (letterGrade > 59) {
      return 'C-'
    }
    else if (letterGrade > 50) {
      return 'D+'
    }
    else if (letterGrade > 45) {
      return 'D'
    }
    else if (letterGrade > 39) {
      return 'D'
    }
    else {
      return 'F'
    }
  }

  const addFavorite = () => {
    addFaves(restaurant)
  }

  const favoredList = favorites.filter(elem => elem.id === restaurant.id)
  console.log('store', userInput, restaurant.name);
    // const removeFavorite = () => {
  //
  // }

  return (
    <div className='food-card'>
      <h2 className='rest-name'>{ restaurant.name }</h2>
      <p><img className='food-image' src={restaurant.thumb} alt='restaurant img'/></p>
      <p className='grade'>{getLetter()}</p>
      <div className='icons'>
      {
        favoredList.includes(restaurant) &&
        <div
          className='heart-icon-pink'
          onClick={() => addFavorite()}>
        </div>
      }
      {
        !favoredList.includes(restaurant) &&
        <div
          className='heart-icon'
          onClick={() => addFavorite()}>
        </div>
      }
      {
        userInput !== restaurant.name &&
        <div
          className='find-icon'
          onClick={ () => setLocation({
            userInput: restaurant.name,
            userLocation: restaurant.location.locality
        })}>
        </div>
      }
      {
        userInput === restaurant.name &&
        <div
          className='find-icon-pink'
          onClick={ () => setLocation({
            userInput: restaurant.name,
            userLocation: restaurant.location.locality
        })}>
        </div>
      }
      <Link className='info-icon' to={`restaurant_detail/${restaurant.id}`}>
      </Link>
      </div>
    </div>
  )
};

export default MainContainer(FoodCard);
