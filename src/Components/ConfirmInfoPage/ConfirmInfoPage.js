import React, { Component } from "react";

class ConfirmInfoPage extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',

    };
    this.grabInfo = this.grabInfo.bind(this);
  }
  grabInfo(e) {
    this.setState({ [e.target.title]: e.target.value });
  }

  saveInfo() {
    this.props.saveMed(this.state);
  }
  render() {
    return <div className="all-info">
      <h4>Confirm Personal Information</h4>
      <div className="personal-info">
        <input title="name" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="First Name, Last Name" value={this.state.medicationName} />
        <input title="dob" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Date of Birth" />
        <div>Gender</div>
        <div>Female</div>
        <div>Male</div>
        <input title="email" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="email" />
        <input title="mobileNum" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Mobile Number" />
        <div>Receive Text Alerts About Your Order?</div>
        <div>yes/no</div>
      </div>

      <div>
        Mailing Address
        <div className="mail-info">
          <input title="address" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Address" />
          <input title="city" type="text" className="half-input" onChange={e => this.grabInfo(e)} placeholder="City" />
          <input title="state" type="text" className="half-input" onChange={e => this.grabInfo(e)} placeholder="State" />
          <input title="county" type="text" className="half-input" onChange={e => this.grabInfo(e)} placeholder="County" />
          <input title="zipcode" type="text" className="half-input" onChange={e => this.grabInfo(e)} placeholder="Zipcode" />
        </div>
      </div>
      Insurance Info
        <div className="insurance-info">
          <input title="provider" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Insurance Provier" />
          <input title="insuranceId" type="text" className="half-input" onChange={e => this.grabInfo(e)} placeholder="Insurance Id Number" />
          <input title="rxGroupNumber" type="text" className="half-input" onChange={e => this.grabInfo(e)} placeholder="Rx Group Number" />
          <input title="rxPcn" type="text" className="half-input" onChange={e => this.grabInfo(e)} placeholder="Rx PCN" />
          <input title="rxBinNumber" type="text" className="half-input" onChange={e => this.grabInfo(e)} placeholder="Rx Bin Number" />
        </div>
    </div>
  }
}

export default ConfirmInfoPage;
