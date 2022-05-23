import { View, TouchableOpacity, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome'
import { useEffect, useState } from "react";

export default function Rank({ navigation }) {

    const [fuel, setFuel] = useState([])
    const [postos,setPostos] = useState([])
    var rank = []
    
    
    async function getPosto() {
        var reqs = await fetch(urlRootNode + 'station', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        let ress = await reqs.json();
       
        setPostos(ress);
    }

    async function getFuel() {
        var reqs = await fetch(urlRootNode + 'fuel', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        let ress = await reqs.json();
       
        setFuel(ress);
        console.log(fuel)
    }
    useEffect(() => {
        getFuel()
        getPosto()
       
    }, [])

     function addrank()
    {
        for(let i =0; i < fuel.length; i++)
        {
            rank[i] = fuel[i]
            
        }
        if(rank[i] == [])
        {
            console.log("VAAAAAAAAAAAAAAAAAAAAAAZZZZZZZZZZZZZZZZIIIIIIIIIIILLLLLLLLLLLLLLL")
        }
    }
    

    return (
        <View style={styles.container}>
            <View>
                <Text>{rank}</Text>
            </View>


            <View style={styles.btnViewContainer}>
                <TouchableOpacity style={styles.btnRotaContainer} onPress={((() => { navigation.navigate('Rank') }) (addrank)) }>
                    <Text><Icon name="trophy" size={25} color="#000" /></Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnContainer} onPress={() => { navigation.navigate('Mapa') }}>
                    <Text style={styles.textoRota}>Mapa</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnContainer} onPress={() => { navigation.navigate('Carros') }}>
                    <Text><Icon name="car" style={styles.iconContainer} size={25} color="#fff" /></Text>
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