import React, {Component} from 'react';
import { Redirect } from "react-router-dom";
import { Route, NavLink, Link } from "react-router-dom";


import MainContainer from '../../Containers/MainContainer';

class Login extends Component {
  constructor() {
    super();
    this.state = {};
  }
  grabInfo(e) {
    this.setState({ [e.target.title]: e.target.value });
  }

  login() {
    this.setState({
      loggedIn: true
    })
    this.props.login(this.state)
    console.log('hello')
  }

  render() {
    if(this.props.userLogin.email) {
      return <Redirect to='/' />
    };
    console.log('login page', this.props)
    return <div>
        Welcome Back!
        <div>
          <input onChange={e => this.grabInfo(e)} title="email" type="email" placeholder="email" />
          <input onChange={e => this.grabInfo(e)} title="password" type="password" placeholder="password" />
          <div onClick={() => this.login()}>Log In</div>
        </div>
        <div>
          Don't have an account?..
          <NavLink to="/sign-up" className="med-nav">
            SIGN UP
          </NavLink>
        </div>
      </div>;
  }
};

export default MainContainer(Login);