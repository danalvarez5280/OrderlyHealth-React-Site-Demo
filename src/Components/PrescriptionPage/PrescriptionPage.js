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
      storedMeds: props.medicationInfo,
      pharmacy: props.pharmacy,
      usePreviousDocInfo: false,
      currentMeds: props.currentMeds,
      medNum: props.medNum
    }
    this.grabInfo = this.grabInfo.bind(this);
  }

  useDocInfo() {
    const currentDoc = this.state.currentMeds;
    this.setState({
      docName: currentDoc.docName,
      docNumber: currentDoc.docNumber,
      usePreviousDocInfo: true
    })
  }

  grabInfo(e){
    this.setState({ [e.target.title]: e.target.value });
  }

  saveInfo() {
    this.props.addMed(this.state); //redux funtion
    this.props.saveMed(this.state);
  }

  toggleDocInfo() {
    if(this.state.docName === ''){
      return this.useDocInfo()
    }
    else{
      this.setState({
        docName: '',
        docNumber: '',
        usePreviousDocInfo: false
      })
    }
  }

  toggleText() {
    return this.state.usePreviousDocInfo ? <div>Yes</div> : <div>No</div>;

  }

  render() {
    console.log('pharmacypage?', this.state.pharmacy)
    const previousDocText = this.toggleText();
    return <div className="med-info">
        <h4>Medication Information</h4>
        <div className="medication-info">
          <input title="medicationName" type="text" className="half-input" onChange={e => this.grabInfo(e)} placeholder="Medication Name" value={this.state.medicationName} />
          <input title="dose" type="text" className="half-input" onChange={e => this.grabInfo(e)} placeholder="Dose" />
          <input title="quantity" type="text" className="half-input" onChange={e => this.grabInfo(e)} placeholder="Quantity" />
          <input title="supply" type="text" className="half-input" onChange={e => this.grabInfo(e)} placeholder="Supply" />
          <input title="refills" type="text" className="half-input" onChange={e => this.grabInfo(e)} placeholder="Refills" />
          {
            this.state.medNum > 0 && <div onClick={() => this.toggleDocInfo()}>
              Use Previous Doc Info?
              {previousDocText}
            </div>
          }
          {
            this.state.pharmacy && 
            <div>
              <input title="pharmacyName" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Pharmacy's Name" value={this.state.pharmacyName} />
              <input title="pharmacyNumber" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Pharmacy's Phone Number" value={this.state.pharamcyNumber} />
            </div>
          }
          {
            !this.state.pharmacy &&
            <div>
              <input title="docName" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Prescribing Doctor's Name" value={this.state.docName} />
              <input title="docNumber" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Prescribing Doctor's Phone Number" value={this.state.docNumber} />
            </div>
          }
          <div className="save-med-btn" onClick={() => this.saveInfo()}>
            Save
          </div>
        </div>
      </div>;
  }
}

export default MainContainer(PrescriptionPage);


//  this.state = { medicationName: "", dose: "", quantity: "", supply: "", refills: "", docName: "", docNumber: "", medNum: props.medNum };