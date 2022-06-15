import React, { useState } from "react";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Alert, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "./css"
import Background from "../../assets/SvgImages/RegisterBackground.svg"


export default function Registrar({ navigation }) {
  const [nome, setNome] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [message, setMessage] = useState(null);

  async function registerUser() {
    if (password == passwordConfirm){
      let userc = {
        nome : nome,
        password : password,
        email : email
      }
      console.log(userc);

      
      await AsyncStorage.setItem('userConfig', JSON.stringify(userc));
      navigation.navigate("CodigoVerificacao", {userc: JSON.stringify(userc)});
    } else {
      Alert.alert(
        "Algo inesperado",
        "As senhas estão diferentes"
      );
    }
  }

  function fazLogin() {
    console.log("foi")
    navigation.navigate("Entrar");
  }
  function login_com_o_google() {
    navigation.navigate('LoginComGoogle')
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.backContainer}>
        <Background style={styles.svgBack} width={Dimensions.get("screen").width + 20} height={Dimensions.get("screen").height + 20} />


        <View style={styles.EntrarContainer}>
          <Text style={styles.tanqueo}>Registrar</Text>
        </View>
        <View style={styles.loginContainer}>
          <View style={styles.inputIcon}>
            <Icon name="user" size={25} color="#ffffff" />
            <TextInput
              style={styles.imputs}
              placeholder=" Nome"
              placeholderTextColor={'#ffffff'}
              autoCorrect={false}
              onChangeText={(text) => setNome(text)}
            />
          </View>

          <View style={styles.inputIcon}>
            <Icon name="envelope" size={25} color="#ffffff" />
            <TextInput
              style={styles.imputs}
              placeholder=" E-mail"
              placeholderTextColor={'#ffffff'}
              autoCorrect={false}
              autoCapitalize={"none"}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={styles.inputIcon}>
            <Icon name="lock" size={25} color="#ffffff" />
            <TextInput
              style={styles.imputs}
              placeholder=" Senha"
              placeholderTextColor={'#ffffff'}
              autoCorrect={false}
              autoCapitalize={"none"}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          <View style={styles.inputIcon}>
            <Icon name="expeditedssl" size={25} color="#ffffff" />
            <TextInput
              style={styles.imputs}
              placeholder=" Confirmar senha"
              placeholderTextColor={'#ffffff'}
              autoCorrect={false}
              secureTextEntry={true}
              autoCapitalize={"none"}
              onChangeText={(text) => setPasswordConfirm(text)}
            />
          </View>

          <TouchableOpacity style={styles.btnRegistrar} onPress={registerUser}>
            <Text style={styles.btnRegistrar_texto}>Registrar</Text>
          </TouchableOpacity>



          <View style={styles.googleContainer}>
            <TouchableOpacity style={styles.btnGoogle} onPress={login_com_o_google}>
              <Icon name="google" size={20} color="#000" />
              <Text style={styles.btnGoogleTexto}>  Entrar com o Google</Text>
            </TouchableOpacity>
            <View style={styles.registrarContainer}>
              <Text style={styles.login}>Já possui conta?</Text>
              <Text onPress={fazLogin} style={styles.nome_Login}>Entrar</Text>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

