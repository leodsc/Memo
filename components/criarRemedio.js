import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { color } from 'react-native-reanimated';

export const NovoRemedio = () => {
    return (
        <View style={styles.container}>
            <View style={styles.fieldContainer}>
                <Field title="Nome do remédio:" input="Digite aqui o nome do remédio"/>
                <Field title="Quantidade de pílulas: " input="Digite aqui o nome do remédio"/>
                <Field title="Horário Inicial: " input="Digite aqui o nome do remédio"/>
                <Field title="Tomar de quantas em quantas horas?" input="Digite aqui o nome do remédio"/> 
                <View style={styles.buttonCtn}>
                    <Text style={styles.buttonText}>Criar remédio</Text>
                </View>
            </View>
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
    buttonCtn: {
        width: 170,
        height: 50,
        backgroundColor: "#EBAD6F",
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
    },
    buttonText: {
        fontSize: 21,
        color: '#12263A',
        fontWeight: 'bold',
    }
})