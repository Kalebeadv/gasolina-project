import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./screens/login_register/Login";
import MenuPrincipal from "./screens/inicio_menuPrincipal/MenuPrincipal";
import Inicio from "./screens/inicio_menuPrincipal/Inicio";
import Registrar from "./screens/login_register/Registrar";
import Mapa from "./screens/mapa/Mapa";
import EsqueciSenha from "./screens/login_register/Esqueci_senha";
import { ScreenStackHeaderConfig } from "react-native-screens";
import LoginComGoogle from "./screens/login_register/LoginComGoogle";
import CadastrarVeiculo from "./screens/login_register/Cadastrar_veiculo";
const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Entrar" component={Login} />
      <Stack.Screen name="Registrar" component={Registrar} />
      <Stack.Screen name="MenuPrincipal" component={MenuPrincipal} />
      <Stack.Screen name="Mapa" component={Mapa}  />
      <Stack.Screen name="EsqueciSenha" component={EsqueciSenha}/>
      <Stack.Screen name="LoginComGoogle" component={LoginComGoogle}/>
      <Stack.Screen name="CadastroVeiculo" component={CadastrarVeiculo} />
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