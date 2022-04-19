import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";


export default function Carros({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>
                Nenhum carro adicionado!
            </Text>
            <TouchableOpacity style={styles.rota} onPress={() => navigation.navigate("CadastroVeiculo")}>
                <Text style={styles.nome_rota}>
                  Cadastrar Veículo
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    texto: {
        fontSize: 15,
        color: '#107878',
        marginBottom: "5%"
    },
    rota: {
        backgroundColor: '#107878',
        width: '90%',
        height: 50,
        marginBottom: 10,
        borderRadius: 13,
        paddingTop: 10,
        marginTop: 20,
    },
    nome_rota: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    },
}); 