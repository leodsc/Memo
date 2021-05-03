// import RootStackContainer from './routes'
// import { ThemeProvider } from 'styled-components'
// // import globalStyles from './styles/globalStyles'
// // import { ThemeProvider } from 'styled-components'
// import { globalStyles } from './styles'

// import './config/ReactotronConfig'
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
// import AppNavigator from './routes';

import Login from './components/Login';
import { Index } from './components/index';

import { createAppContainer } from 'react-navigation';
// const AppContainer = createAppContainer(AppNavigator);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

const Stack = createStackNavigator();

// use this function to create a message
const createMsg = (msgType) => {
  // argument is a component that you want to create
  const msg = <View>{React.createElement(msgType)}</View>;
  getContainer(msg);
  return msg;
}




function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Index">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Index" component={Index}/>
        </Stack.Navigator>
      </NavigationContainer>
    );


export default App;

