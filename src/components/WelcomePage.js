import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';


export class WelcomePage extends Component{
  constructor() {
    super()
    this.state ={
      searchInfo: '',
    }
    this.grabInfo = this.grabInfo.bind(this)
  }

  grabInfo(e) {
    this.setState({
      [e.target.title]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>Welcome to foodgrAder!</h3>
        <p>Please search a restaurant, cuisine type, or locaiton to start your search!</p>
        <form>
          <input
            title='searchInfo' type="text" value={this.state.searchInfo}
            placeholder="name"
            onChange={(e) => this.grabInfo(e)} />
          <button className='form-button'
            onClick={ (e) => {e.preventDefault();
            this.props.submitSearch(this.state)}}>
              Log In
          </button>
        </form>
      </div>
    )
  }

}
// export class Login extends Component {
//   constructor() {
//     super()
//     this.state = {
//       name: '',
//       email: '',
//       password: ''
//     }
//     this.grabValue = this.grabValue.bind(this)
//   }
//
//   grabValue(e) {
//     this.setState({
//         [e.target.title]: e.target.value
//     })
//   }
//
//   render() {
//     if(this.props.loginInput.loggedIn) {
//       localStorage.setItem('user', (JSON.stringify(this.props.loginInput)))
//       return <Redirect to='/' />
//     }
//
//     return(
//       <div>
//         <form>
//         <input
//           title='name' type="text" value={this.state.name}
//           placeholder="name"
//           onChange={(e) => this.grabValue(e)} />
//         <input
//           title='email' type="email" value={this.state.email}
//           placeholder="email"
//           onChange={(e) => this.grabValue(e)} />
//         <input
//           title='password' type="password"
//           placeholder="password"
//           onChange={(e) => this.grabValue(e)} />
//         <button className='form-button'
//           onClick={ (e) => {
//             e.preventDefault();
//             this.props.submitLogin(this.state)}}>Log In</button>
//         <button className='form-button'
//           onClick={ (e) => {
//             e.preventDefault();
//             this.props.addUser(this.state)}}>Create User</button>
//         </form>
//       </div>
//     )
//   }
// }

export default WelcomePage
