import { TouchableOpacity, Image, Text, TextInput, View, Alert } from "react-native"
import { useEffect, useState } from "react"
import { API_ENDPOINT } from "../config";
import { doGet } from "../config/api";

export default function TelaLogin({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [data, setData] = useState(['']);

    const signIn = async () => {
        if(!email){
            Alert.alert('O campo nao pode ser vazio')
            return;
        }

    const user = data.find((user) => user.email === email && user.senha === senha);
    if(user){
        navigation.navigate('Tab');
    } else {
        Alert.alert('Usuário ou senha incorretos!')
    }

    }

    useEffect(() => {
        const loadData = async () => {
            try {
                const URL = `${API_ENDPOINT}/cliente`;
                const userData = await doGet(URL);
                setData(userData);
            } catch (error) {
                console.error('Erro ao buscar dados de usuário:', error);
            }
        };
        loadData();
        }, []);

    return(
            <View style={Estilo.formContainer}>

            <TouchableOpacity
                    onPress={() => navigation.navigate('Inicio')}
                >
                    <Image source={require('../assets/voltar.png')} style={Estilo.ImageVoltar} />
                </TouchableOpacity>

                <Image source={require('../assets/logo.png')} style={Estilo.loginImageLogo} />

                <Text style={Estilo.textA}>Email</Text>
                        <TextInput 
                            style={Estilo.loginTexto}
                            placeholder="Insira seu email"
                            onChangeText={setEmail}
                        />

                <Text style={Estilo.textB}>Senha</Text>  
                        <TextInput
                            style={Estilo.loginTexto}
                            placeholder="Digite sua senha"
                            secureTextEntry = {true}
                            onChangeText={setSenha}
                        />

                <TouchableOpacity 
                    style={Estilo.loginButtonEntrar}
                    onPress={signIn}
                >
                    <Text style={Estilo.loginButtonTexto}>Entrar</Text>    
                </TouchableOpacity>
                
                <TouchableOpacity 
                    onPress={ () => navigation.navigate('Esqueci')}
                >
                    <Text style={Estilo.loginEsqueci}>Esqueci minha senha</Text>  
                </TouchableOpacity>
                

                <TouchableOpacity
                onPress={ () => navigation.navigate('TelaCadastro')}
                >
                <Text style={Estilo.loginCadastro}>Cadastre se</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={Estilo.loginButtonVisitante}
                    onPress={ () => navigation.navigate('Tab')}
                >
                    <Text style={Estilo.loginButtonTexto}>Continuar como visitante</Text>    
                </TouchableOpacity>
            </View>
   
    )
}

const Estilo = {
    formContainer:{
        flex:1,
        backgroundColor:'#e6e6e6',
        justifyContent: "center",
        alignItems: "center",
      },
      loginTexto:{
        backgroundColor: "white",
        width: 350,
        height: 55,
        marginBottom: 10,
        fontSize: 16,
        color: "black",
        top: -150
    },
    textA:{
        top: -152,
        right: 150,
        fontWeight:'bold'
    },
    textB:{
        top: -152,
        right: 150,
        fontWeight:'bold'
    },
    loginCadastro:{
        color: 'black',
        marginTop: 25,
        marginBottom: 10,
        fontWeight:'bold',
        top: -170,
        left: 130
    },
    loginEsqueci:{
        color: 'black',
        marginTop: 25,
        marginBottom: 10,
        fontWeight:'bold',
        top: -120,
        right: 100
    },
    loginButtonEntrar:{
        width: 350,
        height: 55,
        backgroundColor: "#00BFFF",
        justifyContent: "center",
        alignItems: "center",
        top: -130
    },
    loginButtonVisitante:{
        width: 350,
        height: 55,
        backgroundColor: "#00BFFF",
        justifyContent: "center",
        alignItems: "center",
        top: -150
    },
    loginButtonTexto:{
        color: 'white',
        fontWeight:'bold'
    },
    loginImageLogo:{
        width: 350,
        height: 350,
        top: -140
    },
    ImageVoltar: {
        width: 250,
        height: 250,
        right: 160
    },
    formInputDescription:{
        fontSize: 22
    },
    formInput:{
        fontSize: 22,
        backgroundColor: '#DCDCDC'
    }
}