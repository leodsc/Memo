import React, { useState, useEffect }  from 'react';
import axios from "axios";

import { 
    View, Text, Image, StyleSheet, 
    ScrollView, StatusBar, Button } from 'react-native';
import { Remedio } from './remedioCtn';
import { Dimensions } from 'react-native';

var nextPage;

const GetRemedios= () =>{
    let remedios = axios.get('http://localhost:8080/api/medicine/all').then(
        (data)=>{
            remedios = data.data;
            return remedios;
        }
    ).catch((error)=>{
        console.log(error)
    })
    return remedios
}

const HomeScreen = ({navigation, route}) => {
    const [rem, setRem]= useState(null)

    useEffect(()=>{

        let auxrem=[]
        axios.get('http://localhost:8080/api/medicine/all').then(
            (data)=>{
                data.data.map((currentvalue)=>{
                    auxrem.push(currentvalue);
                })
                
            }
        ).catch((error)=>{
            console.log(error)
        })
        setRem(auxrem);

    })

    nextPage = navigation;




    return (
        <View>
        <ScrollView>
            <View style={styles.container}>

            {/* {(rem!=null)? (rem.map((remedio, index)=>{
                <Remedio nome = {remedio.name}
                    horario= {remedio.time}
                    qtdPorDia ="1"
                    status="Consumida"/>
            })):()}
             */}
                <Remedio nome="Metmorfina"
                horario="18:00"
                total="30"
                qtdPorDia="2"
                status="Consumida"/>
                <Remedio nome="Metmorfina"
                horario="18:00"
                total="20"
                qtdPorDia="1"
                status="Não consumida"/>
                <Remedio nome="Metmorfina"
                horario="18:00"/>
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