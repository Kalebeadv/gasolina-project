import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from "../../config/config.json"
import { styles } from "./css"
import FuelTypeButton from "../../src/components/FuelTypeButton";
import VehicleTypeButton from "../../src/components/VehicleTypeButton";


export default function Carros({ route, navigation }) {

    const [modelo, setModelo] = useState(null);
    const [marca, setMarca] = useState(null);
    const [consumo, setConsumo] = useState(null);
    const [combustivel, setCombustivel] = useState(null);
    const [ano, setAno] = useState(null);
    const [typeVehicle, setTypeVehicle] = useState(null)

    const [carros, setCars] = useState([]);
    const [car, setCar] = useState([]);
    const [userEmail, setUserEmail] = useState(null);
    const [selectedId, setSelectedId] = useState(null);

    async function exclui() {
        let reqs = await fetch(config.urlRootNode + 'excluiCarros', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: userEmail,
                carId: route.carid
            })
        })
        let ress = await reqs.json();
        await AsyncStorage.setItem("CarrosUser", JSON.stringify(ress));
        setCars(ress)
        Mapa()
        return;
    }

    useEffect(() => {
        async function getCars() {
            let userEm = await AsyncStorage.getItem("email");
            let carro = await AsyncStorage.getItem("CarrosUser");
            
            
            setCars(JSON.parse(carro));
            setUserEmail(userEm);
        }
        getCars();
    }, [selectedId]);

    useEffect(async () => {
        let id = await AsyncStorage.getItem("editVeiculo");
        let carro;
        console.log(carros + " ===== " + id);
        for (let i = 0; i < carros.length; i++ ){
            if (carros[i].id == id){
                carro = carros[i]
            }
        }
        console.log(carro)
        setSelectedId(id);
        setCar(carro);
    }, [carros])

    //------------------------- Navigate ---------------
    function Mapa() {
        AsyncStorage.setItem("VeiculoSelecionado", JSON.stringify(carros));
        navigation.navigate('Mapa', { id: 0 });
    }

    //--------------------------------------------------

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.textoInicioContainer}>
                <Text style={styles.textoInicio}>
                    Editar Veículo
                </Text>
            </View>

            
            {car && <View style={styles.loginContainer}>
                <View style={styles.inputIcon}>
                    <Icon name="tint" size={25} color="#757F7A" />
                    <VehicleTypeButton
                        funcao={setTypeVehicle}
                    />
                </View>

                <View style={styles.inputIcon}>
                    <Icon name="car" size={25} color="#757F7A" />
                    <TextInput
                        style={styles.inputs}
                        defaultValue={car.model}
                        placeholderTextColor={'#757F7A'}
                        autoCorrect={false}
                        onChangeText={(text) => setModelo(text)}
                    />
                </View>

                <View style={styles.inputIcon}>
                    <Icon name="star" size={25} color="#757F7A" />
                    <TextInput
                        style={styles.inputs}
                        defaultValue={car.brand}
                        placeholderTextColor={'#757F7A'}
                        autoCorrect={false}
                        onChangeText={(text) => setMarca(text)}
                    />
                </View>

                <View style={styles.inputIcon}>
                    <Icon name="road" size={25} color="#757F7A" />
                    <TextInput
                        style={styles.inputs}
                        defaultValue={String(car.consumo)}
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
                        defaultValue={String(car.year)}
                        placeholderTextColor={'#757F7A'}
                        autoCorrect={false}
                        keyboardType="numeric"
                        onChangeText={(text) => setAno(text)}
                    />
                </View>
            </View>}

            <View style={styles.loginContainer}>
                {//-------------------------------- BOTOES DA INTERFACE -------------------------
                }
                <View style={styles.cadastraEExclui}>
                    <TouchableOpacity style={styles.excluiVeiculo} onPress={exclui}>
                        <Icon name="trash" style={styles.icone} size={25} color="#fff" />
                        <Icon name="minus" style={styles.icone} size={25} color="#fff" />
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}