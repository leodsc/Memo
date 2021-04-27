import React from 'react';
import { View, Button } from 'react-native';
import { AlertButtonStyle, viewCtnBtns } from './styles';

export const OkButton = (props) => {
  if (props.type == 'alert'){
    return (
      <View style={AlertButtonStyle}>
        <Button
          color='#D0F68E'
          title="OK"
        />
      </View>
    )
  } else {
    return (
      <View style={{
        width: 100
      }}>
        <Button
          color='#D0F68E'
          title="OK"
        />
      </View>
    )
  }
}

// componente dos botoes do whats
export const listContactsBtn = () => {
  return (
    <View style={viewCtnBtns}>
      <OkButton type='whats'></OkButton>
      <View style={{marginLeft: 50}}>
        <Button
          color='#EBAD6F'
          title="Lista de contatos"
        />
      </View>
    </View>
  )
}

export const AlarmeBtns = () => {
  return (
    <View style={viewCtnBtns}>
      <View style={{flex: 0.3, left: '50%'}}>
        <Button
        color="#D0F68E"
        title="SIM"/>
      </View>
      <View style={{marginLeft: 10, flex: 0.3, left: '150%'}}>
        <Button
        color="#EBAD6F"
        title="NÃO"/>
      </View>
    </View>
  )
}