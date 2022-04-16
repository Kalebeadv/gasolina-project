import React, { useState } from "react";
import config from "../../config/config.json";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Registrar({navigation}) {
  const [nome,setNome]=useState(null);
  const [passwordConfirm,setPasswordConfirm]=useState(null);
  const [email,setEmail]=useState(null);
  const [password,setPassword]=useState(null);
  const [message,setMessage]=useState(null);
  function forLogin() {
    navigation.navigate('Login');
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
      navigation.navigate('MenuPrincipal');
      
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
        <Text style={styles.texto_logo}>
          Ga$olina
        </Text>
      </View>
      <View style={styles.loginContainer}>
        {message && (
          <Text>{message}</Text>
        )}
        <View style={styles.inputIcon}>
          <Icon name="user" size={25} color="#107878" />
          <TextInput 
            style={styles.imputs}
            placeholder=" Nome"
            placeholderTextColor={'#107878'}
            autoCorrect={false}
            onChangeText={(text)=>setNome(text)}
          />
        </View>
        
        <View style={styles.inputIcon}>
          <Icon name="envelope" size={25} color="#107878" />
          <TextInput 
            style={styles.imputs}
            placeholder=" Email"
            placeholderTextColor={'#107878'}
            autoCorrect={false}
            autoCapitalize={"none"}
            onChangeText={(text)=>setEmail(text)}
          />
        </View>
        
        <View style={styles.inputIcon}>
          <Icon name="lock" size={25} color="#107878" />
          <TextInput 
            style={styles.imputs}
            placeholder=" Senha"
            placeholderTextColor={'#107878'}
            autoCorrect={false}
            autoCapitalize={"none"}
            secureTextEntry={true}
            onChangeText={(text)=>setPassword(text)}
          />
        </View>
        
        <View style={styles.inputIcon}>
          <Icon name="expeditedssl" size={25} color="#107878"/>
          <TextInput 
            style={styles.imputs}
            placeholder=" Confirmar senha"
            placeholderTextColor={'#107878'}
            autoCorrect={false}
            secureTextEntry={true}
            autoCapitalize={"none"}
            onChangeText={(text)=>setPasswordConfirm(text)}
          />
        </View>
        
        <TouchableOpacity style={styles.btnEntrar} onPress={registerUser}>
          <Text style={styles.btnEntrar_texto}>REGISTRAR</Text>
        </TouchableOpacity>

        <Text style={styles.login}>
          Já possui uma conta? <Text onPress={forLogin} style={styles.nome_Login}>Entrar</Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#ffffff'
  },
  texto_logo: {
    fontSize: 35,
    color: '#107878',
  },  
  loginContainer:{
    alignItems:'center',
    width:'90%',
    marginBottom: 70,
    marginTop: "10%"
  },
  imputs: {
    fontSize: 17,
    marginLeft:"2%",
    width:'90%',
    color:'#107878'
  },
  btnEntrar:{
    backgroundColor:'#107878',
    width:'90%',
    height:50,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 8,
    paddingTop: 10
  },
  btnEntrar_texto:{
    textAlign:'center',
    color:'#ffffff',
    fontSize: 20
  },
  imagemLogo: {
    width:84,
    height:120,
  },
  logoContainer: {
    alignItems: 'center',
    alignContent: "center",
    paddingBottom: "5%",
    marginTop: "10%"
  },
  login: {
    color: '#107878',
    fontSize: 15,
    marginTop: 10,
  },
  nome_Login: {
    color: '#2178B6',
  },
  inputIcon:{
    width: '90%',
    height: 50,
    fontSize: 20,
    marginBottom:"3%",
    borderStyle: 'solid',
    borderColor: '#107878',
    borderWidth: 1,
    borderRadius: 8,
    borderRightWidth: 1,
    borderBottomWidth: 3,
    padding: 10,
    color: '#107878',
    flexDirection: "row"
  }
});
