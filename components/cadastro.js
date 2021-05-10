import React, { useState }from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { isEmail, isStrongPassword } from 'validator';
const axios = require('axios');

const { width, height } = Dimensions.get('window');

export const Cadastro = ({navigation, route}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(false);

    var status;

    const instance = axios.create({
        baseURL: 'https://memoapp.loca.lt',
        timeout: 1000,
        header: {
            'Content-Type': 'application/json',
        }
    })

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Crie sua conta</Text>
                <Text style={{fontSize: 20, color: '#fff'}}>Insira os dados abaixo</Text>
                {message && <Text style={{color: '#fff', marginVertical: 10}}>{message}</Text>}
                <TextInput placeholder="Nome" style={styles.input}
                onChangeText={(name) => {
                    setName(name);
                }}/>
                <TextInput placeholder="Email" style={styles.input}
                onChangeText={(email) => {
                    setEmail(email);
                }}/>
                <TextInput placeholder="Senha" secureTextEntry={true} style={styles.input}
                onChangeText={(password) => {
                    setPassword(password);
                }}/>
                <TouchableOpacity style={styles.button} 
                onPress={() => {
                    if (name.length > 3 && isEmail(email) && isStrongPassword(password)) {
                        instance.post('/signup', JSON.stringify({
                            username: name,
                            password: password,
                            email: email,
                        })).then((resolve) => {
                            status = resolve.status;
                            console.log(status);
                        }).catch((error) => {
                            console.log(error);
                        })
                    } else if (name.length <= 3){
                        setMessage("Nome tem que ter mais de 3 caracteres.");
                    } else if (!isEmail(email)) {
                        setMessage("Email não é válido.");
                    } else {
                        setMessage(`Senha deve ter no mínimo 8 caracteres com:\n 1 letra minúscula\n 1 letra maiúscula\n 1 número\n 1 símbolo`)
                    }
                }}>
                    <Text style={styles.buttonText}>Criar Conta</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles =  StyleSheet.create({
    container: {
        width: width,
        height: height,
        alignItems: 'center',
        backgroundColor: '#12263A',
        justifyContent: 'center',
    },
    input: {
        width: 250,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 5,
        marginVertical: 4,
    },
    button: {
        width: 145,
        height: 40,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: '#D0F68E',
        marginTop: 20,
    },
    buttonText: {
        color: '#12263A',
        fontSize: 14,
        fontWeight: 'bold',
    },
    title: {
        color: '#fff',
        fontSize: 23,
        fontWeight: 'bold',
    }
})