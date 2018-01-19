import React, { Component } from "react";

class AccountInsurance extends Component {
  constructor() {
    super();
    this.state = {};
  }
  grabInfo(e) {
    this.setState({
      [e.target.title]: e.target.value
    });
  }

  render() {
    return (
      <div>
        Insurance Information
        <div>
          <input
            title="userInsurance"
            type="text"
            className="full-input"
            onChange={e => this.grabInfo(e)}
            placeholder="Insurer"
          />
          <input
            title="userInsurnceId"
            type="text"
            className="full-input"
            onChange={e => this.grabInfo(e)}
            placeholder="Insurance ID Number"
          />
          <input
            title="userRxGroupNum"
            type="text"
            className="full-input"
            onChange={e => this.grabInfo(e)}
            placeholder="RX Group Number"
          />
          <input
            title="userRxPCN"
            type="text"
            className="full-input"
            onChange={e => this.grabInfo(e)}
            placeholder="RX PCN"
          />
          <input
            title="userRxBinNum"
            type="text"
            className="full-input"
            onChange={e => this.grabInfo(e)}
            placeholder="RX Bin Number"
          />
        </div>
        Household Information<div>
          <input
            title="userHouseholdSize"
            type="text"
            className="full-input"
            onChange={e => this.grabInfo(e)}
            placeholder="Household Size"
          />
          <input
            title="userAnnualHouseIncome"
            type="text"
            className="full-input"
            onChange={e => this.grabInfo(e)}
            placeholder="Annual Household Income"
          />
        </div>
        <div>Save</div>
      </div>
    );
  }
}

export default AccountInsurance;
