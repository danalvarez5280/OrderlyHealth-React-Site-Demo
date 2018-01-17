import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Medication from './Components/Medication/Medication';
import ChatPage from './Components/ChatPage/ChatPage';
import PaperRx from './Components/PaperRx/PaperRx';
import { Route, NavLink, Link } from "react-router-dom";

class App extends Component {
  render() {
    return <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/medication" component={Medication} />
        <Route exact path="/medication/paperrx" component={PaperRx} />
        <Route exact path="/chat" component={ChatPage} />

      </div>;
  }
}

export default App;
