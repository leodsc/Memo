import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, NativeModules} from 'react-native';
const axios = require('axios');

const instance = axios.create({
    baseURL: "https://memoappserver.loca.lt",
    timeout: 1000,
    header: {
        "Content-type": "application/json",
    } 
})

export const ContactButton = () => {
    return (
        <Image 
        style={{width: 50, height: 50}}
        source={{uri: 'https://pics.freeicons.io/uploads/icons/png/2365093501600677170-512.png'}}/>
    )
}

export const Contacts = (props) => {
    var [name, setName] = useState('');
    var [number, setNumber] = useState('');

    console.log("Name inside tag:", props.name);

    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <Text style={styles.bannerText}>Contato</Text>
            </View>
            <View style={styles.contatoInfo}>
                <Image
                style={{width: 50, height: 50}}
                source={{uri: "https://pics.freeicons.io/uploads/icons/png/16671574911586787867-512.png"}}/>
                <View style={{flexDirection: 'column'}}>
                    <Text style={styles.infoText}>{props.name}</Text>
                    <Text style={styles.infoText}>{props.number}</Text>
                </View>
            </View>
            <TextInput
            placeholder="Nome do novo contato"
            style={styles.input}
            onChangeText={(name) => {
                setName(name);
            }}/>
            <TextInput 
            placeholder="Número do novo contato"
            style={styles.input}
            onChangeText={(number) => {
                setNumber(number);
            }}/>
            <TouchableOpacity 
            style={styles.button}
            onPress={ () => {
                    instance.post('/add-number', JSON.stringify({
                    name: name,
                    number: number
                    })).then(() => {
                        setContactName(name);
                        setContactNumber(number);
                    }).catch(error => {
                        console.log(error);
                    })
                }
            }>
                <Text style={styles.textButton}>Trocar Contato</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 400,
        position: 'absolute',
        top: "25%",
        left: '15%',
        borderRadius: 10,
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 10,
    },
    banner: {
        width: '93%',
        height: '20%',
        backgroundColor: '#12263A',
        justifyContent: 'center',
        position: 'relative',
        marginVertical: 17,
        marginHorizontal: 10,
    },
    bannerText: {
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 2,
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#D0F68E',
        width: 120,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: 10,
        marginHorizontal: 20,
    },
    textButton: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    contatoInfo: {
        width: '100%',
        height: '10%',
        marginVertical: 0,
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    input: {
        marginVertical: 15,
        borderRadius: 5,
        height: 50,
        backgroundColor: '#ddd',
        justifyContent: 'center',
        width: '90%',
        marginHorizontal: 15,
    },
    infoText: {
        textAlign: 'center',
        fontSize: 16,
    }
})
