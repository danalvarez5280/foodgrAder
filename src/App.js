import React, { Component } from 'react';
import WelcomePage from './components/WelcomePage';
import Map from './components/Map';
import CreateUser from './components/CreateUser';
import Login from './components/Login';
import { Route, NavLink, Link } from 'react-router-dom';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>foodgrAder</h1>
        <header className='nav-bar'>
          <NavLink to='/' className='nav'>
            <span className='nav-text'>Home</span>
          </NavLink>
          <NavLink to='/login' className='nav nav1'> Login </NavLink>
          <NavLink to='/createuser' className='nav'>Create User</NavLink>
        </header>
        <Route exact path='/' component={ WelcomePage } />
        <Route exact path='/login' component={ Login } />
        <Route exact path='/createuser' component={ CreateUser } />
      </div>
    );
  }
}

export default App;
