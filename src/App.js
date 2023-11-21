import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Tab from './navigations/Tab'
import Inicio from "./pages/Inicio"
import Home from "./pages/Home"
import Esqueci from "./pages/Esqueci"
import TelaLogin from "./pages/TelaLogin";
import TelaCadastro from "./pages/TelaCadastro";

const Stack = createNativeStackNavigator();

export default props => (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Inicio"
                //screenOptions={{headerShown: false}}
                screenOptions={minhaScreenOptions}
            >
                <Stack.Screen 
                    name="Inicio"
                    component={Inicio}
                />
                <Stack.Screen 
                    name="TelaLogin"
                    component={TelaLogin}
                />
                <Stack.Screen
                    name="TelaCadastro"
                    component={TelaCadastro}
                    options={{title: 'Cadastro de usuários'}}
                />
                <Stack.Screen 
                    name="Home"
                    component={Home}
                />
                <Stack.Screen 
                    name="Esqueci"
                    component={Esqueci}
                />
                <Stack.Screen 
                    name="Tab"
                    component={Tab}
                />
            </Stack.Navigator>
        </NavigationContainer>

)

const minhaScreenOptions = {
    headerShown: false,
    headerStyle:{
        backgroundColor: '#003f5c'
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
        fontWeight: 'bold'
    }
}