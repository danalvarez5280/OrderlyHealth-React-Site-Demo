import React, { Component } from "react";
import MainContainer from "../../Containers/MainContainer";
import "./PrescriptionPage.css";

class PrescriptionPage extends Component {
  constructor(props) {
    super();
    this.state = {
      medicationName: '',
      dose: '',
      quantity: '',
      supply: '',
      refills: '',
      docName: '',
      docNumber: '',
      currentMeds: props.currentMeds,
      medNum: props.medNum
    }
    this.grabInfo = this.grabInfo.bind(this);
  }

  useDocInfo() {
    const currentDoc = this.state.currentMeds;
    this.setState({
      docName: currentDoc.docName,
      docNumber: currentDoc.docNumber
    })
  }

  grabInfo(e){
    this.setState({ [e.target.title]: e.target.value });
  }

  saveInfo() {
    this.props.addMed(this.state)
    this.props.saveMed(this.state);
  }

  toggleDocInfo() {
    if(this.state.docName === ''){
      return this.useDocInfo()
    }
    else{
      this.setState({
        docName: '',
        docNumber: ''
      })
    }
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
          {this.state.medNum > 0 && <div onClick={() => this.toggleDocInfo()}>
              Use Previous Doc Info?
            </div>}
          <input title="docName" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Prescribing Doctor's Name" value={this.state.docName} />
          <input title="docNumber" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Prescribing Doctor's Phone Number" value={this.state.docNumber} />
          <div className="save-med-btn" onClick={() => this.saveInfo()}>
            Save
          </div>
        </div>
      </div>;
  }
}

export default MainContainer(PrescriptionPage);


//  this.state = { medicationName: "", dose: "", quantity: "", supply: "", refills: "", docName: "", docNumber: "", medNum: props.medNum };