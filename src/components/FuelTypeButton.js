import React, { Component } from "react";
import { View, Text, StyleSheet,} from "react-native";
import {Picker} from '@react-native-picker/picker';


export default class FuelTypeButton extends Component {
    state = {user:''}
    updateUser = (user) =>{
        this.setState({user: user})
    }
    render() {
        this.props.funcao(this.state.user)
        return (
            <View style={styles.container}>
                <Picker
                    style={styles.texto}
                    selectedValue = {this.state.user}
                    onValueChange = {this.updateUser}
                >
                    <Picker.Item label="Flex" value="flex" />
                    <Picker.Item label="Gasolina" value="gasolina" />
                    <Picker.Item label="Alcool" value="alcool" />
                    <Picker.Item label="Disel" value="disel" />
                </Picker>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        alignItems: 'center',
        justifyContent: "center",
    },
    texto: {
        textAlign: 'center',
        color: '#107878',
        height: "100%", 
        width: "100%",
        
    },
})