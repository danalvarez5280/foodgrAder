import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import MainContainer from '../containers/MainContainer';
// import firebase from '../firebase.js';

export class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
    }
  };

  grabInfo(e) {
    this.setState({
      [e.target.title]: e.target.value
    })
  }


  render() {
    return(
      <div>
        <form className="user-page">
          <input
            className='input-field'
            title='email' type="email" value={this.state.email}
            placeholder="email"
            onChange={(e) => this.grabInfo(e)} />
          <input
            className='input-field'
            title='password' type="password" value={this.state.password}
            placeholder="password"
            onChange={(e) => this.grabInfo(e)} />
          <input
          className='input-field form-button'
          type='button'
          value='Log In'/>
        </form>
      </div>
    )
  }
};

export default MainContainer(Login);
