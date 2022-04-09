import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./screens/Usuario/Login";
import MenuPrincipal from "./screens/Principais/MenuPrincipal";
import Registrar from "./screens/Usuario/Registrar";
import Mapa from "./screens/mapa/Mapa";
import EsqueciMinhaSenha from "./screens/Usuario/Esqueci_senha";
import { ScreenStackHeaderConfig } from "react-native-screens";
import LoginComGoogle from "./screens/Usuario/LoginComGoogle";
import CadastrarVeiculo from "./screens/Usuario/Cadastrar_veiculo";
import Inicio from "./screens/Principais/Inicio";
const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator>
<<<<<<< HEAD
      <Stack.Screen name="Inicio" component={Inicio} options={{headerShown: false}}/>
      <Stack.Screen name="Entrar" component={Login} options={{headerShown: false}}/>
=======
      <Stack.Screen name="Mapa" component={Mapa}  />
      <Stack.Screen name="Entrar" component={Login} options={{title: ""}}/>  
>>>>>>> bf5de154c802a05dde4684543e95a75f42b8afed
      <Stack.Screen name="Registrar" component={Registrar} options={{title: ""}}  />
      <Stack.Screen name="MenuPrincipal" component={MenuPrincipal} options={{headerShown: false}} />
      <Stack.Screen name="EsqueciMinhaSenha" component={EsqueciMinhaSenha} options={{title: ""}}/>
      <Stack.Screen name="LoginComGoogle" component={LoginComGoogle} options={{title: ""}}/>
<<<<<<< HEAD
      <Stack.Screen name="Mapa" component={Mapa} options={{headerShown: false}}/>
=======

>>>>>>> bf5de154c802a05dde4684543e95a75f42b8afed
      <Stack.Screen name="CadastroVeiculo" component={CadastrarVeiculo} options={{title: ""}} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
