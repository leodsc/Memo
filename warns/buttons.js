import React, { useState, ReactDOM } from 'react';
import { View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export const styles = StyleSheet.create(
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

let containerPointer;
export const getContainer = (container) => {
  containerPointer = container;
}

// componente que cria botoes de mensagens de aviso do app
const WarnButton = (props) => {
  const [toggleWindow, setToggleWindow] = useState(false);  

  const warnTypes = {
    alarme: {
      "confirm": function() {
        console.log('confirm alarme');
      },
      "decline": function() {
        console.log('decline alarme');
      }
    },
    whats: {
      "confirm": function() {
        console.log('confirm whats');
      },
      "decline": function() {
        console.log('decline whats');
      }
    },
    alert: {
      "confirm": function() {
        console.log('confirm alert');
      }
    },
    delete: {
      "confirm": function() {
        console.log('confirm delete');
      },
      "decline": function(){
        console.log('decline delete');
      }
    }
  }
  
  const toggle = () => {
    setToggleWindow(() => {
      if (!toggleWindow){
        const changeState = warnTypes[props.type][props.status];
        changeState();
        ReactDOM.unmountComponentAtNode(containerPointer);
        toggleWindow = !toggleWindow;
      }
      }
    );
  }

  return (
    <View style={{position: 'relative', top: props.top, left: props.left}}>
      <TouchableOpacity 
      style={props.styleType}
      onPress={toggle}>
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
      styleType={styles.confirm}
      status="confirm"
      type="alarme">
      </WarnButton>
      <WarnButton
      text="NÃO"
      left="55%"
      top="-3%"
      styleType={styles.decline}
      status="decline"
      type="alarme">
      </WarnButton>
    </>
  )
}

// componente dos botoes do whats
export const WhatsBtns = () => {
  []
  return (
    <>
      <WarnButton
      top='15%'
      left='15%'
      text="OK"
      status="confirm"
      type="whats"
      styleType={styles.confirm}>
      </WarnButton>
      <WarnButton
      left="55%"
      top="-3%"
      text="Contatos"
      status="decline"
      type="whats"
      styleType={styles.decline}>
      </WarnButton>
    </>
  )
}

export const AlertBtns = (props) => {
  return (
    <>
      <WarnButton
      top='0%'
      left='35%'
      text='OK'
      status="confirm"
      type="alert"
      styleType={styles.confirm}
      container={props.container}/>
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
      status='confirm'
      type='delete'
      styleType={styles.confirm}></WarnButton>
      <WarnButton
      top='-13%'
      left='60%'
      status='decline'
      type='delete'
      text='Cancelar'
      styleType={styles.decline}></WarnButton>
    </>
  )
}