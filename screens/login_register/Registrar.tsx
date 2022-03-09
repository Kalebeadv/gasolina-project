import React, { useState } from "react";
import config from "../config/config.json";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
export default function Registrar() {
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
    setMessage(ress);
  }

  return(
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.viewLogo}>
        <Image style={styles.imagemLogo}
        source={require("../../assets/images/Logo.png")}
        />
      </View>
      <View style={styles.loginContainer}>
        {message && (
          <Text>{message}</Text>
        )}
        <TextInput 
          style={styles.imputs}
          placeholder="Nome"
          autoCorrect={false}
          onChangeText={(text)=>setNome(text)}
        />
        <TextInput 
          style={styles.imputs}
          placeholder="Sobrenome"
          autoCorrect={false}
          onChangeText={(text)=>setSobrenome(text)}
        />
        <TextInput 
          style={styles.imputs}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={(text)=>setEmail(text)}
        />
        <TextInput 
          style={styles.imputs}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={(text)=>setPassword(text)}
        />
        <TouchableOpacity style={styles.btnEntrar} onPress={registerUser}>
          <Text style={styles.btnEntrar_texto}>REGISTRAR</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.nome_empresa}>Phantom Price™</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#064C4D'
  },
  imagemLogo:{
    width: 110,
    height: 150,
    marginBottom: 40
  },
  viewLogo:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  loginContainer:{
    flex:1,
    alignItems:'center',
    width:'90%',
    marginBottom: 70
  },
  imputs:{
    width:'90%',
    marginBottom: 20,
    fontSize: 25,
    borderStyle: 'solid',
    borderColor: 'white',
    borderBottomWidth: 2,
    color: 'white'
  },
  btnEntrar:{
    backgroundColor:'white',
    width:'35%',
    height:34,
    marginBottom: 20,
    borderRadius:7,
    paddingTop: 3
  },
  btnEntrar_texto:{
    textAlign:'center',
    color:'black',
    fontSize: 20
  },
  nome_empresa:{
    marginTop: 22,
    color: 'white'
  }
});
