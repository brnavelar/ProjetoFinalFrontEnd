import { useState } from "react";
import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { API_ENDPOINT } from "../config";
import { doPost } from '../config/api'

export default function TelaCadastro({ navigation }) {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    const createUser = async () => {

        const URL = `${API_ENDPOINT}/cliente`;
        try {
            const urlParams = {
                nome: nome,
                cpf: cpf,
                telefone: telefone,
                endereco: endereco,
                email: email,
                senha: senha
            }
            const response = await doPost(URL, urlParams);
               navigation.navigate('Tab');
            return JSON.stringify(response);
         
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            throw error;
        }
    }


    return (
        <>
            <View style={Estilo.formContainer}>

                <TouchableOpacity
                    onPress={() => navigation.navigate('TelaLogin')}
                >
                    <Image source={require('../assets/voltar.png')} style={Estilo.ImageVoltar} />
                </TouchableOpacity>

                <Text style={Estilo.formInputDescription}>Nome: </Text>
                <TextInput
                    style={Estilo.formInput}
                    onChangeText={setNome}
                    maxLength={50}
                />
                <Text style={Estilo.formInputDescription}>CPF/CNPJ: </Text>
                <TextInput
                    style={Estilo.formInput}
                    onChangeText={setCpf}
                    keyboardType="numeric"
                    maxLength={11}
                />
                <Text style={Estilo.formInputDescription}>Telefone: </Text>
                <TextInput
                    style={Estilo.formInput}
                    onChangeText={setTelefone}
                    keyboardType="numeric"
                    maxLength={11}
                />
                <Text style={Estilo.formInputDescription}>Endereço: </Text>
                <TextInput
                    style={Estilo.formInput}
                    onChangeText={setEndereco}
                    maxLength={100}
                />
                <Text style={Estilo.formInputDescription}>Email: </Text>
                <TextInput
                    style={Estilo.formInput}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                <Text style={Estilo.formInputDescription}>Senha: </Text>
                <TextInput  secureTextEntry={true}
                    style={Estilo.formInput}
                    onChangeText={setSenha}
                />

                <TouchableOpacity
                    style={Estilo.cadastroButton}
                    onPress={createUser}
                >
                    <Text style={Estilo.cadastroButtonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

    const Estilo = {
        formContainer: {
            flex: 1,
            backgroundColor: '#e6e6e6',
            justifyContent: "center",
            alignItems: "center",
        },
        cadastroButton: {
            width: 350,
            height: 55,
            backgroundColor: "#00BFFF",
            justifyContent: "center",
            alignItems: "center",
            bottom: 60
        },
        cadastroButtonText: {
            color: 'white',
            fontWeight: 'bold'
        },
        formInputDescription: {
            color: 'black',
            marginBottom: 5,
            bottom: 80,
            right: 150,
        },
        ImageVoltar: {
            width: 250,
            height: 250,
            right: 160,
            bottom: 40
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
    }
