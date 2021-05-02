import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
// import Login from './components/Login'
// import Profile from './components/Profile'
import HomeScreen from './components/HomeScreen'

// import AuthLoadingScreen from './pages/AuthLoadingScreen'

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
// });

// export default createAppContainer(AppNavigator);


// const StackNavigator = createStackNavigator(
//   {
//      Home,
//   },
//   {
//    initialRouteName: 'Home',
//   });
// const AuthStack = createStackNavigator(
//   {
//     SignIn: Login,
//     App: StackNavigator,
//     // SignUp: RegisterUser
//   },
//   {
//     initialRouteName: 'Login',
//     headerMode: 'none',
//     header: null,
//   },);
// const RootStack = createSwitchNavigator(
//   {
//     AuthLoading: AuthLoadingScreen,
//     Auth: AuthStack,
//     App: StackNavigator,
//   },
//   {
//     initialRouteName: 'AuthLoading',
//     headerMode: 'none',
//     navigationOptions: {
//       header: null,
//     },
//    },);
// const RootStackContainer = createAppContainer(RootStack)

// export default RootStackContainer