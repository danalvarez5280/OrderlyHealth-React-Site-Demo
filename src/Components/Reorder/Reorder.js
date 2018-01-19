import React, { Component } from "react";
import MainContainer from "../../Containers/MainContainer";
import { Route, NavLink, Link } from "react-router-dom";

// import "./Reorder.css";
// import PrescriptionPage from "../PrescriptionPage/PrescriptionPage";

class Reorder extends Component {
  constructor(props) {
    super();
    this.state = {
      medications: props.medications
    };
  }

  displayMedications() {

    return this.state.medications.map((elem, index) => {
      return (
        <div>
          <h4>{elem.medicationName}</h4>
          <p>{elem.dose} mg</p>
          <p>{elem.refills} Refills</p>
          <p>Next Fill: N/A</p>
        </div>
      )
    })
  }

  render() {
    console.log('currentMeds', this.props.medications)
    const currentMeds = this.displayMedications()
    return <div className="med-info">
        <div className="new-order">
          <Link className="nav-confirm" to="/">
            CANCEL
          </Link>
          <h3>ReOrder</h3>
        </div>
        {currentMeds}
      </div>;
  }
}

export default MainContainer(Reorder);

// undefined;
// docName: "d";
// docNumber: "d";
// dose: "d";
// medNum: 0;
// medicationName: "d";
// pharmacy: undefined;
// quantity: "d";
// refills: "d";
// storedMeds: undefined;
// supply: "d";
// usePreviousDocInfo: f;
