import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

class App extends Component {
  render() {
    // const alertMsg = createMsg(AlertMsg);
    return (
        <View style={styles.container}>
            <Image source={require('./images/Group.png')} />
            <Image source={require('./images/memory.png')} />
        </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#12263A',
		alignItems: 'center',
		justifyContent: 'center'
	}
});