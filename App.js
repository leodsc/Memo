import React, { Component } from 'react';
import { View } from 'react-native';
import { 
  AlarmeMsg, WhatsMsg, 
  AlertMsg, DeleteMsg } 
  from './warns/msgTypes';
import { getContainer } from './warns/buttons';
import ContactsWindow from './whats/addContact';
import { Index } from './components/index';

// use this function to create a message
const createMsg = (msgType) => {
  // argument is a component that you want to create
  const msg = <View>{React.createElement(msgType)}</View>;
  getContainer(msg);
  return msg;
}

class App extends Component {
  render() {
    // const alertMsg = createMsg(AlertMsg);
    return (
      <Index
      textStyle={
        {fontSize: 20, position: 'relative', fontFamily: 'Roboto',
        color: 'white', top: '25%', textAlign: 'center'}}
      text={"Meus Remédios"}
      bannerState={{uri: 'https://i.ibb.co/7CPTDR0/add.png'}}/>
    )
  }
}

export default App;