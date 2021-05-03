import React, { useState } from "react";
// import AuthService from "../services/auth.service";
import { StackActions, NavigationActions } from 'react-navigation'
import { StatusBar, ActivityIndicator} from 'react-native'
import PropTypes from 'prop-types'
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';



import {
  Container,
  Title,
  TextInformation,
  Error,
  Form,
  Input,
  Button,
  ButtonText,
} from './styles'

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default function Login(props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const api_url= "http://localhost:8080/api/auth/";


  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  async function saveUser(user) {
    await AsyncStorage.setItem('@user', JSON.stringify(user))
  }

  const handleLogin = async (e) => {
    // e.preventDefault();

    setLoading(true);

    // try{
    //   AuthService.login(username, password).then(
    //     ()=>{
    //       const resetActions= StackActions.reset({
    //         index:0,
    //         actions:[NavigationActions.navigate({routeName:'Profile'})]
    //       })
    //       setLoading(false)
    //       setMessage("funcionou");
    //       props.navigation.dispatch(resetActions)
    //     }
    //   )    


    // } catch(e){
    //     console.log(JSON.stringify(e));
    //     setLoading(false)
    //     setMessage("Usuário nao existe");
    // }

    try {

      const credentials = {
        username: username,
        password: password
      }

      const response = await axios.post(api_url+'signin', credentials)

      const user = response.data

      await saveUser(user)

      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })],
      })

      setLoading(false)
      console.log("teste");
      console.log(JSON.stringify(response.data));
      props.navigation.dispatch(resetAction)
    } catch (err) {
      console.log(err)

      setLoading(false)
      setMessage('Usuário não existe')
    }

  };

  return (     
      <Container>
        <StatusBar barStyle="light-content" />
          <Title>Bem-vindo</Title>
          <TextInformation>
          Para continuar, precisamos que você informe seu usuário
          </TextInformation>

            {!!message && <Error>{message}</Error>}

      <Form>
        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu usuário"
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          value={username}
          onChangeText={username => setUsername(username)}
        />

        <Input
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite sua senha"
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          secureTextEntry={true}
          value={password}
          onChangeText={password => setPassword(password)}
        />

        <Button onPress={handleLogin}>
          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <ButtonText>Prosseguir</ButtonText>
          )}
        </Button>
      </Form>
    </Container>

      
  );

  
};


Login.navigationOptions = () => {
  return {
    header: null,
  }
}

Login.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
}

