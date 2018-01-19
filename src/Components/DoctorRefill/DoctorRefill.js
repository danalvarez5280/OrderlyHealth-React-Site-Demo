import React, { Component } from "react";
import MainContainer from "../../Containers/MainContainer";
import { Route, NavLink, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

import './DoctorRefill.css';


class DoctorRefill extends Component {
  constructor(props) {
    super();
    this.state = {
        tranfered: false
    };
  }

  grabInfo(e) {
    this.setState({ [e.target.title]: e.target.value });
  }

  savePharmInfo() {
    this.setState({
        pharmInfo: [this.state]
    })
  }

  emailParmInfo() {
      alert('You will be sent an email confirming your prescription transfer')
      this.setState({
          transfered: true
      })
  }

  displayPharmacy() {
    const pharmInfo = this.state.pharmInfo;
    
    console.log('pharmacyInfo', pharmInfo);
    if(pharmInfo !== undefined) {
        const pharmacies = pharmInfo.map((elem, index) => {
            return <div>
              <p>{elem.pharmacyName}</p>
              <p>{elem.pharmacyAddress}</p>
              <p>{elem.pharmacyPhoneNumber}</p>
              <p>{elem.pharmacyFaxNumber}</p>
              <div onClick={() => this.emailParmInfo()}>Email this info</div>
            </div>;
        })
        return pharmacies;
    }
  }

  render() {
      if(this.state.transfered) {
      return <Redirect to='/' />
    };

      console.log('state on refill page', this.state)
      const pharmacy = this.displayPharmacy()
    return (
      <div>
        <div className="doc-fill">
          <Link className="nav-confirm" to="/">
            CANCEL
          </Link>
          <h3>Doctor Fill</h3>
        </div>
        <div>
          <div className="pharmacy-info">
            <input
              title="pharmacyName"
              type="text"
              className="full-input"
              onChange={e => this.grabInfo(e)}
              placeholder="Pharmacy"
            />
            <input
              title="pharmacyAddress"
              type="text"
              className="half-input"
              onChange={e => this.grabInfo(e)}
              placeholder="Pharmacy Address"
            />
            <input
              title="pharmacyPhoneNumber"
              type="text"
              className="half-input"
              onChange={e => this.grabInfo(e)}
              placeholder="Pharmacy Phone Number"
            />
            <input
              title="pharmacyFaxNumber"
              type="text"
              className="half-input"
              onChange={e => this.grabInfo(e)}
              placeholder="Pharmacy Fax Number"
            />
          </div>
        </div>
        <div className="doctor-fill-save" onClick={() => this.savePharmInfo()}>SAVE</div>
        {pharmacy}
      </div>
    );
  }
}

export default MainContainer(DoctorRefill);
