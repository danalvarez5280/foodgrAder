import React, { Component } from 'react';
import WelcomePage from './components/WelcomePage';
// import MyMap from './components/Map';
import CreateUser from './components/CreateUser';
import Login from './components/Login';
import { Route, NavLink} from 'react-router-dom';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='nav-bar'>
          <NavLink to='/' className='nav'>
            <h1>foodgrAder</h1>
          </NavLink>
          <NavLink to='/login' className='nav nav1'> Login </NavLink>
          <NavLink to='/createuser' className='nav'>Create User</NavLink>
          <h2>Welcome to foodgrAder!</h2>
        </header>
        <Route exact path='/' component={ WelcomePage } />
        <Route exact path='/login' component={ Login } />
        <Route exact path='/createuser' component={ CreateUser } />
      </div>
    );
  }
}

export default App;
