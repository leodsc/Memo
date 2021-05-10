import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { isNumeric } from 'validator';
import axios from 'axios';

export const NovoRemedio = (props) => {
    var [hora, setHora] = useState(18);
    var [minuto, setMinuto] = useState(0);
    let [remedio, setRemedio] = useState('');
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
                    (value) => {
                        setRemedio(value);
                    }
                }></TextInput>
            </View>
            <View style={s.qtd}>
                <Text>Quantidade de pílulas</Text>
                <View style={{width: 50, height: 50, marginHorizontal: 50}}>
                    <View style={{flexDirection: 'row'}}>
                            <TextInput
                            style={s.quantity}
                            onChangeText={
                                (value) => {
                                    if (isNumeric(value))
                                    setPillQtd(value)
                                }
                                }>
                                <Text style={{textAlign: 'center'}}>{props.variable}</Text>
                            </TextInput>
                        </View>
                    </View>
                </View>
            <View style={s.info}>
                <View style={{flexDirection: 'row', marginTop: 5}}>
                    <Text>Horário Inicial: </Text>
                    <View style={{flexDirection: 'row', marginHorizontal: 60}}>
                        <TextInput 
                        onChangeText={
                            (value) => {setHora(value)}
                        }
                        style={s.input}>18</TextInput>
                        <Text style={{fontSize: 23}}>:</Text>
                        <TextInput 
                        onChangeText={
                            (value) => {setMinuto(value)}
                        }
                        style={s.input}>00</TextInput>
                    </View>
                </View>
            </View>
            <View style={s.qtd}>
                <Text>Intervalo de tempo</Text>
                <View style={{width: 50, height: 50, marginHorizontal: 70}}>
                    <View style={{flexDirection: 'row'}}>
                            <TextInput
                            style={s.quantity}
                            onChangeText={(value) => setIntervalo(value)}>
                                <Text style={{textAlign: 'center'}}>{props.variable}</Text>
                            </TextInput>
                    </View>
                </View>
            </View>
            <TouchableOpacity
            style={s.criar}
            onPress={() => {
                console.log(remedio);
                axios.post('https://memoapp.loca.lt/add-medicine', JSON.stringify({
                    medicineName: remedio,
                    numPills: pillQtd,
                    interval: intervalo,
                    hora: hora,
                    min: minuto
                })).then(
                    () => props.navigation.navigate('Meus Remédios'), console.log("added")
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
    return (
        <View style={{width: 50, height: 50, marginHorizontal: 50}}>
            <View style={{flexDirection: 'row'}}>
                <View style={{marginHorizontal: 5}}>
                    <TouchableOpacity
                    style={s.incrementerButton}
                    onPress={() => props.function(props.variable++)}>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={s.incrementerButton}
                    onPress={console.log('oi')}/>
                </View>
                <TextInput
                style={s.quantity}>
                    <Text style={{textAlign: 'center'}}>{props.variable}</Text>
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
    quantity: {
        backgroundColor: "#B2D86F",
        width: 38,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        marginTop: 10,
        marginHorizontal: 25,
        textAlign: 'center'
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