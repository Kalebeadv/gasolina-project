import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./screens/login_register/Login";
import MenuPrincipal from "./screens/inicio_menuPrincipal/MenuPrincipal";
import Registrar from "./screens/login_register/Registrar";
import Mapa from "./screens/mapa/Mapa";
import EsqueciMinhaSenha from "./screens/login_register/Esqueci_senha";
import { ScreenStackHeaderConfig } from "react-native-screens";
import LoginComGoogle from "./screens/login_register/LoginComGoogle";
import CadastrarVeiculo from "./screens/login_register/Cadastrar_veiculo";
const Stack = createStackNavigator();


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Mapa" component={Mapa}  />
      <Stack.Screen name="Entrar" component={Login} options={{title: ""}}/>  
      <Stack.Screen name="Registrar" component={Registrar} options={{title: ""}}  />
      <Stack.Screen name="MenuPrincipal" component={MenuPrincipal} options={{title: ""}} />
      <Stack.Screen name="EsqueciMinhaSenha" component={EsqueciMinhaSenha} options={{title: ""}}/>
      <Stack.Screen name="LoginComGoogle" component={LoginComGoogle} options={{title: ""}}/>
      
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
