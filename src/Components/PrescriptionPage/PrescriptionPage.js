import React, { Component } from "react";

import "./PrescriptionPage.css";

class PrescriptionPage extends Component {
  constructor(props) {
    super();
    this.state = {
      medicationName: props.medicationName,
      dose: props.dose,
      quantity: props.quantity,
      supply: props.supply,
      refills: props.refills,
      docName: props.docName,
      docNumber: props.docNumber,
      medNum: props.medNum

    }
    this.grabInfo = this.grabInfo.bind(this);
  }
  grabInfo(e){
    this.setState({ [e.target.title]: e.target.value });
  }

  saveInfo() {
    this.props.saveMed(this.state)
  }
  render() {
    return <div className="med-info">
        <h4>Medication Information</h4>
        <div className="medicaion-info">
          <input title="medicationName" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Medication Name" value={this.state.medicationName} />
          <input title="dose" type="text" className="half-input" onChange={e => this.grabInfo(e)} placeholder="Dose" />
          <input title="quantity" type="text" className="half-input" onChange={e => this.grabInfo(e)} placeholder="Quantity" />
          <input title="supply" type="text" className="half-input" onChange={e => this.grabInfo(e)} placeholder="Supply" />
          <input title="refills" type="text" className="half-input" onChange={e => this.grabInfo(e)} placeholder="Refills" />
          <input title="docName" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Prescribing Doctor's Name" />
          <input title="docNumber" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Prescribing Doctor's Phone Number" />
          <div className="save-med-btn" onClick={() => this.saveInfo()}>Save</div>
        </div>
      </div>;
  }
}

export default PrescriptionPage;
