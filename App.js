import React, { Component } from 'react';
import { 
  AlarmeMsg, WhatsMsg, 
  AlertMsg, DeleteMsg } 
  from './warns/msgTypes';

class App extends Component {
  render() {
    return (
      <WhatsMsg></WhatsMsg>
    )
  }
}

export default App;