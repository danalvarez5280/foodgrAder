import { NavLink } from 'react-router-dom';
import MainContainer from '../containers/MainContainer';
import React from 'react';

const Navigation = (props) => {
  const logOut = () => {
    this.props.signOut({
      userName: '',
      loggedIn: false,
    })
  }
  return(
    <header className='nav-bar'>
      <div className="left-nav">
        <div className="icon"></div>
        <NavLink to='/' className='nav'>
        <h1>foodgrAder</h1>
        </NavLink>
      </div>
      {
        !props.loggedIn &&
        <div className="right-nav">
          <NavLink to='/login' className='nav nav1'>Login</NavLink>
          <NavLink to='/createuser' className='nav'>SignUp</NavLink>
        </div>
      }
      {
        props.loggedIn &&
        <div className="right-nav">
          <NavLink to='/favorites' className='nav nav1'>Hi {props.user}!</NavLink>
          <NavLink to='/login' className='nav nav1' onClick={ () => logOut() }>SignOut</NavLink>
        </div>
      }

    </header>
  )
}

export default MainContainer(Navigation);
