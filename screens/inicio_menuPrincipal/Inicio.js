import React from "react";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Button, ImageBackground } from "react-native";


export default function Inicio({navigation}) {
  return(
    <KeyboardAvoidingView style={styles.background}>

      <View style={styles.container}>
        <View style={styles.img_logo}>

        <Image style={styles.imagemLogo}
          source={require("../../assets/images/logo.png")}
        />

          <Text style={styles.nome_startup}>
            GASOLINA
          </Text>
          
        </View>

        <View style={styles.viewBtn}>

          <TouchableOpacity style={styles.entrar}>
            <Text 
              style={styles.entrar_text}
              onPress={() => navigation.navigate("Login")}
            >ENTRAR</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.entrar}>
            <Text 
              style={styles.registrar_text} 
              onPress={() => navigation.navigate("Registrar")}
              >REGISTRAR</Text>
          </TouchableOpacity>
        </View>
        
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
    backgroundColor:'#064C4D',
  },
  container:{
    flex: 1,
    flexDirection: 'column'
  },
  img_logo:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop: 50
  },
  nome_startup:{
    color: 'white',
    fontSize: 40,
    marginTop: 20
  },
  imagemLogo:{
    width:140,
    height:200,
    marginTop:250,
  },
  viewBtn:{
    flex:1,
    alignItems:'center',
    width:'70%',
    flexDirection: 'row',
    marginTop: 370,
  },
  entrar:{
    backgroundColor:'#fff',
    width:'45%',
    marginLeft: 13,
    borderRadius:7,
    paddingBottom: 5,
    paddingTop: 5,
  },
  entrar_text:{
    textAlign:'center',
    color:'black',
    fontSize: 20,
  },
  registrar:{
    backgroundColor:'#35aaff',
    width:'50%',
    borderRadius:7
  },
  registrar_text:{
    textAlign:'center',
    color:'black',
    fontSize: 20
  },
  view_nome_empresa:{
    marginBottom: 10,
    alignItems:'center',
  },
  nome_empresa:{
    color: 'white'
  }
});