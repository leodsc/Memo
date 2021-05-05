import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from './styles';

export const RemedioConsumido = (props) => {
    let a = props.subtraia;
    let remId = props.id;
    
    const consumeMedicine = async()=>{
        let resultado = a-1;

        let updatedMedicine ={
            total: resultado
        }

        const response = axios.post("/api/medicine/"+remId, updatedMedicine)
        console.log(response.data)
        
    }

    return (


        <View style={{alignItems: 'center'}}>
            <Button onPress={consumeMedicine()}
                    title="Consumir"
                    color= "#D0F68E"
                    accessibilityLabel="Press this button to consume your medicine"
            
            ></Button>
            {/* <View style={styles.buttonCtn}>
                <Text style={styles.buttonText}>{props.text}</Text>
            </View> */}
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