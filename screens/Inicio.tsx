import React from "react";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Button, ImageBackground } from "react-native";

export default function Inicio({navigation}) {
  return(
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.quadrado}>
        <View style={styles.viewLogo}>
          <Image style={styles.imagemLogo}
          source={require("../assets/images/logo2.png")}
          />
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
        <View style={styles.nome_empresa}> 
        <Text>Phantom Price™</Text>
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
    backgroundColor:'#365992',
  },
  quadrado:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
    width: 355, 
    backgroundColor:'#FFFFFF', 
  },
  imagemLogo:{
    width:100,
    height:140,
    marginTop:50,
  },
  viewLogo:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  viewBtn:{
    flex:1,
    alignItems:'center',
    width:'90%',
    flexDirection: 'row'
  },
  entrar:{
    backgroundColor:'#35aaff',
    width:'45%',
    marginLeft: 13,
    borderRadius:7,
    paddingBottom: 5,
    paddingTop: 5,
    marginTop: 110,
  },
  entrar_text:{
    textAlign:'center',
    color:'black',
    fontSize: 25,
  },
  registrar:{
    backgroundColor:'#35aaff',
    width:'50%',
    marginBottom: 10,
    borderRadius:7
  },
  registrar_text:{
    textAlign:'center',
    color:'black',
    fontSize: 25
  },
  nome_empresa:{
    marginBottom: 10,
    
  }
});