import { 
    View, 
    KeyboardAvoidingView, 
    Image, 
    TextInput, 
    TouchableOpacity, 
    Text, 
    FlatList,
    Dimensions
} from "react-native";

import React, { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from "../../config/config.json";
import { styles } from "./css"

import Background from "../../assets/SvgImages/cars_rank.svg"

export default function Carros({ route, navigation }) {

    const [DATA, setCars] = useState([]);

    const Item = ({ item, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
            <View style={styles.itemContainer}>
                <Text style={[styles.title, textColor]}>{item.brand +" "+ item.model}</Text>
                <Icon style={styles.pincelIcon} onPress={() => navigation.navigate("ExcluiCarros")} name="pencil" size={25} color="#ffffff" />
            </View>
            <Text style={[styles.info, textColor]}>{"\n Ano: " + item.year + "\n Consumo: " + item.consumo + "\n Combustível: " + item.typefuel}</Text>
        </TouchableOpacity>
    );
    const [selectedId, setSelectedId] = useState([]);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id == selectedId.id ? "#FF8A76" : "#757F7A";
        const color = item.id == selectedId.id ? 'white' : 'white';
        AsyncStorage.setItem("VeiculoSelecionado", JSON.stringify(item));

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };
        


    useEffect(() => {
        async function getCars() {
            let userEmail = await AsyncStorage.getItem("email")
            let carros = await AsyncStorage.getItem("CarrosUser");
            let id = await AsyncStorage.getItem("VeiculoSelecionado")
            if (typeof(carros) != "string") {
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
                setCars(ress)
                return;
            }else{
                setCars(JSON.parse(carros))
                setSelectedId(JSON.stringify(id))
            }
        }
        getCars();
        

    }, []);

    //------------------------- Navigate ---------------
    function Mapa() {
        navigation.navigate('Mapa', {car : selectedId});
    }

    function Rank() {
        navigation.navigate('Rank');
    }

    // funcoes do navigation 
    function go_to_mapa(){ navigation.navigate("Mapa") }
    function CadastraCarro(){ navigation.navigate("CadastroVeiculo") }
    function Rank(){ navigation.navigate("Rank") }
    function Mapa(){ navigation.navigate("Mapa") }

    //--------------------------------------------------

    return (
        <View style={styles.container}>
            <View style={styles.carrosContainer}>
                {DATA != [] &&
                    <FlatList
                        data={DATA}
                        style={styles.item}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        extraData={selectedId.id}
                    />
                }
            </View>


            {//-------------------------------- BOTOES DA INTERFACE -------------------------
            }
            <View style={styles.cadastraEExclui}>
                <TouchableOpacity style={styles.cadastroVeiculos} onPress={() => navigation.navigate("CadastroVeiculo")}>
                    <Icon name="car" style={styles.icone} size={20} color="#ffffff" />
                    <Icon name="plus" style={styles.icone} size={20} color="#ffffff" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.cadastroVeiculos} onPress={() => navigation.navigate("ExcluiCarros")}>
                    <Icon name="car" style={styles.icone} size={20} color="#ffffff" />
                    <Icon name="minus" style={styles.icone} size={20} color="#ffffff" />
                </TouchableOpacity>
            </View>

            <View style={styles.btnViewContainer}>
                <TouchableOpacity 
                    style={styles.btnScreans}
                    onPress={Rank}>
                      <Icon name="line-chart" size={25} color="#ffffff" />
                </TouchableOpacity>
        
                <TouchableOpacity 
                    style={styles.btnScreans}
                    onPress={Mapa}>
                      <Icon name="map-marker" size={30} color="#ffffff" />
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.btnScreans}
                    onPress={CadastraCarro}>
                      <Icon name="car" size={20} color="#ffffff" />
                      <Icon name="plus" style={styles.icone} size={18} color="#ffffff" />
                </TouchableOpacity>
             </View>
            
            <Background style={styles.svgBack} width={Dimensions.get("screen").width} height={Dimensions.get("screen").height + 20} />
        </View>
    )
}
