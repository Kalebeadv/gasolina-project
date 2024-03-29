import React, { useState, useEffect } from "react";
import config from "../../config/config.json";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from '@react-native-async-storage/async-storage';
import FuelTypeButton from "../../src/components/FuelTypeButton";
import VehicleTypeButton from "../../src/components/VehicleTypeButton";
import { styles } from "./css"

export default function CadastrarVeiculo({ navigation }) {
  const [modelo, setModelo] = useState(null);
  const [marca, setMarca] = useState(null);
  const [consumo, setConsumo] = useState(null);
  const [combustivel, setCombustivel] = useState(null);
  const [ano, setAno] = useState(null);
  const [email, setEmail] = useState(null);
  const [typeVehicle, setTypeVehicle] = useState(null)

  useEffect(() => {
    async function getUser() {
      let email = await AsyncStorage.getItem('email');
      setEmail(email);
    }
    getUser();
  }, []);

  async function getVeiculos() {
    let reqs = await fetch(config.urlRootNode + 'carros', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email
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
        emailUser: email,
        typeVeh: typeVehicle
      })
    });

    let ress = await reqs.json();

    if (ress == 'sucesso') {
      Alert.alert(
        "Concluido",
        "O cadastro do veiculo foi concluido com sucesso"
      )
      await getVeiculos()
      navigation.navigate('Carros', {reload : "true"})
    }


  }
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.voltarContainer}>
        <Icon name="arrow-left" size={25} color="#757F7A" onPress={() => navigation.navigate("Carros")}/>
      </View>

      <View style={styles.textoInicioContainer}>
        <Text style={styles.textoInicio}>
          Cadastre o seu veículo
        </Text>
      </View>


      <View style={styles.loginContainer}>
        <View style={styles.inputIcon}>
          <Icon name="dashboard" size={25} color="#757F7A" />
          <VehicleTypeButton
            funcao={setTypeVehicle}
          />
        </View>

        <View style={styles.inputIcon}>
          <Icon name="gear" size={25} color="#757F7A" />
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

        <TouchableOpacity style={styles.btnCadastro} onPress={Cadastrar}>
          <Text style={styles.btnCadastro_texto}>Cadastrar novo veículo</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
}

