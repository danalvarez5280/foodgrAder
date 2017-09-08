import React, { Component } from 'react';
import WelcomePage from './components/WelcomePage';
import FoodList from './components/FoodList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>foodgrAder</h1>
          
        </header>
        <WelcomePage />
      </div>
    );
  }
}

export default App;
