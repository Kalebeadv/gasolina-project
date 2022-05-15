import React, { useState, useEffect } from "react";
import config from "../../config/config.json";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from '@react-native-async-storage/async-storage';
import FuelTypeButton from "../../src/components/FuelTypeButton";


export default function CadastrarVeiculo({ navigation }) {
  const [modelo, setModelo] = useState(null);
  const [marca, setMarca] = useState(null);
  const [consumo, setConsumo] = useState(null);
  const [combustivel, setCombustivel] = useState(null);
  const [ano, setAno] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    async function getUser() {
      let email = await AsyncStorage.getItem('email');
      setEmail(email);
    }
    getUser();
  }, []);

  async function getVeiculos() {
    let userEmail = await AsyncStorage.getItem("email")
    let reqs = await fetch(config.urlRootNode + 'carros', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userEmail
      })
    })
    let ress = await reqs.json();
    await AsyncStorage.setItem("CarrosUser", JSON.stringify(ress));
  }

  async function Cadastrar() {
    var reqs = await fetch(config.urlRootNode + 'cadastrarVeiculo', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        modeloVeiculo: modelo,
        marcaVeiculo: marca,
        consumoVeiculo: consumo,
        combustivelVeiculo: combustivel,
        anoVeiculo: ano,
        emailUser: email
      })
    });

    let ress = await reqs.json();

    if (ress == 'sucesso') {
      Alert.alert(
        "Concluido",
        "O cadastro do veiculo foi concluido com sucesso"
      )
      getVeiculos()
      navigation.navigate('Mapa')
    }


  }
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.textoInicioContainer}>
        <Text style={styles.textoInicio}>
          Cadastro Seu Veículos
        </Text>
      </View>

      <View style={styles.loginContainer}>
        <View style={styles.inputIcon}>
          <Icon name="car" size={25} color="#757F7A" />
          <TextInput
            style={styles.inputs}
            placeholder="Modelo"
            placeholderTextColor={'#757F7A'}
            autoCorrect={false}
            onChangeText={(text) => setModelo(text)}
          />
        </View>

        <View style={styles.inputIcon}>
          <Icon name="star" size={25} color="#757F7A" />
          <TextInput
            style={styles.inputs}
            placeholder="Marca"
            placeholderTextColor={'#757F7A'}
            autoCorrect={false}
            onChangeText={(text) => setMarca(text)}
          />
        </View>

        <View style={styles.inputIcon}>
          <Icon name="road" size={25} color="#757F7A" />
          <TextInput
            style={styles.inputs}
            placeholder="Consumo médio"
            placeholderTextColor={'#757F7A'}
            keyboardType="numeric"
            autoCorrect={false}

            onChangeText={(text) => setConsumo(text)}
          />
        </View>

        <View style={styles.inputIcon}>
          <Icon name="tint" size={25} color="#757F7A" />
          <FuelTypeButton
            funcao={setCombustivel}
          />
        </View>

        <View style={styles.inputIcon}>
          <Icon name="calendar" size={25} color="#757F7A" />
          <TextInput
            style={styles.inputs}
            placeholder="Ano"
            placeholderTextColor={'#757F7A'}
            autoCorrect={false}
            keyboardType="numeric"
            onChangeText={(text) => setAno(text)}
          />
        </View>

        <TouchableOpacity style={styles.btnEntrar} onPress={Cadastrar}>
          <Text style={styles.btnEntrar_texto}>Cadastrar Novo Veículo</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  loginContainer: {
    alignItems: 'center',
    width: '90%',
    marginBottom: 70
  },
  inputs: {
    fontSize: 17,
    marginLeft: "2%",
    width: '90%',
    color: '#107878'
  },
  btnEntrar: {
    backgroundColor: '#757F7A',
    width: '90%',
    height: 50,
    marginTop: 20,
    marginBottom: 10,
    paddingTop: 10
  },
  btnEntrar_texto: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 20
  },
  imagemLogo: {
    width: 84,
    height: 120,
  },
  textoInicioContainer: {
    alignItems: 'center',
    alignContent: "center",
    paddingBottom: "5%",
  },
  inputIcon: {
    width: '90%',
    height: 50,
    fontSize: 20,
    marginBottom: "5%",
    borderStyle: 'solid',
    borderColor: '#107878',
    borderWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    padding: 10,
    paddingRight: 2,
    color: '#107878',
    flexDirection: "row"
  },
  textoInicio: {
    fontSize: 30,
    color: '#FF8A76',
    marginTop: "20%"
  },
});
