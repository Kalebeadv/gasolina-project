import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from "../../config/config.json"


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
            <TouchableOpacity style={styles.cadastroVeiculos} onPress={exclui}>
                <Icon name="trash" style={styles.icone} size={25} color="#fff" />
                <Icon name="minus" style={styles.icone} size={25} color="#fff" />
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        marginTop: "20%",
        backgroundColor: '#fff',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
    },
    texto: { // trocar o nome quando colocar o select de carros
        fontSize: 15,
        color: '#107878',
        marginTop: '50%' // mudar apenas aqui para emplementar o select dos carros
    },
    cadastraEExclui:{
        flexDirection: 'row',
        justifyContent:"center",
    },
    cadastroVeiculos: {
        justifyContent:"center",
        backgroundColor: '#107878',
        width: '90%',
        height: 50,
        marginBottom: '5%',
        marginLeft:"5%",
        marginRight:"5%",
        borderRadius: 13,
        paddingTop: 10,
        marginTop: 20,
        flexDirection: 'row',
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
    item: {
        width: "100%",
        padding: 20,
        paddingBottom: 10,
        paddingTop: 10,
        marginVertical: 8,
        borderRadius: 16,
    },
    title: {
        fontSize: 24,
    },
    icone:{
        paddingLeft: "5%"
    }
}); 