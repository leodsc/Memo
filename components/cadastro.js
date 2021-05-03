import React from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions, ScrollView } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Cadastro = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <CadastroInput nome="Email"/>
                <CadastroInput nome="Seu nome"/>
                <CadastroInput nome="Número de telefone"/>
                <CadastroInput nome="Senha"/>
                <CadastroInput nome="Nome do contato"/>
                <CadastroInput nome="Número do contato"/>
            </View>
        </ScrollView>
    )
}

const CadastroInput = (props) => {
    return (
        <View style={styles.inputCtn}>
            <Text style={styles.texto}>{props.nome}</Text>
            <TextInput style={styles.input}></TextInput>
        </View>
    )
}

const styles =  StyleSheet.create({
    container: {
        width: width*0.8,
        height: height,
        marginHorizontal: '10%',
        marginVertical: '10%',
    },
    inputCtn: {
    },
    texto: {
        fontSize: 25,
        color: '#000',
        letterSpacing: 1,
    },
    input: {
        width: '70%',
        height: '20%',
        backgroundColor: 'white',
        borderRadius: 19,
        borderColor: 'black',
        borderWidth: 2,
    }
})