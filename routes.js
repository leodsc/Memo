import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/login';
import Logged from './pages/logged';

export const SignedOutRoutes = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Entrar"
    }
  },
});

export const SignedInRoutes = createStackNavigator({
  Logged: {
    screen: Logged,
    navigationOptions: {
      title: "Perfil"
    }
  },
});