import React from "react"
import { View, Text, Image } from "react-native"

export default function Perfil() {
    return(
        <View style={Estilo.formContainer}>

        <Text style={Estilo.titulo2}>Perfil</Text>

        <Image source={require('../assets/logo.png')} style={Estilo.ImageLogo} />

        <Image source={require('../assets/carrinho.png')} style={Estilo.ImageCarrinho} />

        <Image source={require('../assets/cliente.png')} style={Estilo.ImageCarrinho} />        

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
    },
    ImageCliente:{
      width: 200,
      height: 200,
      left: 150,
      top: -408
  }
}


