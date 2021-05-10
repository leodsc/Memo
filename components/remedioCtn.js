import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { InfoPilula } from './pilula';
import { RemedioConsumido } from './remedioConsumido';

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
            <RemedioConsumido id={props.nome} subtraia={props.total} 
            text={props.status}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 297,
        height: 340,
        backgroundColor: '#FFFFFF',
        marginTop: 50,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.41,
        shadowRadius: 9.11,
        elevation: 14,
        borderRadius: 10,
        marginHorizontal: 60,
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
})