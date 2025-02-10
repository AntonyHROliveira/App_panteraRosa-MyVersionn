import React, { Component } from 'react';
import { Text, View, Image, StatusBar, ScrollView, SafeAreaView, TouchableOpacity, StyleSheet, } from "react-native";
// import styles from '@/assets/style/styles';
import ReactDOM from 'react';

import { NavigationProp } from "@react-navigation/native";

import Icon from 'react-native-vector-icons/FontAwesome';



interface HeaderProps {
    SacolaPress?: () => void;
    LoginPress?: () => void;

}


const Header: React.FC<HeaderProps> = ({ LoginPress, SacolaPress }) => {
    return (

        <View style={styles.header}>

            <Image source={require('../assets/images/logoPantera.png')} style={styles.logoPantera} />

            <View style={styles.LoginSacola}>

                <TouchableOpacity onPress={SacolaPress} style={styles.botao} >
                    <Icon name='shopping-cart' size={24} style={styles.icone} />
                    <Text style={styles.texto}>Sacola</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={LoginPress} style={styles.botao} >
                    <Icon name='user' size={24} style={styles.icone} />
                    <Text style={styles.texto}>Login</Text>
                </TouchableOpacity >

            </View >

        </View >

    );
};



const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'pink',
    },
    logoPantera: {
        width: 60,
        height: 40,
        marginLeft: 5,
    },
    LoginSacola: {
        flexDirection: 'row',
    },
    botao: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    texto: {
        fontFamily: 'Montserrat', // fonte importada
        color: '#fff',
        marginRight: 5,
    },
    icone: {
        color: '#fff',
        marginRight: 5,
    },

});


export default Header;











