import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create(
  {
    confirm: {
      borderRadius: 10,
      height: 50,
      width: '30%',
      backgroundColor: '#D0F68E'
    },
    decline: {
      borderRadius: 10,
      height: 50,
      backgroundColor: '#EBAD6F',
      width: '30%'
    },
    text: {
      fontSize: 20,
      color: '#12263A',
      textAlign: 'center',
      fontWeight: 'bold',
      top: '25%'
    }
  }
)

// componente que cria botoes de mensagens de aviso do app
const WarnButton = (props) => {
  return (
    <View style={{position: 'relative', top: props.top, left: props.left}}>
      <TouchableOpacity 
      style={props.styleType}
      onPress={console.log('pressed')}>
        <Text style={styles.text}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

// componente dos botoes do alarme
export const AlarmeBtns = () => {
  return (
    <>
      <WarnButton
      top='15%'
      left='15%'
      text="SIM"
      styleType={styles.confirm}>
      </WarnButton>
      <WarnButton
      text="NÃO"
      left="55%"
      top="-3%"
      styleType={styles.decline}>
      </WarnButton>
    </>
  )
}

// componente dos botoes do whats
export const WhatsBtns = () => {
  return (
    <>
      <WarnButton
      top='15%'
      left='15%'
      text="OK"
      styleType={styles.confirm}>
      </WarnButton>
      <WarnButton
      left="55%"
      top="-3%"
      text="Contatos"
      styleType={styles.decline}>
      </WarnButton>
    </>
  )
}

export const AlertBtns = () => {
  return (
    <>
      <WarnButton
      top='0%'
      left='35%'
      text='OK'
      styleType={styles.confirm}></WarnButton>
    </>
  )
}

export const DeleteBtns = () => {
  return (
    <>
      <WarnButton
      top='5%'
      left='15%'
      text='Excluir'
      styleType={styles.confirm}></WarnButton>
      <WarnButton
      top='-13%'
      left='60%'
      text='Cancelar'
      styleType={styles.decline}></WarnButton>
    </>
  )
}