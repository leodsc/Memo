import React, { useState, useEffect }  from 'react';
import axios from "axios";
import AuthService from "../services/auth.service"

import { 
    View, Text, Image, StyleSheet, 
    ScrollView, StatusBar, Button } from 'react-native';
import { Remedio } from './remedioCtn';
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

var nextPage;

const HomeScreen = ({navigation, route}) => {
    // const { remedios, loading} = tryRemedies();
    const[remedios, setRemedios] = useState([])
    const[user, setUser]= useState({})
    // console.log(cUser)

    useEffect(()=>{
        axios.get('https://testingtwilioapi232323.loca.lt/api/medicine/all').then(res =>{
            // console.log(res.data)
            setRemedios(res.data)
        }).catch((error)=>{
            console.log(error)
        })

    })

    useEffect(()=>{
        async function guser(){
            const user = await AsyncStorage.getItem("@user")
            console.log(user);
            setUser(user);

        }

        guser();
    },[setUser])
    // console.log(remedios)

    nextPage = navigation;




    return (
        <View>
        <ScrollView>
            <View style={styles.container}>
            <Remedio nome="Metilanima"
            horario="18:00"
            qtdPorDia="2"
            total="30"
            status="Consumir"/>
            {/* { remedios.map((remedio, index)=>{
                // console.log({remedios   });
                // console.log(remedio.name);
                // if(user.id == remedio.userId){
                return (<Remedio nome = {remedio.name}
                    key={remedio.id}
                    horario= {remedio.time}
                    qtdPorDia ={remedio.quantity}
                    total={remedio.total}
                    status="Consumir"/>)
                // }
                // return(<p>Nao há nada para ver, crie um alarme</p>)
            })} */}
            
            </View>
        </ScrollView>
        </View>
    )
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7EFEC',
        alignItems: 'center',
        top: -(height-height*0.95),
    },
    banner: {
        width: '100%',
        height: '8%',
        backgroundColor: '#12263A'
    },
    bannerState: {
        position: 'relative',
        left: '80%',
        top: '-15%',
        width: 46,
        height: 45
    }
})

export { HomeScreen, nextPage }