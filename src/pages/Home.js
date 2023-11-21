import React from "react"
import { View, Text, Image } from "react-native"

export default function Home() {
    return(
        <View style={Estilo.formContainer}>

        <Text style={Estilo.titulo}>FeitoÀMão</Text>

        <Text style={Estilo.titulo2}>Produtos</Text>

        <Image source={require('../assets/logo.png')} style={Estilo.ImageLogo} />

        <Image source={require('../assets/carrinho.png')} style={Estilo.ImageCarrinho} />

        <>
              <Image source={require('../assets/imagem.png')} style={Estilo.Image} />
            </>
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
        top: 200
     },
     titulo2:{
        fontSize: 15,
        fontWeight:'bold',
        right: 140,
        top: 280
     },
      ImageLogo:{
        width: 120,
        height: 120,
        right: 150,
        top: 0
    },
    ImageCarrinho:{
        width: 200,
        height: 200,
        left: 150,
        top: -158
    },
    Image:{
        width: 500,
        height: 500,
        bottom: 50
    }
}