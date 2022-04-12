import React, { useState } from "react";
import config from "../../config/config.json";
import {
  View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity,
  Text, StyleSheet, Keyboard, Alert
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from '@react-native-async-storage/async-storage';


//Fazer Login
export default function Login({ navigation }) {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [message, setMessage] = useState(null);


// função de login -----------------------------------------------

  async function fazLogin() {
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
    Keyboard.dismiss();
    if (ress || ress == null) {
      await AsyncStorage.setItem( 'email', email);
      await AsyncStorage.setItem( 'pass', password);
      navigation.navigate("MenuPrincipal");
    } else {
      Alert.alert(
        "Algo inesperado",
        "Email ou Senha invalido"
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

  function login_com_o_google()
  {
    navigation.navigate('LoginComGoogle')
  }
//fim ***********************************************************************


  return (
    <KeyboardAvoidingView style={styles.background}>

      <View style={styles.logoContainer}>
        <Image style={styles.imagemLogo}
          source={require("../../assets/images/LogoVerde.png")}
        />
        <Text style={styles.gasolina}>Ga$olina</Text>
      </View>

      <View style={styles.inputContainer}>

        {message && (
          <Text>{message}</Text>
        )}
        <Text style={styles.textoES}>E-Mail</Text>
        <View style={styles.loginEmail}>
          <Icon name="envelope-o" size={25} color="#107878" />
          <TextInput
            style={styles.textInput}
            autoCorrect={false}
            autoCapitalize={"none"}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        <Text style={styles.textoES}>Senha</Text>
        <View style={styles.loginPass}>
          <Icon name="lock" size={25} color="#107878" />
          <TextInput
            style={styles.textInput}
            autoCorrect={false}
            secureTextEntry={true}
            autoCapitalize={"none"}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <Text style={styles.esqueci_senha} onPress={esqueci_senha}>
          Esqueci minha senha
        </Text>

        <TouchableOpacity style={styles.btnEntrar} onPress={fazLogin}>
          <Text style={styles.btnTexto}>Entrar</Text>
        </TouchableOpacity>
      
        <Text style={styles.ou}>────── Ou ──────</Text>
        
        <TouchableOpacity style={styles.btnGoogle} onPress={login_com_o_google}>
          <Icon name="google" size={30} color="#ffffff"/>
          <Text style={styles.btnTexto}>  Entrar com o Google</Text>
        </TouchableOpacity>

        <Text style={styles.registro}>
          Não possui uma conta? <Text onPress={registrar} style={styles.nome_registro}>Registrar</Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  inputContainer: {
    alignItems: 'center',
    width:"90%",
    marginBottom: "20%",
    fontSize: 50
  },
  esqueci_senha: {
    color: '#2178B6',
    marginLeft: "40%",
    marginTop: 4,
  },
  registro: {
    color: '#107878',
    fontSize: 15,
    marginTop: 20,
  },
  nome_registro: {
    color: '#2178B6',
  },
  btnEntrar: {
    backgroundColor: '#107878',
    borderStyle: 'solid',
    width: '90%',
    height: 50,
    marginBottom: "5%",
    marginTop:"8%",
    borderRadius: 8,
    paddingTop: 10,
  },
  btnTexto: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 20
  },
  loginEmail: {
    width: '90%',
    height: 50,
    fontSize: 20,
    borderStyle: 'solid',
    borderColor: '#107878',
    borderWidth: 1,
    borderRadius: 8,
    borderRightWidth: 1,
    borderBottomWidth: 3,
    padding: 10,
    color: '#107878',
    flexDirection: "row",
    marginBottom: "5%"
  },
  loginPass: {
    width: '90%',
    height: 50,
    fontSize: 20,
    borderStyle: 'solid',
    borderColor: '#107878',
    borderWidth: 1,
    borderRadius: 8,
    borderRightWidth: 1,
    borderBottomWidth: 3,
    padding: 10,
    color: '#107878',
    flexDirection: "row"
  },
  logoContainer: {
    alignItems: 'center',
    alignContent: "center",
    marginBottom: "2%",
    marginTop: "8%"
  },
  imagemLogo: {
    width:80,
    height:120,
    marginTop: "10%",
  },
  gasolina: {
    textAlign: "center",
    fontSize: 30,
    color: '#107878'
  },
  btnGoogle:{
    justifyContent:"center",
    backgroundColor: '#107878',
    borderStyle: 'solid',
    width: '90%',
    height: 50,
    borderRadius: 8,
    flexDirection: "row",
    paddingTop: 10,
  },
  ou:{
    fontSize:15,
    color:'#107878',
    marginBottom:"5%"
  },
  textoES:{
    color:'#107878',
    fontSize:15,
    marginRight:"75%",
  },
  textInput:{
    fontSize:17,
    width:"90%",
    color:'#107878',
    marginLeft:"2%"
  },
})