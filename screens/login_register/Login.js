import React from "react";
import config from "../../config/config.json";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {

    const [user,setUser]=useState(null);
    const [password,setPassword]=useState(null);
    const [message,setMessage]=useState(null);

    //Fazer Login
    async function doLogin()
    {
        let reqs = await fetch(config.urlRootPhp+'Controller.js',{
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                nameUser: user,
                passwordUser: password
            })
        });
        let ress = await reqs.json();
        Keyboard.dismiss();
       if(ress){
           navigation.navigate('Home');
       }else{
            setMessage('Usuário ou senha inválidos');
            setTimeout(()=>{
                setMessage(null);
            },3000);
       }
    }
    
  return(
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.viewLogo}>
        <Image style={styles.imagemLogo}
        source={require("../../assets/images/Logo.png")}
        />
      </View>
      <View style={styles.loginContainer}>
        <TextInput 
          style={styles.imputs}
          placeholder="Email"
          autoCorrect={false}
          onChangeText={()=>{}}
        />
        <TextInput 
          style={styles.imputs}
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={()=>{}}
        />

        <TouchableOpacity style={styles.btnEntrar}>
          <Text 
            style={styles.btnEntrar_texto}
          >ENTRAR</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.btnEntrar} onpress={doLogin}>
          <Text style={styles.btnEntrar_texto}>ENTRAR</Text>

        </TouchableOpacity>
        <View style={styles.view_nome_empresa}>
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
  viewLogo_text:{
    fontSize:50
  },
  loginContainer:{
    flex:1,
    alignItems:'center',
    width:'90%'
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
  view_nome_empresa:{
    marginTop: 90,
    alignItems:'center',
  },
  nome_empresa:{
    color: 'white'
  }
});