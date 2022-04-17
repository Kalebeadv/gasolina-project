import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "./screens/Usuario/Login";
import MenuPrincipal from "./screens/Principais/MenuPrincipal";
import Registrar from "./screens/Usuario/Registrar";
import Mapa from "./screens/mapa/Mapa";
import EsqueciMinhaSenha from "./screens/Usuario/Esqueci_senha";
import LoginComGoogle from "./screens/Usuario/LoginComGoogle";
import CadastrarVeiculo from "./screens/Usuario/Cadastrar_veiculo";
import CalcularRota from "./screens/calcular-rota/Calculo-rota";
import Carros from "./screens/carros_e_rank/Carros";
import Rank from "./screens/carros_e_rank/Rank";

const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator>
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
      <Stack.Screen name="MenuPrincipal" component={MenuPrincipal} options={{
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
