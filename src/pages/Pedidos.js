import React from "react"
import { View, Text, Image } from "react-native"

export default function Pedidos() {
    return(
        <View style={Estilo.formContainer}>

        <Text style={Estilo.titulo2}>Pedidos</Text>

        <Image source={require('../assets/logo.png')} style={Estilo.ImageLogo} />

        <Image source={require('../assets/carrinho.png')} style={Estilo.ImageCarrinho} />

    </View>
    );
}

const Estilo = {
    formContainer:{
        flex:1,
        backgroundColor:'#DCDCDC',
        justifyContent: "center",
        alignItems: "center",
      },
      titulo:{
        fontSize: 30,
        fontWeight:'bold',
        bottom: 50
     },
     titulo2:{
        fontSize: 15,
        fontWeight:'bold',
        right: 140
     },
      ImageLogo:{
        width: 120,
        height: 120,
        right: 150,
        top: -250
    },
    ImageCarrinho:{
        width: 200,
        height: 200,
        left: 150,
        top: -408
    }
}