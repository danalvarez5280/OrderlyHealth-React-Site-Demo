import React, { Component } from "react";

import PrescriptionPage from "../PrescriptionPage/PrescriptionPage";

class Transfer extends Component {
  constructor() {
    super();
    this.state = {
      transferMedications: [{}]
    };
    this.addMed = this.addMed.bind(this);
    this.saveMed = this.saveMed.bind(this);
  }

  medsDisplay() {
    return this.state.transferMedications.map((elem, index) => {
      return (
        <PrescriptionPage key={index} medNum={index} saveMed={this.saveMed} />
      );
    });
  }

  addMed(obj) {
    console.log("state", this.state);
    const meds = [...this.state.transferMedications, obj];
    this.setState({ transferMedications: meds });
  }

  saveMed(obj) {
    const meds = this.state.transferMedications;
    meds.splice(obj.medNum, 1, obj);
    this.setState({
      transferMedications: meds
    });
  }

  render() {
    console.log("current state", this.state);
    const medPages = this.medsDisplay();
    return (
      <div className="med-info">
        <div className="new-order">
          <div className="cancel-button">CANCEL</div>
          <h3>Transfer</h3>
        </div>
        <div>{medPages}</div>
        <div className="add-meds" onClick={() => this.addMed()}>
          Add another medication
        </div>
      </div>
    );
  }
}

export default Transfer;
