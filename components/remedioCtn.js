import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { InfoPilula } from './pilula';
import { RemedioConsumido } from './remedioConsumido';
import { CheckBox } from 'react-native-elements';

export const Remedio = (props) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.info}>
                    <View style={styles.nomeCtn}>
                        <Text style={styles.nome}>{props.nome}</Text>
                        <View style={styles.select}></View>
                    </View>
                    <Text style={{fontSize: 20, paddingVertical: 10}}>Próxima dose:</Text>
                    <Text style={{textAlign: 'center', fontSize: 40, fontWeight: 'bold'}}>
                        {props.horario}</Text>
                    <InfoPilula 
                    text="Pilulas por dia" quantidade={props.qtdPorDia}
                    color="#B2D86F"/>
                    <InfoPilula 
                    text="Total" quantidade={props.total}
                    color="#EBAD6F"/>
                </View>
            </ScrollView>
            <RemedioConsumido
            text={props.status}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 360,
        height: 340,
        backgroundColor: '#FFFFFF',
        marginTop: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.30,
        shadowRadius: 2,
        elevation: 3,
        borderRadius: 4,
    },
    info: {
        fontSize: 32,
        marginLeft: 20,
    },
    nomeCtn: {
        flexDirection: 'row',
        marginTop: '10%',
        marginHorizontal: 70,
    },
    nome: {
        fontSize: 23,
        flex: 10,
        color: '#12263A',
        textAlign: 'center',
    },
    select: {
        borderWidth: 2,
        borderColor: '#000000',
        height: 20,
        width: 20,
        borderRadius: 4,
        flex: 1,
        left: 50,
    },
})