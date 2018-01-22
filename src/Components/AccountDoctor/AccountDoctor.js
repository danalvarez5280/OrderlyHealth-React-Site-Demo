import React, { Component } from "react";

import MainContainer from '../../Containers/MainContainer';

class AccountDoctor extends Component {
  constructor(props) {
    super();
    this.state = {
      userDocFirstName: props.userDoc.userDocFirstName,
      userDocLastName: props.userDoc.userDocLastName,
      userDocAddress: props.userDoc.userDocAddress,
      userDocCity: props.userDoc.userDocCity,
      userDocState: props.userDoc.userDocState,
      userDocZipcode: props.userDoc.userDocZipcode,
      userDocPhoneNum: props.userDoc.userDocPhoneNum
    };
  }
  grabInfo(e) {
    this.setState({
      [e.target.title]: e.target.value
    });
  }

  saveInfo() {
    console.log(this.props)
    this.props.saveUserDocInfo(this.state);
  }

  render() {
    const { 
      userDocFirstName,
      userDocLastName,
      userDocAddress,
      userDocCity,
      userDocState,
      userDocZipcode,
      userDocPhoneNum 
    } = this.state;
      console.log('userDoc', this.props.userDoc)
    return <div>
        Primary Care Physician
        <div>
          <input title="userDocFirstName" value={userDocFirstName} type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Doctor's First Name" />
          <input title="userDocLastName" value={userDocLastName} type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Doctor's Last Name" />
          <input title="userDocAddress" value={userDocAddress} type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Office Address" />
          <input title="userDocCity" value={userDocCity} type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="City" />
          <input title="userDocState" value={userDocState} type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="State" />
          <input title="userDocZipcode" value={userDocZipcode} type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Zipcode" />
          <input title="userDocPhoneNum" value={userDocPhoneNum} type="text" className="full-input" onChange={e => this.grabInfo(e)} placeholder="Office Phone" />
        </div>
        <div onClick={() => this.saveInfo()}>Save</div>
      </div>;
  }
}

export default MainContainer(AccountDoctor);
