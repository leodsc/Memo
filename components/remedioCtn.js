import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export const Remedio = (props) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.info}>
                    <View style={styles.nomeCtn}>
                        <Text style={styles.nome}>{props.nome}</Text>
                        <View style={styles.select}></View>
                    </View>
                    <Text style={{fontSize: 20}}>Próxima dose:</Text>
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
            <View style={{alignItems: 'center'}}>
                <Button
                text={props.status}/>
            </View>
        </View>
    )
}

const Button = (props) => {
    return (
        <View style={styles.buttonCtn}>
            <TouchableOpacity
            >
                <Text style={styles.buttonText}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const InfoPilula = (props) => {
    return (
        <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text style={{fontSize: 20, flex: 0.93}}>{props.text}</Text>
            <View style={
                {width: 34, 
                height: 25, 
                backgroundColor: props.color,
                borderRadius: 10,
                }}>
                <Text style={{textAlign: 'center'}}>{props.quantidade}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 297,
        height: 340,
        backgroundColor: '#FFFFFF',
        marginTop: 60,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
        borderRadius: 10,
    },
    info: {
        fontSize: 32,
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
    },
    select: {
        borderWidth: 2,
        borderColor: '#000000',
        height: 24,
        width: 24,
        borderRadius: 7,
        flex: 1.5,
        left: '50%'
    },
    buttonCtn: {
        width: 170,
        height: 50,
        backgroundColor: "#D0F68E",
        borderRadius: 10,
        top: '-50%',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 21,
        color: '#12263A',
        fontWeight: 'bold',
        top: '30%'
    }
})