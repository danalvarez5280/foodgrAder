import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import MainContainer from '../containers/MainContainer';
import firebase from '../firebase.js';
import './styles.css'

class CreateUser extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      userName: '',
      location: '',
      password: '',
      favorites: [],
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.grabInfo = this.grabInfo.bind(this)
  };

  componentDidMount() {

  }

  grabInfo(e) {
    this.setState({
      [e.target.title]: e.target.value
    })
  };

  handleSubmit(e) {
  e.preventDefault();
  const userRef = firebase.database().ref('user');
  const user = {
    email: this.state.email,
    userName: this.state.userName,
  }
  userRef.push(user);
  this.setState({
    email: '',
    userName: '',
    location: '',
    password: '',
  });
};

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
            title='userName' type="text" value={this.state.userName}
            placeholder="user name"
            onChange={(e) => this.grabInfo(e)} />
          <input
            className='input-field'
            title='location' type="text" value={this.state.location}
            placeholder="location"
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
            value="CREATE USER" />
        </form>
      </div>
    )
  }
};

export default MainContainer(CreateUser);
