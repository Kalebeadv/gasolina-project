import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from "../../config/config.json"
import { styles } from "./css"


export default function Carros({ navigation }) {

    const [DATA, setCars] = useState([]);
    const [userEmail, setUserEmail] = useState(null)

    const Item = ({ item, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
            <Text style={[styles.title, textColor]}>{item.brand +" "+ item.model + "\n Ano: " + item.year + "\n Consumo: " + item.consumo + "\n Combustível: " + item.typefuel}</Text>
        </TouchableOpacity>
    );
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id == selectedId ? "#107878" : "#23cdcd";
        const color = item.id == selectedId ? 'white' : 'black';


        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };
        
    async function exclui(){
        let reqs = await fetch(config.urlRootNode + 'excluiCarros', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: userEmail,
                carId: selectedId
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
            let carros = await AsyncStorage.getItem("CarrosUser");
            let id = await AsyncStorage.getItem("VeiculoSelecionado");
            setCars(JSON.parse(carros))
            setSelectedId(id)
            setUserEmail(userEm)
        }
        getCars();
    }, []);
    //------------------------- Navigate ---------------
    function Mapa() {
        AsyncStorage.setItem("VeiculoSelecionado", String(selectedId));
        navigation.navigate('Mapa', {id : 0});
    }

    //--------------------------------------------------

    return (
        <View style={styles.container}>
            {DATA != [] &&
                <FlatList
                    data={DATA}
                    style={styles.item}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    extraData={selectedId}
                />
            }


            {//-------------------------------- BOTOES DA INTERFACE -------------------------
            }
            <View style={styles.cadastraEExclui}>
            <TouchableOpacity style={styles.excluiVeiculo} onPress={exclui}>
                <Icon name="trash" style={styles.icone} size={25} color="#FF8A76" />
                <Icon name="minus" style={styles.icone} size={25} color="#FF8A76" />
            </TouchableOpacity>
            </View>
        </View>
    )
}