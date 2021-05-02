import React, { Component } from "react";
import { 
  AlarmeMsg, WhatsMsg, 
  AlertMsg, DeleteMsg } 
  from './warns/msgTypes';
import Login from "./components/Login";


class App extends Component {
  render() {
    return (
      <Login navigation={this.props.navigation}></Login>
    )
  }
}

export default App;