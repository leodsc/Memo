import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export const editarRemedio = () => {
    return (
        <View style={styles.container}>
            <Field title="Nome do remédio:" input="Digite aqui o nome do remédio"/>
            <Field title="Quantidade de pílulas: " input="Digite aqui o nome do remédio"/>
            <Field title="Horário Inicial: " input="Digite aqui o nome do remédio"/>
            <Field title="Tomar de quantas em quantas horas?" input="Digite aqui o nome do remédio"/> 
        </View>
    )
}

const Field = (props) => {
    return (
        <View style={styles.field}>
            <Text style={{color: '#12263A', fontSize: 20, fontWeight: 'bold'}}>{props.title}</Text>
            <TextInput style={{color: '#ACACAC'}}>{props.input}</TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 370,
        height: 384,
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginTop: 80,
        borderColor: 'black',
        borderWidth: 3,
    },
    field: {
        backgroundColor: '#E6E6E6',
        width: '90%',
        height: '20%',
        marginHorizontal: 18,
        marginTop: 30,
        borderRadius: 5,
    },
})