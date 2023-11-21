import React from "react"
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native"

export default function Esqueci({ navigation }) {
    return(
        <View style={Estilo.formContainer}>

            <TouchableOpacity
                    onPress={() => navigation.navigate('TelaLogin')}
                >
                    <Image source={require('../assets/voltar.png')} style={Estilo.ImageVoltar} />
                </TouchableOpacity>

                <Text style={Estilo.formInputDescription}>Insira o email cadastrado: </Text>
                <TextInput
                    style={Estilo.formInput}
                />

            <TouchableOpacity
                    style={Estilo.cadastroButton}
                >
                    <Text style={Estilo.cadastroButtonText}>Enviar</Text>
                </TouchableOpacity>
    </View>
    );
}

const Estilo = {
    formContainer: {
        flex: 1,
        backgroundColor: '#e6e6e6',
        justifyContent: "center",
        alignItems: "center",
    },
    ImageVoltar: {
        width: 250,
        height: 250,
        right: 160,
        top: -300 
    },
    formInputDescription: {
        color: 'black',
        marginBottom: 5,
        bottom: 80,
        right: 80,
        fontWeight: 'bold',
        marginBottom: 10
    },
    formInput: {
        backgroundColor: "white",
        width: 350,
        height: 55,
        marginBottom: 20,
        fontSize: 16,
        padding: 10,
        color: "black",
        alignItems: "center",
        bottom: 80
    },
    cadastroButton: {
        width: 150,
        height: 55,
        backgroundColor: "#00BFFF",
        justifyContent: "center",
        alignItems: "center",
        bottom: 60
    },
    cadastroButtonText: {
        color: 'white',
        fontWeight: 'bold'
    }
}