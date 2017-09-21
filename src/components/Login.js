import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MainContainer from '../containers/MainContainer';
// import firebase from '../firebase.js';

export class Login extends Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      password: '',
    }
  };

  grabInfo(e) {
    this.setState({
      [e.target.title]: e.target.value
    })
  };

  logIn() {
    this.props.signIn({
      userName: this.state.userName,
      loggedIn: true,
    })
  }

  render() {
    if(this.props.loggedIn) {
      // localStorage.setItem('user', (JSON.stringify(this.props.user)))
      return <Redirect to='/' />
    };
    return(
      <div>
        <form className="user-page">
          <input
            className='input-field'
            title='userName' type="text" value={this.state.email}
            placeholder="User Name"
            onChange={(e) => this.grabInfo(e)} />
          <input
            className='input-field'
            title='password' type="password" value={this.state.password}
            placeholder="password"
            onChange={(e) => this.grabInfo(e)} />
          <input
            onClick={ () => this.logIn()}
            className='input-field form-button'
            type='button'
            value='Log In'/>
        </form>
      </div>
    )
  }
};

export default MainContainer(Login);
