import React, { Component } from "react";

import "./ConfirmInfoPage.css";

class ConfirmInfoPage extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      pricing: '',
      gender: ''

    };
    this.grabInfo = this.grabInfo.bind(this);
  }
  grabInfo(e) {
    this.setState({ [e.target.title]: e.target.value });
  }

  saveInfo() {
    this.props.saveMed(this.state);
  }

  toggleGender(str, e) {
    // e.target.classList.toggle("selected");
    this.setState({
      gender: str
    })
  }

  togglePricing(e) {
    console.log(e.target.classList.toggle('slected'))
    e.target.classList.toggle('selected')
    this.setState({
      pricing: e.target.title
    })
  }

  toggleTextAlerts(e) {
    e.target.classList.toggle("text-alerts");
    this.state.textAlerts ? 
            this.setState({textAlerts: false }) : this.setState({ textAlerts: true }); 
  }



  render() {
    console.log('confirm page state:', this.state)
    const femaleSelect = this.state.gender === 'female' ? 'selected' : 'not-selected';
    const maleSelect = this.state.gender === 'male' ? 'selected' : 'not-selected';
    const textAlertsText = this.state.textAlerts ? 'Yes' : 'No';
    // const textAlertsClass = this.state.textAlerts ? 'text-alerts' : 'no-text-alerts';
    return <div className="all-info">
        <h4>Confirm Personal Information</h4>
        <div className="personal-info">
          <input title="name" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="First Name, Last Name" value={this.state.medicationName} />
          <input title="dob" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Date of Birth" />
          <div>Gender</div>
          <div onClick={(e) => this.toggleGender("female", e)} className={femaleSelect}>Female</div>
          <div onClick={(e) => this.toggleGender('male', e)} className={maleSelect}>Male</div>
          <input title="email" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="email" />
          <input title="mobileNum" type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Mobile Number" />
          <div>Receive Text Alerts About Your Order?</div>
          <div className='no-text-alerts' onClick={(e)=> this.toggleTextAlerts(e)}>{textAlertsText}</div>
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
        Please Confirm the Pricing you are looking for for these medications.
        <div>
          <div className='not-selected' title="cashPrice" onClick={e => this.togglePricing(e)}>
            Find Me The Cash Price
          </div>
          <div className='not-selected' title="insurancePrice" onClick={e => this.togglePricing(e)}>
            Find Me The Insurance Covered Price
          </div>
          <div className='not-selected' title="bothPrices" onClick={e => this.togglePricing(e)}>
            Find Me Both Prices
          </div>
        </div>
        <div>Submit Order</div>
      </div>;
  }
}

export default ConfirmInfoPage;
