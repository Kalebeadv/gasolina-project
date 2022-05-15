import React, { useState } from "react";
import config from "../../config/config.json";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "./css"

export default function Registrar({navigation}) {
  const [nome,setNome]=useState(null);
  const [passwordConfirm,setPasswordConfirm]=useState(null);
  const [email,setEmail]=useState(null);
  const [password,setPassword]=useState(null);
  const [message,setMessage]=useState(null);
  function fazLogin() {
    navigation.navigate('Entrar');
  }
  async function registerUser() {
    var reqs = await fetch(config.urlRootNode+'registrar',{
      method: 'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        stNameUser: nome,
        emailUser: email,
        passwordUser: password,
        passwordConfirmUser: passwordConfirm
      })
    });
    let ress=await reqs.json();
    
    if (ress == 'true'){
      await AsyncStorage.setItem( 'email', email);
      await AsyncStorage.setItem( 'pass', password);
      navigation.navigate('Mapa');
      
    }else if(ress == 'false'){
      Alert.alert(
        "Algo inesperado",
        "Usuário já existe"
      );
    }else if(ress == 'Email Invalido'){
      Alert.alert(
        "Algo inesperado",
        "Email Invalido"
      );
    }else if(ress == 'Senha Divergente'){
      Alert.alert(
        "Algo inesperado",
        "As senhas estão diferentes"
      );
    }
  }

  return(
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.logoContainer}>
        <Image style={styles.imagemLogo}
          source={require("../../assets/images/LogoVerde.png")}
        />
        <Image style={styles.backgroundLogin}
          source={require("../../assets/images/backgroundLogin2.jpg")}
        />
      </View>

      <View style={styles.loginContainer}>
        {message && (
          <Text>{message}</Text>
        )}
        <View style={styles.inputIcon}>
          <Icon name="user" size={25} color="#757F7A" />
          <TextInput 
            style={styles.imputs}
            placeholder=" Nome"
            placeholderTextColor={'#757F7A'}
            autoCorrect={false}
            onChangeText={(text)=>setNome(text)}
          />
        </View>
        
        <View style={styles.inputIcon}>
          <Icon name="envelope" size={25} color="#757F7A" />
          <TextInput 
            style={styles.imputs}
            placeholder=" Email"
            placeholderTextColor={'#757F7A'}
            autoCorrect={false}
            autoCapitalize={"none"}
            onChangeText={(text)=>setEmail(text)}
          />
        </View>
        
        <View style={styles.inputIcon}>
          <Icon name="lock" size={25} color="#757F7A" />
          <TextInput 
            style={styles.imputs}
            placeholder=" Senha"
            placeholderTextColor={'#757F7A'}
            autoCorrect={false}
            autoCapitalize={"none"}
            secureTextEntry={true}
            onChangeText={(text)=>setPassword(text)}
          />
        </View>
        
        <View style={styles.inputIcon}>
          <Icon name="expeditedssl" size={25} color="#757F7A"/>
          <TextInput 
            style={styles.imputs}
            placeholder=" Confirmar senha"
            placeholderTextColor={'#757F7A'}
            autoCorrect={false}
            secureTextEntry={true}
            autoCapitalize={"none"}
            onChangeText={(text)=>setPasswordConfirm(text)}
          />
        </View>
        
        <TouchableOpacity style={styles.btnRegistrar} onPress={registerUser}>
          <Text style={styles.btnRegistrar_texto}>REGISTRAR</Text>
        </TouchableOpacity>

        <Text style={styles.login}>
          Já possui uma conta? <Text onPress={fazLogin} style={styles.nome_Login}>Entrar</Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

