import React from "react";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Login() {
  return(
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.viewLogo}>
        <Image style={styles.imagemLogo}
        source={require("../assets/images/Logo.png")}
        />
        <Text style={styles.viewLogo_text}>Ga$olina</Text>
      </View>
      <View style={styles.loginContainer}>
        <TextInput 
          style={styles.imputs}
          placeholder="Nome"
          autoCorrect={false}
          onChangeText={()=>{}}
        />
        <TextInput 
          style={styles.imputs}
          placeholder="Sobrenome"
          autoCorrect={false}
          onChangeText={()=>{}}
        />
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
          <Text style={styles.btnEntrar_texto}>Registrar</Text>
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
    backgroundColor:'cyan'
  },
  imagemLogo:{
    width:100,
    height:100,
  },
  viewLogo:{
    flex: 0.5,
    justifyContent:'center',
    alignItems:'center',
  },
  viewLogo_text:{
    fontSize:30
  },
  loginContainer:{
    flex:1,
    alignItems:'center',
    width:'90%'
  },
  imputs:{
    backgroundColor:'#fff',
    width:'90%',
    marginTop: 0,
    marginBottom: 20,
    color:'black',
    fontSize: 30,
    borderRadius:7
  },
  btnEntrar:{
    backgroundColor:'#35aaff',
    width:'90%',
    marginBottom: 20,
    borderRadius:7
  },
  btnEntrar_texto:{
    color:'black',
    fontSize: 30,
    textAlign:'center'
  }

});