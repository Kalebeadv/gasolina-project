import React, { useState } from "react";
import config from "../../config/config.json";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
export default function Registrar({navigation}) {
  const [nome,setNome]=useState(null);
  const [sobrenome,setSobrenome]=useState(null);
  const [email,setEmail]=useState(null);
  const [password,setPassword]=useState(null);
  const [message,setMessage]=useState(null);

  async function registerUser() {
    var reqs = await fetch(config.urlRootNode+'registrar',{
      method: 'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        stNameUser: nome,
        lsNameUser: sobrenome,
        emailUser: email,
        passwordUser: password
      })
    });
    let ress=await reqs.json();
    
    if (ress == 'true'){
      navigation.navigate('MenuPrincipal');
    }else if(ress == 'false'){
      Alert.alert(
        "Algo inesperado",
        "Usuário já existe"
      )
    }else if(ress == 'Email Invalido'){
      Alert.alert(
        "Algo inesperado",
        "Email Invalido"
      )
    }
  }

  return(
    <KeyboardAvoidingView style={styles.background}>
      <View>
        <Text style={styles.texto_registro}>
          Registre-se para comece a economizar
        </Text>
      </View>
      <View style={styles.loginContainer}>
        {message && (
          <Text>{message}</Text>
        )}
        <TextInput 
          style={styles.imputs}
          placeholder="Nome"
          placeholderTextColor={'white'}
          autoCorrect={false}
          onChangeText={(text)=>setNome(text)}
        />
        <TextInput 
          style={styles.imputs}
          placeholder="Sobrenome"
          placeholderTextColor={'white'}
          autoCorrect={false}
          onChangeText={(text)=>setSobrenome(text)}
        />
        <TextInput 
          style={styles.imputs}
          placeholder="Email"
          placeholderTextColor={'white'}
          autoCorrect={false}
          onChangeText={(text)=>setEmail(text)}
        />
        <TextInput 
          style={styles.imputs}
          placeholder="Senha"
          placeholderTextColor={'white'}
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={(text)=>setPassword(text)}
        />
        <TouchableOpacity style={styles.btnEntrar} onPress={registerUser}>
          <Text style={styles.btnEntrar_texto}>REGISTRAR</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#073535'
  },
  texto_registro: {
    fontSize: 50,
    color: 'white',
    marginTop: 30
  },  
  loginContainer:{
    flex:1,
    alignItems:'center',
    width:'90%',
    marginBottom: 70
  },
  imputs: {
    width: '90%',
    height: 50,
    marginTop: 20,
    fontSize: 20,
    borderStyle: 'solid',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 13,
    padding: 10,
    color: 'white'
  },
  btnEntrar:{
    backgroundColor:'white',
    width:'90%',
    height:50,
    marginTop: 20,
    borderRadius: 13,
    paddingTop: 10
  },
  btnEntrar_texto:{
    textAlign:'center',
    color:'black',
    fontSize: 20
  },
});
