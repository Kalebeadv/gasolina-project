import React, { Component } from "react";
import { View, Text, StyleSheet,} from "react-native";
import {Picker} from '@react-native-picker/picker';


export default class FlexSelect extends Component {
    state = {user:'gasolina'}
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
                    <Picker.Item label="Gasolina" value="gasolina" />
                    <Picker.Item label="Alcool" value="alcool" />
                </Picker>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    },
    texto: {
        textAlign: 'center',
        color: '#757F7A',
        height: "100%", 
        width: "100%",
        
    },
})
