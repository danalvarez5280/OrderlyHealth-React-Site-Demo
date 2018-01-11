import React, { Component } from "react";

import "./PaperRx.css";
import PrescriptionPage from '../PrescriptionPage/PrescriptionPage';

class PaperRx extends Component {
  constructor() {
    super();
    this.state = {
      medications: [{medNum: 1}],
    }
    this.addMed = this.addMed.bind(this);
  }
  
  medsDisplay(){
    const medicationForms = this.state.medications.map((elem, index) => {
      return <PrescriptionPage key={index} info={elem} medNum={index} saveMed={this.saveMed}/>
    })
    return medicationForms;
  }

  addMed() {
    const meds = [...this.state.medications, 'thing']
    this.setState({
      medications: meds
    })
  }

  saveMed(obj) {
    console.log('submission obj', obj)
    // const medUpdate = this.state.medications.find(elem => {
    //   obj.medNum === elem.medNum
    // })
  }
  render() {
    const medPages = this.medsDisplay()
    return <div className="med-info">
        <div className="new-order">
          <div className="cancel-button">CANCEL</div>
          <h3>NEW ORDER</h3>
        </div>
        <div>
          {medPages}
        </div>
        <div className="add-meds" onClick={() => this.addMed()}>Add another medication</div>
      </div>;
  }
}

export default PaperRx;
