import React from 'react'
import { Link } from 'react-router-dom'
import MainContainer from '../containers/MainContainer'


export const FoodCard = ({ name, cuisine, grade }) => {

  return (
    <div>
      <h2>{ name }</h2>
      <p>{ cuisine }</p>
      <p>{ grade }</p>
    </div>
  )
}

export default FoodCard;
