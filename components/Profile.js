import React, { useEffect }  from "react";
import AuthService from "../services/auth.service";
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Profile = (props) => {
  const currentUser = AuthService.getCurrentUser();

  // useEffect(() => {
  //   async function handleUserNextScreen() {
  //     const userToken = await AsyncStorage.getItem('@user');

  //     props.navigation.navigate(userToken ? 'App' : 'Auth');
  //   }

  //   handleUserNextScreen();
  // }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>About Screen</Text>
  </View>
    // <div className="container">
    //   <header className="jumbotron">
    //     <h3>
    //       <strong>{currentUser.username}</strong> Profile
    //     </h3>
    //   </header>
    //   <p>
    //     <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
    //     {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
    //   </p>
    //   <p>
    //     <strong>Id:</strong> {currentUser.id}
    //   </p>
    //   <p>
    //     <strong>Email:</strong> {currentUser.email}
    //   </p>
    //   <strong>Authorities:</strong>
    //   <ul>
    //     {currentUser.roles &&
    //       currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
    //   </ul>
    // </div>
  );
};

Profile.navigationOptions = () => {
  return {
    header: null,
  };
};

export default Profile;
