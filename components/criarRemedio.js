import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';

export const NovoRemedio = (props) => {
    var [hora, setHora] = useState(18);
    var [minuto, setMinuto] = useState(0);
    var [remedio, setRemedio] = useState('');
    var [pillQtd, setPillQtd] = useState(1);
    var [intervalo, setIntervalo] = useState(1);

    return (
        <View style={s.container}>
            <View style={s.info}>
                <Text>Nome do remédio</Text>
                <TextInput
                placeholderTextColor="#555"
                placeholder="Digite o nome do remédio"
                onChangeText={
                    () => {setRemedio(remedio)}
                }></TextInput>
            </View>
            <View style={s.qtd}>
                <Text>Quantidade de pílulas</Text>
                <Incrementer
                changeText={() => {setPillQtd(pillQtd)}}/>
            </View>
            <View style={s.info}>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Text>Horário Inicial: </Text>
                    <TextInput 
                    onChangeText={
                        () => {setHora(hora)}
                    }
                    style={s.input}>18</TextInput>
                    <Text style={{fontSize: 23}}>:</Text>
                    <TextInput 
                    onChangeText={
                        () => {setMinuto(minuto)}
                    }
                    style={s.input}>00</TextInput>
                </View>
            </View>
            <View style={s.qtd}>
                <Text>Intervalo de tempo</Text>
                <Incrementer
                changeText={() => setIntervalo(intervalo)}/>
            </View>
            <TouchableOpacity
            style={s.criar}
            onPress={() => {
                axios.post('https://memoappserver.loca.lt/add-medicine', JSON.stringify({
                    medicineName: remedio,
                    numPills: pillQtd,
                    interval: intervalo,
                    hora: hora,
                    min: minuto
                })).then(
                    () => props.navigation.navigate('Meus Remédios')
                )
            }
            }>
                <Text 
                style={{textAlign: 'center', fontWeight: 'bold', color: "#12263A"}}>Criar Remédio</Text>
            </TouchableOpacity>
        </View>
    )
}

const Incrementer = (props) => {
    var [counter, setCounter] = useState(1);

    return (
        <View style={{width: 50, height: 50, marginHorizontal: 50}}>
            <View style={{flexDirection: 'row'}}>
                <View style={{marginHorizontal: 5}}>
                    <TouchableOpacity
                    style={s.incrementerButton}
                    onPress={() => setCounter(counter+1)}>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={s.incrementerButton}
                    onPress={
                        () => {
                            if (counter > 0){
                                setCounter(counter-1)
                            }
                            }}/>
                </View>
                <TextInput 
                onChangeText={props.changeText}
                style={s.quantity}>
                    <Text style={{textAlign: 'center'}}>{counter}</Text>
                </TextInput>
            </View>
        </View>
    )
}

const s = StyleSheet.create({
    container: {
        width: 350,
        height: 500,
        borderRadius: 10,
        shadowOpacity: 0.41,
        shadowRadius: 10,
        elevation: 14,
        backgroundColor: '#fff',
        marginHorizontal: 30,
        marginVertical: 50,
    },
    info: {
        marginHorizontal: 35,
        marginTop: 30,
        width: '80%',
        height: '15%',
        backgroundColor: '#E6E6E6',
        borderRadius: 10,
        shadowOpacity: 0.5,
        elevation: 14,
        shadowRadius: 10,
    },
    qtd: {
        marginHorizontal: 35,
        marginTop: 30,
        width: '80%',
        height: '15%',
        backgroundColor: '#E6E6E6',
        borderRadius: 10,
        flexDirection: 'row'
    },
    incrementerButton: {
        width: 23,
        height: 18,
        backgroundColor: '#C8CDCB',
        marginTop: 8,
        borderRadius: 5,
    },
    quantity: {
        backgroundColor: "#B2D86F",
        width: 38,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        marginTop: 10,
    },
    input: {
        width: 38,
        height: 40,
        backgroundColor: "#c8cdcb",
        borderRadius: 10,
        marginHorizontal: 5,
        textAlign: 'center',
        fontSize: 23,
    },
    criar: {
        width: 100, 
        height: 50, 
        backgroundColor: '#EBAD6F',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 10,
        marginLeft: 125,
    }
})