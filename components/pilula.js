import React from 'react';
import { View, Text } from 'react-native';

export const InfoPilula = (props) => {
    return (
        <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text style={{fontSize: 20, flex: 0.93}}>{props.text}</Text>
            <View style={
                {width: 34, 
                height: 25, 
                backgroundColor: props.color,
                borderRadius: 10,
                padding: 4,
                }}>
                <Text style={{textAlign: 'center'}}>{props.quantidade}</Text>
            </View>
        </View>
    )
}