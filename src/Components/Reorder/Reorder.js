import React, { Component } from "react";
import MainContainer from "../../Containers/MainContainer";
import { Route, NavLink, Link } from "react-router-dom";

// import "./Reorder.css";
// import PrescriptionPage from "../PrescriptionPage/PrescriptionPage";

class Reorder extends Component {
  constructor(props) {
    super();
    this.state = {
      medications: props.addMed
    };
  }

  render() {
    return <div className="med-info">
        <div className="new-order">
          <Link className="nav-confirm" to="/">
            CANCEL
          </Link>
          <h3>ReOrder</h3>
        </div>
      </div>;
  }
}

export default MainContainer(Reorder);
