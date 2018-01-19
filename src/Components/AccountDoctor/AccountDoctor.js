import React, { Component } from "react";

import MainContainer from '../../Containers/MainContainer';

class AccountDoctor extends Component {
  constructor() {
    super();
    this.state = {};
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
      console.log('userDoc', this.props.userDoc)
    return (
      <div>
        Primary Care Physician
        <div>
          <input
            title="userDocFirstName"
            type="text"
            className="full-input"
            onChange={e => this.grabInfo(e)}
            placeholder="Doctor's First Name"
          />
          <input
            title="userDocLastName"
            type="text"
            className="full-input"
            onChange={e => this.grabInfo(e)}
            placeholder="Doctor's Last Name"
          />
          <input
            title="userDocAddress"
            type="text"
            className="full-input"
            onChange={e => this.grabInfo(e)}
            placeholder="Office Address"
          />
          <input
            title="userDocCity"
            type="text"
            className="full-input"
            onChange={e => this.grabInfo(e)}
            placeholder="City"
          />
          <input
            title="userDocState"
            type="text"
            className="full-input"
            onChange={e => this.grabInfo(e)}
            placeholder="State"
          />
          <input
            title="userDocZipcode"
            type="text"
            className="full-input"
            onChange={e => this.grabInfo(e)}
            placeholder="Zipcode"
          />
          <input
            title="userDocPhoneNum"
            type="text"
            className="full-input"
            onChange={e => this.grabInfo(e)}
            placeholder="Office Phone"
          />
        </div>
        <div onClick={() => this.saveInfo()}>Save</div>
      </div>
    );
  }
}

export default MainContainer(AccountDoctor);
