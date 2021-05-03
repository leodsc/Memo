import React from 'react';
import { 
    View, Text, Image, StyleSheet, 
    ScrollView, StatusBar, Button } from 'react-native';
import { Remedio } from './remedioCtn';
import { Dimensions } from 'react-native';

var nextPage;

const HomeScreen = ({navigation, route}) => {
    nextPage = navigation;

    return (
        <View>
        <ScrollView>
            <View style={styles.container}>
                <Remedio nome="Metmorfina"
                horario="18:00"
                total="30"
                qtdPorDia="2"
                status="Consumida"/>
                <Remedio nome="Metmorfina"
                horario="18:00"
                total="20"
                qtdPorDia="1"
                status="Não consumida"/>
                <Remedio nome="Metmorfina"
                horario="18:00"/>
            </View>
        </ScrollView>
        </View>
    )
}

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E7EFEC',
        alignItems: 'center',
        top: -(height-height*0.95),
    },
    banner: {
        width: '100%',
        height: '8%',
        backgroundColor: '#12263A'
    },
    bannerState: {
        position: 'relative',
        left: '80%',
        top: '-15%',
        width: 46,
        height: 45
    }
})

export { HomeScreen, nextPage }