import React, { Component } from "react";
import MainContainer from '../../Containers/MainContainer';

class AccountInsurance extends Component {
  constructor(props) {
    super();
    this.state = { 
      userInsurance: props.userInsurance.userInsurance,
      userInsuranceId: props.userInsurance.userInsuranceId,
      userRxGroupNum: props.userInsurance.userRxGroupNum,
      userRxPCN: props.userInsurance.userRxPCN,
      userRxBinNum: props.userInsurance.userRxBinNum,
      userHouseholdSize: props.userInsurance.userHouseholdSize,
      userAnnualHouseIncome: props.userInsurance.userAnnualHouseIncome,
    };
  }
  grabInfo(e) {
    this.setState({
      [e.target.title]: e.target.value
    });
  }

  saveInfo() {
    console.log(this.props);
    this.props.saveUserInsurance(this.state);
  }

  render() {
    const { 
      userInsurance,
      userInsuranceId,
      userAnnualHouseIncome,
      userHouseholdSize,
      userRxBinNum,
      userRxPCN,
      userRxGroupNum,
     } = this.state;
    console.log('user insurance', this.props.userInsurance);
    return (
      <div>
        Insurance Information
        <div>
          <input
            title="userInsurance"
            value={userInsurance}
            type="text"
            className="full-input"
            onChange={e => this.grabInfo(e)}
            placeholder="Insurer"
          />
          <input
            title="userInsuranceId"
            value={userInsuranceId}
            type="text"
            className="full-input"
            onChange={e => this.grabInfo(e)}
            placeholder="Insurance ID Number"
          />
          <input
            title="userRxGroupNum"
            value={userRxGroupNum}
            type="text"
            className="full-input"
            onChange={e => this.grabInfo(e)}
            placeholder="RX Group Number"
          />
          <input
            title="userRxPCN"
            value={userRxPCN}
            type="text"
            className="full-input"
            onChange={e => this.grabInfo(e)}
            placeholder="RX PCN"
          />
          <input
            title="userRxBinNum"
            value={userRxBinNum}
            type="text"
            className="full-input"
            onChange={e => this.grabInfo(e)}
            placeholder="RX Bin Number"
          />
        </div>
        Household Information<div>
          <input
            title="userHouseholdSize"
            value={userHouseholdSize}
            type="text"
            className="full-input"
            onChange={e => this.grabInfo(e)}
            placeholder="Household Size"
          />
          <input
            title="userAnnualHouseIncome"
            value={userAnnualHouseIncome}
            type="text"
            className="full-input"
            onChange={e => this.grabInfo(e)}
            placeholder="Annual Household Income"
          />
        </div>
        <div onClick={() => this.saveInfo()}>Save</div>
      </div>
    );
  }
}

export default MainContainer(AccountInsurance);
