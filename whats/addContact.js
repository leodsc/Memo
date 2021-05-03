import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { styles as styleButtons } from '../warns/buttons';

const ContactsWindow = () => {
    return (
        <View style={styles.window}>
            <Contact></Contact>
            <Contact></Contact>
            <Contact></Contact>
            <ContactsFooter></ContactsFooter>
        </View>
    )
}

const Contact = () => {
    return (
        <View style={styles.contactInfoCtn}>
            <View style={styles.photo}>
                <Image 
                style={{width: '100%', height: '100%'}}
                source={{uri: 'https://cdn4.iconfinder.com/data/icons/48-bubbles/48/32.ID-Vertical-256.png'}}>
                </Image>
            </View>
            <Text style={styles.contactInfos}>Nome</Text>
            <Text style={styles.contactInfos}>Numero</Text>
        </View>
    )
}

const ContactsFooter = () => {
    return (
        <View style={styles.footer}>
            <TouchableOpacity style={styleButtons.confirm, styles.buttons}>
                <Text style={styleButtons.text}>Adicionar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styleButtons.decline, styles.buttons}>
                <Text style={styleButtons.text}>Excluir</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    window: {
        height: '60%',
        width: '80%',
        margin: '10%',
        position: 'absolute',
        top: '10%',
        borderRadius: 10,
        borderWidth: 2
    },
    contactInfoCtn: {
        width: '100%',
        height: '20%',
        position: 'relative',
        borderTopWidth: 1,
    },
    contactInfos: {
        position: 'relative',
        textAlign: 'center',
        top: '-70%',
        fontSize: 20,
        fontFamily: 'Roboto'
    },
    photo: {
        width: '30%',
        height: '100%',
        position: 'relative',
    },
    buttons: {
        width: 100,
        height: 50,
        borderRadius: 5,
        marginRight: 30,
        marginLeft: 30
    },
    footer: {
        width: '100%',
        height: '15%',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        flexDirection: "row",
        backgroundColor: "#E0E0E0",
        alignItems: 'center',
        position: 'relative',
        top:'38.5%'
    }
})

export default ContactsWindow;