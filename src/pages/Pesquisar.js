import React from "react"
import { View, Text, Image, TextInput } from "react-native"

export default function Pesquisar() {
    return(
        <View style={Estilo.formContainer}>

            
        <Image source={require('../assets/logo.png')} style={Estilo.ImageLogo} />

<Image source={require('../assets/carrinho.png')} style={Estilo.ImageCarrinho} />

        <TextInput 
            style={Estilo.formInput}
            placeholder="Pesquise aqui"

        />

        <Text style={Estilo.titulo2}>Produtos</Text>

        <Image source={require('../assets/imagem.png')} style={Estilo.Image} />

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
        right: 140,
        bottom: 40
     },
      ImageLogo:{
        width: 120,
        height: 120,
        right: 150,
        top: 60
    },
    ImageCarrinho:{
        width: 200,
        height: 200,
        left: 150,
        top: -98
    },
    formInput: {
        backgroundColor: "white",
        width: 350,
        height: 55,
        fontSize: 16,
        padding: 10,
        color: "black",
        alignItems: "center",
        bottom: 110,
    },
    Image:{
        width: 500,
        height: 500,
        bottom: 50

    }
}