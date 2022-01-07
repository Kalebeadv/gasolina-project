import React from "react";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function () {
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
        <TouchableOpacity>
          <Text>Entrar</Text>
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
    width:150,
    height:150,
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
    justifyContent:'center',
    alignItems:'center',
    width:'90%'
  },
  imputs:{
    backgroundColor:'#fff',
    width:'90%',
    marginBottom: 20,
    color:'black',
    fontSize: 30,
    borderRadius:7
  }
});