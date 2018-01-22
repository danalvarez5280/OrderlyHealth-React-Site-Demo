import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Account from './Components/Account/Account';
import AccountProfile from './Components/AccountProfile/AccountProfile';
import AccountMedical from './Components/AccountMedical/AccountMedical';
import AccountInsurance from './Components/AccountInsurance/AccountInsurance';
import AccountDoctor from './Components/AccountDoctor/AccountDoctor';
import Medication from './Components/Medication/Medication';
import MyMap from './Components/Map/MyMap';
import DoctorRefill from './Components/DoctorRefill/DoctorRefill';
import ChatPage from './Components/ChatPage/ChatPage';
import PharmacyPage from './Components/PharmacyPage/PharmacyPage';
import ConfirmInfoPage from './Components/ConfirmInfoPage/ConfirmInfoPage';
import OrderReceivedPage from './Components/OrderReceivedPage/OrderReceivedPage';
import Transfer from './Components/Transfer/Transfer';
import Reorder from './Components/Reorder/Reorder';
import PaperRx from './Components/PaperRx/PaperRx';
import { Route, NavLink, Link } from "react-router-dom";

class App extends Component {
  render() {
    return <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/medication" component={Medication} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/account/profile" component={AccountProfile} />
        <Route exact path="/account/medical" component={AccountMedical} />
        <Route exact path="/account/insurance" component={AccountInsurance} />
        <Route exact path="/account/doctor" component={AccountDoctor} />
        <Route exact path="/doctors" component={MyMap} />
        <Route exact path="/medication/paperrx" component={PaperRx} />
        <Route exact path="/medication/pharmacy" component={Transfer} />
        <Route exact path="/medication/doctorrx" component={DoctorRefill} />
        <Route exact path="/medication/reorder" component={Reorder} />
        <Route exact path="/medication/confirmation" component={ConfirmInfoPage} />
        <Route exact path="/medication/order-received" component={OrderReceivedPage} />
        <Route exact path="/chat" component={ChatPage} />
      </div>;
  }
}

export default App;
