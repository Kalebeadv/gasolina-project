import React, { useState } from "react";
import config from "../../config/config.json";
import {
  View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity,
  Text, Keyboard, Alert, Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "./css"
import Background from "../../assets/SvgImages/Background.svg"


//Fazer Login
export default function Login({ navigation }) {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [message, setMessage] = useState(null);


  // função de login -----------------------------------------------

  async function fazLogin() {
    let reqs = await fetch(config.urlRootNode + 'login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        emailUser: email,
        passwordUser: password
      })
    });
    let ress = await reqs.json();
    console.log(ress)
    if (ress[0].email == email) {
      await AsyncStorage.setItem('userConfig', JSON.stringify(ress[0]));
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('pass', password);

      navigation.navigate("Home");
    } else {
      Alert.alert(
        "Ocorreu um erro",
        "E-mail ou Senha invalido"
      )
    }
  }

  //fim ----------------------------------------------------------------------

 

  // paginas do navigate  *****************************************************
  function registrar() {
    navigation.navigate('Registrar');
  }
  function esqueci_senha() {
    navigation.navigate('EsqueciMinhaSenha');
  }

  function login_com_o_google() {
    navigation.navigate('LoginComGoogle')
  }
  //fim ***********************************************************************


  return (
    <KeyboardAvoidingView style={styles.background}>
      <View >
        <Background style={styles.svgBack} width={Dimensions.get("screen").width} height={Dimensions.get("screen").height + 20} />
        <View style={styles.EntrarContainer}>
          <Text style={styles.tanqueo}>Entrar</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.textoES}>E-mail</Text>
          <View style={styles.loginEmail}>
            <Icon name="envelope-o" size={25} color="#ffffff" />
            <TextInput
              style={styles.textInput}
              autoCorrect={false}
              autoCapitalize={"none"}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <Text style={styles.textoES}>Senha</Text>
          <View style={styles.loginPass}>
            <Icon name="lock" size={25} color="#ffffff" />
            <TextInput
              style={styles.textInput}
              autoCorrect={false}
              secureTextEntry={true}
              autoCapitalize={"none"}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          <Text style={styles.esqueci_senha} onPress={esqueci_senha}>
            Esqueci a minha senha
          </Text>

          <TouchableOpacity style={styles.btnEntrar} onPress={fazLogin}>
            <Text style={styles.btnTexto}>Entrar</Text>
          </TouchableOpacity>

          <Text style={styles.ou}>────── Ou ──────</Text>
          <View style={styles.googleContainer}>
            <TouchableOpacity style={styles.btnGoogle} onPress={login_com_o_google}>
              <Icon name="google" size={20} color="#000" />
              <Text style={styles.btnGoogleTexto}>  Entrar com o Google</Text>
            </TouchableOpacity>
            <View style={styles.registrarContainer}>
              <Text style={styles.registro}>Novo por aqui?</Text>
              <Text onPress={registrar} style={styles.nome_registro}>Registrar</Text>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

