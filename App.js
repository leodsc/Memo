// import RootStackContainer from './routes'
// import { ThemeProvider } from 'styled-components'
// // import globalStyles from './styles/globalStyles'
// // import { ThemeProvider } from 'styled-components'
// import { globalStyles } from './styles'

// import './config/ReactotronConfig'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './components/Profile';
import HomeScreen from './components/HomeScreen';
// import AppNavigator from './routes';

import Login from './components/Login';
import { createAppContainer } from 'react-navigation';
// const AppContainer = createAppContainer(AppNavigator);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

const Stack = createStackNavigator();





function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default App;


// class App extends Component {
//   render() {
//     return (
//       <Login navigation={this.props.navigation}></Login>
//     )
//   }
// }

// export default App;