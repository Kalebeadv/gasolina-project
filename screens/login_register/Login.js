import React, { useState } from "react";
import config from "../../config/config.json";
import {
  View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity,
  Text, StyleSheet, Keyboard, Alert
} from "react-native";


//Fazer Login
export default function Login({ navigation }) {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [message, setMessage] = useState(null);

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
      navigation.navigate('MenuPrincipal');
    } else {
      //setMessage('Usuário ou senha inválidos');
      //setTimeout(() => {
        //setMessage(null);
      //}, 3000);
      Alert.alert(
        "Algo inesperado",
        "Email ou Senha invalido"
      )
    }
  }
  function registrar(){
    navigation.navigate('Registrar');
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View>
        <Text style={styles.nome_inicio}>
          Bem Vindo ao Gasolina 
        </Text>
      </View>

      <View style={styles.loginContainer}>
        {message && (
          <Text>{message}</Text>
        )}
        <TextInput
          style={styles.imputs}
          placeholder="Email"
          placeholderTextColor={'white'}
          autoCorrect={false}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.imputs}
          placeholder="Senha"
          placeholderTextColor={'white'}
          autoCorrect={false}
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
        <Text style={styles.esqueci_senha}>
          Esqueci minha senha
        </Text>

        <Text style={styles.registro}>
          Não possui uma conta? <Text onPress={registrar} style={styles.nome_registro}>Registrar</Text>
        </Text>

        <TouchableOpacity style={styles.btnEntrar} onPress={fazLogin}>
          <Text style={styles.btnEntrar_texto}>ENTRAR</Text>
        </TouchableOpacity>

        
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#073535'
  },
  nome_inicio: {
    fontSize: 50,
    marginTop: 30,
    marginBottom: 75,
    color: 'white',
    flexDirection: 'row',
  },
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    width: '90%',
    marginBottom: 70,
    fontSize: 50
  },
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    width: '90%'
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
  esqueci_senha: {
    color: '#2178B6',
    marginLeft: 180,
    marginTop: 4,
  },
  registro: {
    color: 'white',
    fontSize: 15,
    marginTop: 100,
  },
  nome_registro: {
    color: '#2178B6', 
  },
  btnEntrar: {
    backgroundColor: 'white',
    width: '90%',
    height: 50,
    marginBottom: 50,
    borderRadius: 13,
    paddingTop: 10,
    marginTop: 20
  },
  btnEntrar_texto: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20
  }, 
})