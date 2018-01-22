import React, { Component } from "react";
import { Route, NavLink, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

import MainContainer from '../../Containers/MainContainer';


class Account extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    if(this.props.userLogin.email === undefined) {
      return <Redirect to='/login' />
    };
    console.log('accoutn page: store', this.props)
    return <div className="account-page">
        <div className="links">
          <NavLink to="/account/profile" className="med-nav">
            Profile
          </NavLink>
          <NavLink to="/account/medical" className="med-nav">
            Medical
          </NavLink>
          <NavLink to="/account/insurance" className="med-nav">
            Insurance
          </NavLink>
          <NavLink to="/account/doctor" className="med-nav">
            Doctor
          </NavLink>
        </div>
      </div>;
  }
};

export default MainContainer(Account);