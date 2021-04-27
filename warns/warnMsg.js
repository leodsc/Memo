import { Text, View, Image } from 'react-native';
import { AlarmeBtns, OkButton, listContactsBtn } from './buttons';
import { textMsgStyle } from './styles';
import React from 'react';

// componente para carregar imagem do whatsapp caso a mensagem seja de AVISO
const ImgHeader = (props) => {
  if (props.img == String(true)){
    return (
          <Image 
            style={{ width: 64, height: 64, position: 'absolute', left: '80%'}}
            source={{uri: 'https://files.softicons.com/download/android-icons/flat-icons-by-martz90/png/64x64/whatsapp.png'}}>
          </Image>
    )
  } else {
    return <></>;
  }
}

export const WarnMsg = (props) => {
  var buttons;
  if (props.title == "ALERTA"){
    buttons = React.createElement(OkButton, {type: 'alert'});
  } else if (props.title == "AVISO"){
    buttons = React.createElement(listContactsBtn, {type: 'whats'});
  } else if (props.title == "ALARME") {
    buttons = React.createElement(AlarmeBtns, {type: 'alarme'});
  }


  return (
    <View style={{
      width: 370,
      height: 277,
      borderRadius: 5,
      top: '25%',
      margin: 20,
      backgroundColor: '#FFFFFF',
      position: 'absolute',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,
      elevation: 14
    }}>
      <View style={{
        width: '100%',
        height: '25%',
        backgroundColor: props.color,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14
      }}>
        <Text style={{
          fontSize: 32,
          fontFamily: 'Roboto',
          color: 'white',
          textAlign: 'center',
          top: '15%'
        }}>
          {props.title}
        </Text>
        <ImgHeader img={props.img}></ImgHeader>
      </View>

      <Text style={textMsgStyle}>
        {props.msg}
      </Text>
      <Text style={textMsgStyle}>
        {props.subMsg}
      </Text>
      {buttons}
    </View>
  )
}