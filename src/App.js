import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Medication from './Components/Medication/Medication';
import ChatPage from './Components/ChatPage/ChatPage';
import PharmacyPage from './Components/PharmacyPage/PharmacyPage';
import ConfirmInfoPage from './Components/ConfirmInfoPage/ConfirmInfoPage';
import Transfer from './Components/Transfer/Transfer';
import Reorder from './Components/Reorder/Reorder';
import PaperRx from './Components/PaperRx/PaperRx';
import { Route, NavLink, Link } from "react-router-dom";

class App extends Component {
  render() {
    return <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/medication" component={Medication} />
        <Route exact path="/medication/paperrx" component={PaperRx} />
        <Route exact path="/medication/pharmacy" component={Transfer} />
        <Route exact path="/medication/reorder" component={Reorder} />
        <Route exact path="/medication/confirmation" component={ConfirmInfoPage} />
        <Route exact path="/chat" component={ChatPage} />
      </div>;
  }
}

export default App;
