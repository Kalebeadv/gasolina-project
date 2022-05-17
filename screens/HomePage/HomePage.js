import React, { useState } from "react";
import config from "../../config/config.json";
import {
  View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity,
  Text, StyleSheet, Keyboard, Alert, Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "./css"
import Background from "../../assets/SvgImages/BackgrondHomePage.svg"
import Logo from "../../assets/SvgImages/LogoVerde.svg"



//Fazer Login
export default function HomePage({ navigation }) {

 

  // paginas do navigate  *****************************************************
  function Entrar() {
    navigation.navigate('Entrar');
  }
  //fim ***********************************************************************


  return (
    <KeyboardAvoidingView style={styles.background}>
      <View >
        <Background style={styles.svgBack} width={Dimensions.get("screen").width +150 } height={Dimensions.get("screen").height + 150} />
        <View style={styles.EntrarContainer}>
            <Logo width={130} height={130}/>
            <Text style={styles.gasolina}>Ga$olina</Text>
        </View>
        <View style={styles.comecarContainer}>
            <TouchableOpacity style={styles.btnComecar} onPress={Entrar}>
                <Text style={styles.textoComecar}>Começar</Text>
            </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

