import React, { useState } from "react";
import config from "../../config/config.json";
<<<<<<< HEAD
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

=======
import {
  View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity,
  Text, StyleSheet, Keyboard
} from "react-native";
>>>>>>> 049e52b6b9141c15d0c2213098d55dbfebba1246


<<<<<<< HEAD
  const [email,setEmail]=useState(null);
  const [password,setPassword]=useState(null);
  const [message,setMessage]=useState(null);

  //Fazer Login
  async function fazLogin()
  {
    let reqs = await fetch(config.urlRootPhp+'Controller.php',{
        method: 'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            emailUser: email,
            passwordUser: password
        })
    });
    let ress = await reqs.json();
    Keyboard.dismiss();
    if(ress || ress == null){
        navigation.navigate('MenuPrincipal');
    }else{
        setMessage('Usuário ou senha inválidos');
        setTimeout(()=>{
            setMessage(null);
        },3000);
    }
  }
  return(
=======
export default function Login({ navigation }) {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [message, setMessage] = useState(null);

  //Fazer login

  async function doLogin() {
    let reqs = await fetch(config.urlRootPhp + 'Controller.php', {
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
    console.log(ress);

    Keyboard.dismiss();
    if (ress) {
      navigation.navigate('MenuPrincipal');
    } else {
      setMessage('Usuário ou senha inválidos');
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
  }
  return (
>>>>>>> 049e52b6b9141c15d0c2213098d55dbfebba1246
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.viewLogo}>
        <Image style={styles.imagemLogo}
          source={require("../../assets/images/Logo.png")}
        />
      </View>
      <View style={styles.loginContainer}>
<<<<<<< HEAD
        {message && (
          <Text>{message}</Text>
        )}
        <TextInput 
          style={styles.imputs}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={(text)=>setEmail(text)}
=======

        {message && (
          <Text>{message}</Text>
        )}
        <TextInput
          style={styles.imputs}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
>>>>>>> 049e52b6b9141c15d0c2213098d55dbfebba1246
        />
        <TextInput
          style={styles.imputs}
          placeholder="Senha"
          autoCorrect={false}
<<<<<<< HEAD
          onChangeText={(text)=>setPassword(text)}
=======
          onChangeText={(text) => setPassword(text)}
>>>>>>> 049e52b6b9141c15d0c2213098d55dbfebba1246
        />
        <TouchableOpacity style={styles.btnEntrar} onPress={fazLogin}>
          <Text style={styles.btnEntrar_texto}>ENTRAR</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.nome_empresa}>Phantom Price™</Text>
        </View>
      </View>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#064C4D'
  },
  imagemLogo: {
    width: 110,
    height: 150,
    marginBottom: 40
  },
  viewLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
<<<<<<< HEAD
  loginContainer:{
    flex:1,
    alignItems:'center',
    width:'90%',
    marginBottom: 70
=======
  viewLogo_text: {
    fontSize: 50
  },
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    width: '90%'
>>>>>>> 049e52b6b9141c15d0c2213098d55dbfebba1246
  },
  imputs: {
    width: '90%',
    marginBottom: 20,
    fontSize: 25,
    borderStyle: 'solid',
    borderColor: 'white',
    borderBottomWidth: 2,
    color: 'white'
  },
  btnEntrar: {
    backgroundColor: 'white',
    width: '35%',
    height: 34,
    marginBottom: 20,
    borderRadius: 7,
    paddingTop: 3
  },
  btnEntrar_texto: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20
  },
<<<<<<< HEAD
  nome_empresa:{
    marginTop: 22,
=======
  view_nome_empresa: {
    marginTop: 90,
    alignItems: 'center',
  },
  nome_empresa: {
>>>>>>> 049e52b6b9141c15d0c2213098d55dbfebba1246
    color: 'white'
  }
});