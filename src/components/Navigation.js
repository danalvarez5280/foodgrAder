import { NavLink } from 'react-router-dom';
import MainContainer from '../containers/MainContainer';
import React from 'react'

const Navigation = () => {

  return(
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
  )
}

export default MainContainer(Navigation);
