import React, { Component } from "react";
import MainContainer from "../../Containers/MainContainer";
import { Route, NavLink, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

import "./PaperRx.css";
import PrescriptionPage from '../PrescriptionPage/PrescriptionPage';
import ConfirmInfoPage from '../ConfirmInfoPage/ConfirmInfoPage';

class PaperRx extends Component {
  constructor(props) {
    super();
    this.state = {
      medications: [{}],
      orderSubmitted: false
    };
    this.addMed = this.addMed.bind(this);
    this.saveMed = this.saveMed.bind(this);
  }
  
  medsDisplay(){
    const meds = this.state.medications;
    if(meds.length > 1) {
      return meds.map((elem, index) => {
        return <PrescriptionPage key={index} medNum={index} currentMeds={this.state.medications[0]} saveMed={this.saveMed} />;
      })
    }
    return meds.map((elem, index) => {
      return <PrescriptionPage key={index} medNum={index} saveMed={this.saveMed} />;
    })
  }

  addMed(obj) {
    const meds = [...this.state.medications, obj];
    this.setState({ medications: meds });
    
  }

  saveMed(obj) {
    const meds = this.state.medications;
    meds.splice(obj.medNum, 1, obj);
    this.setState({
      medications: meds
    })
  }

  submitOrder(obj) {
    console.log('order submit check')
    this.setState({
      obj
    })
    this.props.submitOrder(this.state)
  }

  render() {
    if(this.props.orderSubmitted) {
      return <Redirect to='/' />
    };
    console.log('current state', this.props.medications)
    const medPages = this.medsDisplay();
    return <div className="med-info">
        <div className="new-order">
          <Link className="nav-confirm" to="/">
            CANCEL
          </Link>
          <h3>NEW ORDER</h3>
        </div>
        <div>{medPages}</div>
        <div className="add-meds" onClick={() => this.addMed()}>
          Add another medication
        </div>
        <ConfirmInfoPage submit={()=> this.submitOrder} orderSubmitted={this.state.orderSubmitted}/>
      </div>;
  }
}

export default MainContainer(PaperRx);
