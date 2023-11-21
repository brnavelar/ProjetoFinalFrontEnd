import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "../pages/Home"
import Perfil from "../pages/Perfil"
import Pesquisar from "../pages/Pesquisar"
import Pedidos from "../pages/Pedidos"

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator
        screenOptions={{
        tabBarLabelStyle: {fontSize: 17, fontWeight: 'bold'},
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {backgroundColor: '#dcdcdc'},
        tabBarActiveTintColor: '#00BFFF',
        tabBarInactiveTintColor: 'black',
        tabBarIcon: () => null,
        
        
    }}>
        <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarLabel: 'Home'
            }}
        />

        <Tab.Screen 
            name="Pesquisar" 
            component={Pesquisar} 
            options={{
                tabBarLabel: 'Pesquisar'
            }}      
        />
        
        <Tab.Screen 
            name="Pedidos" 
            component={Pedidos} 
            options={{
                tabBarLabel: 'Pedidos'
            }}      
        />

            <Tab.Screen 
            name="Perfil" 
            component={Perfil} 
            options={{
                tabBarLabel: 'Perfil'
            }}      
        />
        
    </Tab.Navigator>
)