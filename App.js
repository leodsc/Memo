import React from 'react';
import { Text, View, Button, Image, Alert } from 'react-native';

  // componentes do react retornam react elements
  // que por sua vez são determinados pela tags JSX, como View ou Text
  // para usar uma tag do JSX ela precisa estar no escopo, assim como o React
  // já que o syntathic sugar usado nessas tags depende do método createElement do React

const WarnMsg = (props) => {
  return (
    <View style={{
      width: 370,
      height: 277,
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 5,
      top: '25%',
      margin: 20,
      backgroundColor: '#DDDDDD'
    }}>
      <View style={{
        width: '100%',
        height: '25%',
        backgroundColor: props.color,
        borderBottomColor: 'black',
        borderBottomWidth: 3
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

        <Image 
        style={{ width: 64, height: 64, position: 'absolute', left: '80%'}}
        source={{uri: 'https://files.softicons.com/download/android-icons/flat-icons-by-martz90/png/64x64/whatsapp.png'}}>
        </Image>
      </View>
      <Text style={{
        fontSize: 24,
        fontFamily: 'Roboto',
        color: '#12263A',
        textAlign: 'center',
        top: '20%'
      }}>
        {props.msg}
      </Text>
      <View style={{
        top: '40%',
        width: 122,
        left: '15%'
      }}>
      <Button 
      color='#D0F68E'
      title="OK"/>
      </View>
      <View style={{
        top: '25%',
        width: 122,
        left: '60%'
      }}>
        <Button
          color='#EBAD6F'
          title='Lista de contatos'
        />
      </View>
    </View>
  )
}

const WhatsMsg = () => {
  return (
    <>
      <WarnMsg
        color="#2AB200"
        title="AVISO"
        msg="Mensagem foi enviada para {nomeContato}!"
      >
      </WarnMsg>
    </>
  )
}

const AlertMsg = () => {
  return (
    <>
      <WarnMsg
        color="red"
        title="ALERTA"
        msg="Quantidade de {nomeRemedio} está abaixo de 20%"
      >
      </WarnMsg>
    </>
  )
}

export default AlertMsg;