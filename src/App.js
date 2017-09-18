import React, { Component } from 'react';
import WelcomePage from './components/WelcomePage';
import CreateUser from './components/CreateUser';
import Login from './components/Login';
import MoreInfo from './components/MoreInfo';
import { Route, NavLink} from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className='nav-bar'>
          <div className="left-nav">
            <div className="icon"></div>
            <NavLink to='/' className='nav'>
            <h1>foodgrAder</h1>
            </NavLink>
          </div>
          <div className="right-nav">
            <NavLink to='/login' className='nav nav1'> Login </NavLink>
            <NavLink to='/createuser' className='nav'>Create User</NavLink>
          </div>
        </header>
        <Route exact path='/' component={ WelcomePage } />
        <Route exact path='/login' component={ Login } />
        <Route exact path='/createuser' component={ CreateUser } />

      </div>
    );
  }
}

export default App;
