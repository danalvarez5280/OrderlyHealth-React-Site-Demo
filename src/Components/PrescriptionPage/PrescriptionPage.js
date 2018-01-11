import React, { Component } from "react";


class PrescriptionPage extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div className="med-info">
        <h4>Medication Information</h4>
        <div className="medicaion-info">
          <input
            type="text"
            className="full-input"
            placeholder="Medication Name"
          />
          <input type="text" className="half-input" placeholder="Dose" />
          <input type="text" className="half-input" placeholder="Quantity" />
          <input type="text" className="half-input" placeholder="Supply" />
          <input type="text" className="half-input" placeholder="Refills" />
          <input
            type="text"
            className="full-input"
            placeholder="Prescribing Doctor's Name"
          />
          <input
            type="text"
            className="full-input"
            placeholder="Prescribing Doctor's Phone Number"
          />
        </div>
      </div>
    );
  }
}

export default PrescriptionPage;
