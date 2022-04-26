import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./screens/Usuario/Login";
import Registrar from "./screens/Usuario/Registrar";
import Mapa from "./screens/mapa/Mapa";
import 'react-native-gesture-handler';
import EsqueciMinhaSenha from "./screens/Usuario/Esqueci_senha";
import LoginComGoogle from "./screens/Usuario/LoginComGoogle";
import CadastrarVeiculo from "./screens/Usuario/Cadastrar_veiculo";
import Carros from "./screens/carros_e_rank/Carros";
import Rank from "./screens/carros_e_rank/Rank";
import Inicio from "./screens/Principais/Inicio";
import Splash from "./screens/splash";

const Stack = createStackNavigator();

// CARLOS PARA DE DELETAR A STACK DE INICIO PELO AMOR DE DEUS
// SÓ MEU FI, É NOIS
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Inicio" component={Inicio} options={{
        title: "",
        headerTransparent: true,
        headerShown: false
      }}/>
      <Stack.Screen name="Splash" component={Splash} options={{
        title: "",
        headerTransparent: true,
        headerShown: false
      }}/>
      <Stack.Screen name="Entrar" component={Login} options={{
        title: "",
        headerTransparent: true,
        headerShown: false
      }}/>
      <Stack.Screen name="Registrar" component={Registrar} options={{
        title: "",
        headerTransparent: true,
        headerShown: false
      }}/>
      <Stack.Screen name="Mapa" component={Mapa} options={{
        title: "",
        headerTransparent: true,
        headerShown: false
      }}/>
      <Stack.Screen name="EsqueciMinhaSenha" component={EsqueciMinhaSenha} options={{
        title: "",
        headerTransparent: true,
        headerShown: false
      }}/>
      <Stack.Screen name="LoginComGoogle" component={LoginComGoogle} options={{
        title: "",
        headerTransparent: true,
        headerShown: false
      }}/>
      <Stack.Screen name="CadastroVeiculo" component={CadastrarVeiculo} options={{
        title: "",
        headerTransparent: true,
        headerShown: false
      }}/>
      <Stack.Screen name="Carros" component={Carros} options={{
        title: "",
        headerTransparent: true,
        headerShown: false
      }}/>
      <Stack.Screen name="Rank" component={Rank} options={{
        title: "",
        headerTransparent: true,
        headerShown: false
      }}/>
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
