import React, { Component } from 'react';
import FoodCard from './FaveCard';
import MainContainer from '../containers/MainContainer';

class Favorites extends Component {
  constructor() {
    super()
  }

  render(){
    console.log('store', this.props);
    const allFaves = this.props.favorites.map((food, i) => {
      return <FoodCard key={ i } {...food}/>
    })
    return(
      <div className="card-container">
        {allFaves}
      </div>
    )
  }
}

export default MainContainer(Favorites);
