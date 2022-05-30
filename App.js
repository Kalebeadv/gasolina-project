import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

// ----------- Telas ----------------
import Login from "./screens/Login/Login";
import Registrar from "./screens/Registrar/Registrar";
import Mapa from "./screens/mapa/Mapa";
import EsqueciMinhaSenha from "./screens/Esqueci_Senha/Esqueci_senha";
import LoginComGoogle from "./screens/Login_Google/LoginComGoogle";
import CadastrarVeiculo from "./screens/Cadastro_Veiculos/Cadastrar_veiculo";
import Carros from "./screens/Selecao_Carros/Carros";
import Rank from "./screens/Rank/Rank";
import Inicio from "./screens/Loading/Inicio";
import Splash from "./screens/splash";
import ExcluiCarros from "./screens/Exclui_Carros/ExcluiCarros";
import HomePage from "./screens/HomePage/HomePage";
import Home from "./screens/Home/Home";
import CodigoVerificacao from "./screens/CodigoVerificacao/CodigoVerificacao";


const Stack = createStackNavigator();

// CARLOS PARA DE DELETAR A STACK DE INICIO PELO AMOR DE DEUS
// SÓ MEU FI, É NOIS
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Mapa">
      <Stack.Screen name="Splash" component={Splash} options={{
        title: "",
        headerTransparent: true,
        headerShown: false
      }}/>
      <Stack.Screen name="Inicio" component={Inicio} options={{
        title: "",
        headerTransparent: true,
        headerShown: false
      }}/>
      <Stack.Screen name="HomePage" component={HomePage} options={{
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
      <Stack.Screen name="Home" component={Home} options={{
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
      <Stack.Screen name="ExcluiCarros" component={ExcluiCarros} options={{
        title: "",
        headerTransparent: true,
        headerShown: false
      }}/>
      <Stack.Screen name="Rank" component={Rank} options={{
        title: "",
        headerTransparent: true,
        headerShown: false
      }}/>
      <Stack.Screen name="CodigoVerificacao" component={CodigoVerificacao} options={{
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
