import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { color } from 'react-native-reanimated';

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
            <Text style={{color: '#12263A', fontSize: 18, fontWeight: 'bold', paddingVertical: 5}}>{props.title}</Text>
            <TextInput style={{color: '#ACACAC'}}>{props.input}</TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 370,
        height: 460,
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginTop: 80,
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.30,
        shadowRadius: 2,
        elevation: 3,
    },
    fieldContainer: {
        height: 384,
    },
    field: {
        backgroundColor: '#F6F6F6',
        width: '90%',
        height: '20%',
        marginHorizontal: 18,
        marginTop: 15,
        borderRadius: 5,
        paddingHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.30,
        shadowRadius: 2,
        elevation: 3,
    },
})