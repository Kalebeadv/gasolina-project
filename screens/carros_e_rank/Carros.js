import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from "../../config/config.json"


export default function Carros({ navigation }) {

    const [cars, setCars] = useState([]);
    

    useEffect(() => {
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
            console.log(ress)
            await AsyncStorage.setItem( "CarrosUser", JSON.stringify(reqs));
            setCars(reqs)
        }
        getVeiculos()
    }, []);

    
    
    return (
            <View style={styles.container}>

                    {cars.length > 0 &&
                        cars.map((m) => {
						    return (
                                <Text value={m.model} style={styles.texto}>
                                    
                                </Text>
						    );
                    })}

                {//-------------------------------- BOTOES DA INTERFACE -------------------------
                }
                <TouchableOpacity style={styles.rota} onPress={() => navigation.navigate("CadastroVeiculo")}>
                    <Text style={styles.nome_rota}>
                        Cadastrar Veículo
                    </Text>
                </TouchableOpacity>

                <View style={styles.btnViewContainer}>
                    <TouchableOpacity style={styles.btnContainer} onPress={() => { navigation.navigate('Rank') }}>
                        <Text><Icon name="trophy" size={25} color="#fff" /></Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnContainer} onPress={() => { navigation.navigate('Mapa') }}>
                        <Text style={styles.textoRota}>Rota <Icon name="dollar" size={25} color="#fff"></Icon></Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnRotaContainer} onPress={() => { navigation.navigate('Carros') }}>
                        <Text><Icon name="car" style={styles.iconContainer} size={25} color="#000" /></Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center'
        },
        texto: { // trocar o nome quando colocar o select de carros
            fontSize: 15,
            color: '#107878',
            marginTop: '50%' // mudar apenas aqui para emplementar o select dos carros
        },
        rota: {
            backgroundColor: '#107878',
            width: '90%',
            height: 50,
            marginBottom: '50%',
            borderRadius: 13,
            paddingTop: 10,
            marginTop: 20,

        },
        nome_rota: {
            textAlign: 'center',
            color: 'white',
            fontSize: 20
        },
        btnViewContainer: {
            display: 'flex',
            flexDirection: 'row',
            zIndex: 9,
            width: '90%',
            height: '10%',
            justifyContent: 'space-around',
            marginBottom: '6%',
            backgroundColor: '#107878',
            borderRadius: 30,
        },
        btnContainer: {
            width: '25%',
            borderRadius: 30,
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
        },
        btnRotaContainer: {
            width: '25%',
            height: '80%',
            backgroundColor: '#fff',
            borderRadius: 30,
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '2%',

        },
        textoRota: {
            fontSize: 20,
            color: '#fff'
        },
    }); 