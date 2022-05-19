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
            <Text style={[styles.title, textColor]}>{item.brand +" "+ item.model + "\n Ano: " + item.year + "\n Consumo: " + item.consumo + "\n Combustível: " + item.typefuel}</Text>
        </TouchableOpacity>
    );
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id == selectedId ? "#FF8A76" : "#757F7A";
        const color = item.id == selectedId ? 'white' : 'white';


        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
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
                setSelectedId(id)
            }
        }
        getCars();
        

    }, []);

    //------------------------- Navigate ---------------
    function Mapa() {
        AsyncStorage.setItem("VeiculoSelecionado", String(selectedId));
        navigation.navigate('Mapa', {id : selectedId});
    }

    function Rank() {
        AsyncStorage.setItem("VeiculoSelecionado", String(selectedId));
        navigation.navigate('Rank');
    }

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
                        extraData={selectedId}
                    />
                }
            </View>


            {//-------------------------------- BOTOES DA INTERFACE -------------------------
            }
            <View style={styles.cadastraEExclui}>
                <TouchableOpacity style={styles.cadastroVeiculos} onPress={() => navigation.navigate("CadastroVeiculo")}>
                    <Icon name="car" style={styles.icone} size={25} color="#FF8A76" />
                    <Icon name="plus" style={styles.icone} size={25} color="#FF8A76" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.cadastroVeiculos} onPress={() => navigation.navigate("ExcluiCarros")}>
                    <Icon name="car" style={styles.icone} size={25} color="#FF8A76" />
                    <Icon name="minus" style={styles.icone} size={25} color="#FF8A76" />
                </TouchableOpacity>
            </View>

            <View style={styles.btnViewContainer}>
                <TouchableOpacity style={styles.btnContainer} onPress={Rank}>
                    <Text><Icon name="trophy" size={25} color="#FF8A76" /></Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnContainer} onPress={Mapa}>
                    <Text style={styles.textoRota}>Mapa</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnRotaContainer}>
                    <Text><Icon name="car" style={styles.iconContainer} size={25} color="#000" /></Text>
                </TouchableOpacity>
            </View>
            
            <Background style={styles.svgBack} width={Dimensions.get("screen").width} height={Dimensions.get("screen").height + 20} />
        </View>
    )
}

