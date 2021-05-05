import { Text, View, Image, StyleSheet } from 'react-native';
import React from 'react';

// componente para carregar imagem
const WarnImg = (props) => {
  if (props.imgURL){
    return (
          <Image 
            style={{ 
              width: 64, 
              height: 64, 
              position: 'absolute', 
              left: '80%',
            }}
            source={{uri: props.imgURL}}>
          </Image>
    )
  } else {
    return <></>;
  }
}

export const WarnMsg = (props) => {
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
        <WarnImg
        imgURL={props.imgURL}></WarnImg>
      </View>
      <View styles={{
        width: props.msgBoxWidth
      }}>
        <Text style={styles.textMsg}>
          {props.msg}
        </Text>
        <Text style={styles.textMsg}>
          {props.subMsg}
        </Text>
      </View>
      {props.buttons.style}
    </View>
  )
}

const styles = StyleSheet.create({
  textMsg: {
    fontSize: 24,
    fontFamily: 'Roboto',
    color: '#12263A',
    textAlign: 'center',
    top: '5%',
    textShadowRadius: 10
  }
})