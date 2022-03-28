import React from "react";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function MenuPrincipal({navigation}) {
  return (
    <View style={styles.background}>
      <TouchableOpacity style={styles.rota} onPress={() => navigation.navigate("Mapa")}>
        <Text style={styles.nome_rota}>
          Buscar rota
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rota} onPress={() => navigation.navigate("CadastroVeiculo")}>
        <Text style={styles.nome_rota}>
          Cadastrar Veículo
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#073535'
  },
  rota: {
    backgroundColor: 'white',
    width: '50%',
    height: 50,
    marginBottom: 50,
    borderRadius: 13,
    paddingTop: 10,
    marginTop: 20
  },
  nome_rota: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20
  }
});