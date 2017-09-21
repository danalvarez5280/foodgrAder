import React, { Component } from 'react';
import WelcomePage from './components/WelcomePage';
import CreateUser from './components/CreateUser';
import Login from './components/Login';
import Navigation from './components/Navigation';
import { Route } from 'react-router-dom';
import MoreInfo from './components/MoreInfo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path='/' component={ WelcomePage } />
        <Route path='/login' component={ Login } />
        <Route path='/createuser' component={ CreateUser } />
        <Route path='/restaurant_detail/:restaurant_id' component={ MoreInfo } />
      </div>
    );
  }
}

export default App;
