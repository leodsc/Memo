import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const RemedioConsumido = (props) => {
    return (
        <View style={{alignItems: 'center'}}>
            <View style={styles.buttonCtn}>
                <Text style={styles.buttonText}>{props.text}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonCtn: {
        width: 170,
        height: 50,
        backgroundColor: "#D0F68E",
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 21,
        color: '#12263A',
        fontWeight: 'bold',
        top: '20%'
    }
})