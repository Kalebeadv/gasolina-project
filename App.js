import React from "react";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./screens/login_register/Login";
import MenuPrincipal from "./screens/inicio_menuPrincipal/MenuPrincipal";
import Inicio from "./screens/inicio_menuPrincipal/Inicio";
import Registrar from "./screens/login_register/Registrar";
import Mapa from "./screens/mapa/Mapa";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Inicio}/>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registrar" component={Registrar} />
      <Stack.Screen name="MenuPrincipal" component={MenuPrincipal} />
      <Stack.Screen name="Mapa" component={Mapa}  />
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

