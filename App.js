import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, nextPage } from './components/home';
import { NovoRemedio } from './components/criarRemedio';
import { Text, TouchableOpacity } from 'react-native';
import { Cadastro } from './components/cadastro';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Meus Remédios" component={HomeScreen}
        options={
          {
            headerStyle: {
              backgroundColor: '#12263A',
            },
            headerTintColor: '#fff',
            headerTitleStyle: 'bold',
          headerRight: () => (
            <Add/>
          ),
        }
        }/>
        <Stack.Screen name="Novo Remedio" component={NovoRemedio}
        options={styles.novo}/>
        {/* <Stack.Screen name="Cadastrar Conta" component={Cadastro} options={styles.cadastro}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Add = () => {
  return (
    <TouchableOpacity
    onPress={() => {
      nextPage.navigate('Novo Remedio')}}
    style={{
      width: 46,
      height: 46,
    }}>
      <Text style=
      {{
        color: 'white',
        fontSize: 30,
      }}>+</Text>
    </TouchableOpacity>
  )
}

// const bannerStyle = {
//   headerStyle: {
//       backgroundColor: '#12263A',
//     },
//     headerTintColor: '#fff',
//     headerTitleStyle: 'bold'
// }

const styles = {
  home: {
    headerStyle: {
      backgroundColor: '#12263A',
    },
    headerTintColor: '#fff',
    headerTitleStyle: 'bold',
  },
  novo: {
    headerStyle: {
      backgroundColor: '#12263A',
    },
    headerTintColor: '#fff',
    headerTitleStyle: 'bold',
    title: 'Novo Remédio'
  },
  cadastro: {
    headerStyle: {
      backgroundColor: '#12263A',
    },
    headerTintColor: '#fff',
    headerTitleStyle: 'bold',
    title: 'Cadastrar Conta'
  }
}