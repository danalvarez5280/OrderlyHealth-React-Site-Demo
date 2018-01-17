import React, { Component } from "react";
import MainContainer from "../../Containers/MainContainer";

import "./PaperRx.css";
import PrescriptionPage from '../PrescriptionPage/PrescriptionPage';

class PaperRx extends Component {
  constructor() {
    super();
    this.state = {
      medications: [{}]
    };
    this.addMed = this.addMed.bind(this);
    this.saveMed = this.saveMed.bind(this);
  }
  
  medsDisplay(){
    const meds = this.state.medications;
    if(meds.length > 1) {
      return meds.map((elem, index) => {
        return <PrescriptionPage key={index} medNum={index} currentMeds={this.state.medications[0]} saveMed={this.saveMed} />;
      })
    }
    return meds.map((elem, index) => {
      return <PrescriptionPage key={index} medNum={index} saveMed={this.saveMed} />;
    })
  }

  addMed(obj) {
    console.log('state', this.state)
    const meds = [...this.state.medications, obj];
    this.setState({ medications: meds });
    
  }

  saveMed(obj) {
    const meds = this.state.medications;
    meds.splice(obj.medNum, 1, obj);
    this.setState({
      medications: meds
    })
  }

  render() {
    console.log('current state', this.props.medications)
    const medPages = this.medsDisplay();
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

export default MainContainer(PaperRx);
