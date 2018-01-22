import React, { Component } from "react";
import { Route, NavLink, Link } from "react-router-dom";

import "./Header.css";

class Header extends Component {
  render() {
    return <header>
        <NavLink to="/" className="nav" className='nav orderly-logo'>ORDERLY HOME</NavLink>
        <NavLink to="/doctors" className="nav">DOCTORS</NavLink>
        <NavLink to="/medication" className="nav">MEDICATION</NavLink>
        <NavLink to="/insurance" className="nav">INSURANCE</NavLink>
        <NavLink to="/chat" className="nav">CHAT</NavLink>
        <NavLink to="/account" className="nav">ACCOUNT</NavLink>
      </header>;
  }
}

export default Header;
