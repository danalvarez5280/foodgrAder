import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MainContainer from '../containers/MainContainer';
import firebase from '../firebase.js';
import './styles.css'

class CreateUser extends Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.grabInfo = this.grabInfo.bind(this)
  };

  grabInfo(e) {
    this.setState({
      [e.target.title]: e.target.value
    })
  };

  handleSubmit(e) {
    e.preventDefault();
    const userRef = firebase.database().ref('user');
    const user = {
      favorites: [],
      userName: this.state.userName,
    }
  userRef.push(user);
  this.props.signIn({
    userName: this.state.userName,
    loggedIn: true,
  })
  this.setState({
    email: '',
    userName: '',
    location: '',
    password: '',
  });
};

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
            title='userName' type="text" value={this.state.userName}
            placeholder="user name"
            onChange={(e) => this.grabInfo(e)} />
          <input
            className='input-field'
            title='password' type="password" value={this.state.password}
            placeholder="password"
            onChange={(e) => this.grabInfo(e)} />
          <input
            className='input-field form-button'
            onClick={ (e) => this.handleSubmit(e)}
            type="button"
            value="Create User" />
        </form>
      </div>
    )
  }
};

export default MainContainer(CreateUser);
