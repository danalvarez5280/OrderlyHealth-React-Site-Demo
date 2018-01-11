import React, { Component } from "react";
import { Route, NavLink, Link } from "react-router-dom";

import "./Medication.css";

class Medication extends Component {
  render() {
    return <div className="med-page">
        <div className="question">What is your prescription?</div>
        <NavLink to="/doctors" className="med-nav">
          At the Pharmacy
        </NavLink>
        <NavLink to="/doctors" className="med-nav">
          I have a paper prescription
        </NavLink>
        <NavLink to="/doctors" className="med-nav">
          My Doctors will send my Rx
        </NavLink>
        <NavLink to="/doctors" className="med-nav">
          I want to reorder through Orderly
        </NavLink>
      </div>;
  }
}

export default Medication;
