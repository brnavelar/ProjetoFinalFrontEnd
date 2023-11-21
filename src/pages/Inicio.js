import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Inicio() {
  const navigation = useNavigation();
  return (
    <View style={Estilo.container}>
      
    <Text style={Estilo.titulo}>Bem Vindo ao FeitoÁMão!</Text>

    <Image source={require('../assets/logo.png')} style={Estilo.loginImageLogo} />

        <TouchableOpacity 
                    style={Estilo.loginButtonEntrar}
                    onPress={ () => navigation.navigate('TelaLogin')}
                >
                    <Text style={Estilo.loginButtonText}>Continuar</Text>    
                </TouchableOpacity>

    </View>
  );
}

const Estilo = {
    loginImageLogo:{
    width: 350,
    height: 350,
    top: 100,
    left: 30
},
titulo:{
  fontSize: 30,
  fontWeight:'bold',
  top: 100,
  left: 30
  },
  loginButtonEntrar:{
    width: 350,
    height: 55,
    backgroundColor: "#00BFFF",
    justifyContent: "center",
    alignItems: "center",
    top: 100,
    left: 30,
    borderRadius: 30
},
loginButtonText:{
  fontWeight:'bold'
}
}