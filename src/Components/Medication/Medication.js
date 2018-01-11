import React, { Component } from "react";
import { Route, NavLink, Link } from "react-router-dom";

import "./Medication.css";

class Medication extends Component {
  render() {
    return <div className="med-page">
        <div className="question">Where is your prescription?</div>
        <div className="links">
          <NavLink to="/medication/pharmacy" className="med-nav">
            At the Pharmacy
          </NavLink>
          <NavLink to="/medication/paperrx" className="med-nav">
            I have a paper prescription
          </NavLink>
          <NavLink to="/medication/doctorrx" className="med-nav">
            My Doctors will send my Rx
          </NavLink>
          <NavLink to="/medication/reorder" className="med-nav">
            I want to reorder through Orderly
          </NavLink>
        </div>
      </div>;
  }
}

export default Medication;
