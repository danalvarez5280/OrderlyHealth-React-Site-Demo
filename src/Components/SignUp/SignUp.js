import React, {Component} from 'react';
import { Redirect } from "react-router-dom";

import MainContainer from '../../Containers/MainContainer';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      ageConfirm: false,
      termsConfirm: false,
    };
  }

  ageConfirm() {
    this.state.ageConfirm ? this.setState({ ageConfirm: false }) :
                            this.setState({ ageConfirm: true });
  };

  grabInfo(e) {
    this.setState({ [e.target.title]: e.target.value });
  };

  termsCheck() {
    this.state.termsConfirm ? this.setState({ termsConfirm: false }) : 
                              this.setState({ termsConfirm: true });
  };

  login() {
    this.props.login(this.state);
  };

  render() {
    if(this.props.userLogin.email) {
      return <Redirect to='/' />
    };
    const ageConfirmed = this.state.ageConfirm ? 'selected' : 'not-selected';
    const termsConfirmed = this.state.termsConfirm ? 'selected' : 'not-selected';
    return <div>
        Set Up Your Account
        <div>
          <input onChange={e => this.grabInfo(e)} title="firstName" placeholder="First name" />
          <input onChange={e => this.grabInfo(e)} title="lastName" placeholder="Last name" />
          <input onChange={e => this.grabInfo(e)} title="email" placeholder="Email" />
          <input onChange={e => this.grabInfo(e)} title="confirmEmail" placeholder="Confirm email" />
          <input onChange={e => this.grabInfo(e)} title="password" type="password" placeholder="Password" />
          <input onChange={e => this.grabInfo(e)} title="confirmPassword" type="password" placeholder="Confirm password" />
          <input onChange={e => this.grabInfo(e)} title="zipcode" placeholder="Zipcode" />
          <input onChange={e => this.grabInfo(e)} title="phone" placeholder="Phone" />
          <div className={ageConfirmed} onClick={() => this.ageConfirm()}>
            I am over the age of 13
          </div>
          <div className={termsConfirmed} onClick={() => this.termsCheck()}>
            I have read and accept the Terms of Service and Privacy Policy
          </div>
          <div onClick={() => this.login()}>CONTINUE</div>
        </div>
      </div>;
  }
};

export default MainContainer(SignUp);