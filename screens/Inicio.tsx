import React from "react";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Button } from "react-native";

export default function Inicio({navigation}) {
  return(
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.viewLogo}>
        <Image style={styles.imagemLogo}
        source={require("../assets/images/Logo.png")}
        />
        <Text style={styles.viewLogo_text}>Ga$olina</Text>
      </View>
      <View style={styles.viewBtn}>
        <TouchableOpacity style={styles.entrar}>
          <Text 
            style={styles.entrar_text}
            onPress={() => navigation.navigate("Login")}
          >Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.entrar}>
          <Text 
            style={styles.registrar_text} 
            onPress={() => navigation.navigate("Registrar")}
            >Registrar</Text>
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
  viewBtn:{
    flex:1,
    alignItems:'center',
    width:'90%'
  },
  entrar:{
    backgroundColor:'#35aaff',
    width:'90%',
    marginBottom: 20,
    borderRadius:7
  },
  entrar_text:{
    textAlign:'center',
    color:'black',
    fontSize: 30,
  },
  registrar:{
    backgroundColor:'#35aaff',
    width:'90%',
    marginBottom: 20,
    borderRadius:7
  },
  registrar_text:{
    textAlign:'center',
    color:'black',
    fontSize: 30,
  }

});