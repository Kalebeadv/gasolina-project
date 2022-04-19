import React, { useState, useEffect } from "react";
import {
  View, KeyboardAvoidingView,
  Image, TextInput, TouchableOpacity,
  Text, StyleSheet, Button, ImageBackground,
}
  from "react-native";
import { urlRootPhp } from "../../config/config.json";
import AsyncStorage from '@react-native-async-storage/async-storage';


/*
export default function AreaRestrita() {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  useEffect(() => {
    async function getUser() {
      let response = await AsyncStorage.getItem('userData');
      let json = JSON.parse(response);
      setEmail(json.email);
      setPass(json.password)
    }
    getUser();
  }, []);
  return (
    <View>
      <Text>Essa é a área restrita</Text>
      <Text>Seja bem vindo {user}</Text>
    </View>
  );
}
*/

export default function Inicio({ navigation }) {

  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);


  useEffect(() => {
    async function getUser() {
      let email = await AsyncStorage.getItem('email');
      let senha = await AsyncStorage.getItem('pass');
      if (email == undefined || email == null) {
        navigation.navigate("Entrar");
      } else {
        setEmail(email);
        setPass(senha);
      }
    }
    getUser();
  }, []);

  async function fazLogin() {
    let reqs = await fetch(urlRootPhp + 'Controller.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        emailUser: email,
        passwordUser: pass
      })
    });

    let ress = await reqs.json();

    if (ress || ress == null) {
      navigation.navigate("MenuPrincipal");
      return;
    } else {
      navigation.navigate("Entrar");
      return;
    }
  }

  fazLogin()

  return (
    <View style={styles.container}>
      <Image style={styles.imagemLogo}
        source={require("../../assets/images/LogoVerde.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems:"center",
    justifyContent:"center",
    marginTop:"50%"
  },
  imagemLogo: {
    width: 80,
    height: 120
  },
});