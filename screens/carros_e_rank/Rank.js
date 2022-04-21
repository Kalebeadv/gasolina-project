import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome'


export default function Rank({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>
                Rank
            </Text>


            <View style={styles.btnViewContainer}>
                <TouchableOpacity style={styles.btnRotaContainer} onPress={() => {navigation.navigate('Rank')}}>
          			<Text><Icon name="trophy" size={25} color="#000"/></Text>
       			</TouchableOpacity>
    
				<TouchableOpacity style={styles.btnContainer} onPress={() => { navigation.navigate('Mapa') }}>
					<Text style={styles.textoRota}>Rota <Icon name="dollar" size={25} color="#fff"></Icon></Text>
				</TouchableOpacity>
    
				<TouchableOpacity style={styles.btnContainer} onPress={() => {navigation.navigate('Carros')}}>
          			<Text><Icon name="car" style={styles.iconContainer} size={25} color="#fff"/></Text>
       			</TouchableOpacity>	
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
        display:'flex',
        flexDirection: 'column',
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'center'
    },
    texto: { // trocar o nome quando colocar o select de carros
        fontSize: 15,
        color: '#107878',
        marginTop: '50%' // mudar apenas aqui para emplementar o select dos carros
    },
    btnViewContainer:{
        display: 'flex',
        flexDirection:'row',
        zIndex: 9,
        width: '90%',
        height: '10%',
        justifyContent: 'space-around',
        marginBottom: '6%',
        backgroundColor: '#107878',
        borderRadius: 30,   
    },
    btnContainer:{
        width: '25%',
        borderRadius: 30,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    btnRotaContainer:{
        width: '25%',
        height: '80%',
        backgroundColor: '#fff',
        borderRadius: 30,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2%',
    },
    textoRota:{
        fontSize: 20,
        color: '#fff'
    },
}); 