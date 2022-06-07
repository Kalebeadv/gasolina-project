import React, { useEffect, useState } from "react";
import {
    View,
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { urlRootNode } from "../../config/config.json";
import { styles } from "./css"
import Background from "../../assets/SvgImages/cars_rank.svg"
import AsyncStorage from '@react-native-async-storage/async-storage';
import FuelTypeRank from "../../src/components/FuelTypeRank";


export default function InfoPosto({ route, navigation }) {
    const [posto, setPostos] = useState(JSON.parse(route.params.posto));
    const [DATA, setFuel] = useState([]);
    const [selectFuel, setSelectFuel] = useState("gasolina")
    const [reload, setReload] = useState(null)

    function atualizaFuel(fuel) {

        return fuel;
    }

    async function getFuel() {
        var reqs = await fetch(urlRootNode + 'infoFuel', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idPosto: posto.id
            }),
        });
        let ress = await reqs.json();
        setFuel(ress);
    }

    function go_to_mapa(m) {
        let post;
        for (let i = 0; i < posto.length; i++) {
            if (m == posto[i].id) {
                post = posto[i]
            }
        }
        navigation.navigate("Mapa2", { posto: JSON.stringify(post) });
    }

    useEffect(async () => {
        getFuel();
        reloadPage();
    }, [selectFuel])


    async function reloadPage() {
        getFuel();
    }

    useEffect(() => {
        if (reload < 5) {
            setReload(reload + 1);
        }
    }, [reload])

    const Item = ({ item, onPress }) => (
        <View style={[styles.item2]}>
            <View style={styles.item}>
                <Text style={styles.txtItem}>{"Tipo: " + item.type + "\nValor: R$ " + item.price + ""}</Text>
            </View>
        </View>
    );

    const renderItem = ({ item }) => {
        console.log(item)
        return (
            <Item
                item={item}
                onPress={() => go_to_mapa(item.gasstationID)}
                style={styles.item}
            />
        );
    };


    // funcoes do navigation 
    function Rank() { navigation.navigate("Rank") }
    function Home() { navigation.navigate("Home") }
    function Mapa() { navigation.navigate("Mapa") }
    function selecionaCarro() { navigation.navigate("Carros") }

    return (
        <SafeAreaView style={styles.container}>
            <Background style={styles.svgBack} width={Dimensions.get("screen").width} height={Dimensions.get("screen").height} />

            <View style={styles.postoContainer}>
                <Text style={styles.texto}>{posto.name}</Text>
                <Text style={styles.texto2}>{"Endereço: "+posto.adress}</Text>
                <Text style={styles.texto2}>{"CNPJ: "+posto.cnpj}</Text>
            </View>

            <View style={styles.rankContainer}>
                {DATA != [] &&
                    <FlatList
                        data={DATA}
                        style={styles.item2}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                    />
                }
            </View>


        </SafeAreaView>
    );
}


