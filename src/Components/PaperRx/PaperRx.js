import React, { Component } from "react";

import "./PaperRx.css";
import PrescriptionPage from '../PrescriptionPage/PrescriptionPage';

class PaperRx extends Component {
  constructor() {
    super();
    this.state = {
      medications: ['thing'],
    }
    this.addMed = this.addMed.bind(this);
  }

  medsDisplay(){
    console.log('medication number', this.state.medications)
    const medicationForms = this.state.medications.map(elem => {
      return <PrescriptionPage />
    })
    return medicationForms;
  }

  addMed() {
    console.log('current med counter', this.state)
    const meds = [...this.state.medications, 'thing']
    this.setState({
      medications: meds
    })
  }
  render() {
    const medPages = this.medsDisplay()
    return <div className="med-info">
        <div className="new-order">
          <div className="cancel-button">CANCEL</div>
          <h3>NEW ORDER</h3>
        </div>
        {medPages}
        <div className="add-meds" onClick={() => this.addMed()}>Add another medication</div>
      </div>;
  }
}

export default PaperRx;
