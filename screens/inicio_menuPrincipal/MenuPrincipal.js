import React from "react";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function MenuPrincipal({navigation}) {
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.viewLogo}>
        <Image style={styles.imagemLogo}
          source={require("../assets/images/Logo.png")}
        />
        <Text style={styles.viewLogo_text}>Ga$olina</Text>
      </View>

      <TouchableOpacity style={styles.entrar}>
        <Text
          onPress={() => navigation.navigate("Mapa")}
        >Buscar rota</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'cyan'
  },
  imagemLogo: {
    width: 150,
    height: 150,
  },
  viewLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewLogo_text: {
    fontSize: 50
  }
});