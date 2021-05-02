import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Login from './components/Login'
import Profile from './components/Profile'
import Home from './components/Home'

import AuthLoadingScreen from './pages/AuthLoadingScreen'


const StackNavigator = createStackNavigator(
  {
     Home,
  },
  {
   initialRouteName: 'Home',
  });
const AuthStack = createStackNavigator(
  {
    SignIn: Login,
    App: StackNavigator,
    // SignUp: RegisterUser
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    header: null,
  },);
const RootStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    App: StackNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
    headerMode: 'none',
    navigationOptions: {
      header: null,
    },
   },);
const RootStackContainer = createAppContainer(RootStack)

export default RootStackContainer