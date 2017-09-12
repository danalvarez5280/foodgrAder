import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MainContainer from '../containers/MainContainer';

export class CreateUser extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      location: '',
      cuisine: '',
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
        <form>
          <input
            title='email' type="email" value={this.state.email}
            placeholder="email"
            onChange={(e) => this.grabInfo(e)} />
          <input
            title='location' type="text" value={this.state.locaiton}
            placeholder="location"
            onChange={(e) => this.grabInfo(e)} />
          <input
            title='cuisine' type="text" value={this.state.cuisine}
            placeholder="favorite cuisine"
            onChange={(e) => this.grabInfo(e)} />
          <input
            title='password' type="password" value={this.state.password}
            placeholder="password"
            onChange={(e) => this.grabInfo(e)} />
          <button className='form-button'>
              Log In
          </button>
        </form>
      </div>
    )
  }
};

export default CreateUser;
