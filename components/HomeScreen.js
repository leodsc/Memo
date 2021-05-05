import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class HomeScreen extends Component {


  render() {
    return (
      <View style={{ flex: 1}}>
        <Text>Home Screen</Text>
        {/* <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('Login')}
        /> */}
      </View>
    )
  }
}


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  }
});