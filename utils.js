
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationActions } from 'react-navigation'

export async function getUser() {
  try {
    return await AsyncStorage.getItem('@user');
  } catch (e) {
    throw e;
  }
}

export async function storeUser(userToken) {
  try {
    return await AsyncStorage.setItem('@user', JSON.stringify(userToken));
  } catch (e) {
    throw e;
  }
}

export async function deleteUser() {
  try {
    return await AsyncStorage.removeItem('@user');
  } catch (e) {
    throw e;
  }
}

// NavigationService

let navigator;

export function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

export function navigate(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}