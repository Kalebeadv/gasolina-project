import React, { useState } from "react";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function EsqueciMinhaSenha(){
    return(
        
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.logoContainer}>
                <Image style={styles.imagemLogo}
                source={require("../../assets/images/LogoVerde.png")}
                />
            </View>


            <View style={styles.container}>
                <Text style={styles.textRecuperacao}>Recuperação de conta</Text>

                <Text style={styles.textIntroducao}>Para ajudar a proteger sua conta, precisamos 
                    confirmar se é realmente você que está tentando fazer login.
                </Text>

                <Text style={styles.textCodRecuperacao}>Receba um código de verificação</Text>

                <Text style={styles.textIntroducao}>Informe o seu e-mail para que possamos lhe enviar um código de verificação, mas pode ficar tranquilo, é 99.999999% seguro.
                </Text>
            </View>

            <View style={styles.inputContainer}>
                <View style={styles.loginEmail}>
                    <Icon name="envelope-o" size={25} color="#107878" />
                    <TextInput
                      style={styles.textInput}
                      autoCorrect={false}
                      //onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <TouchableOpacity style={styles.btnEnviar}>
                    <Text style={styles.btnTexto}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    logoContainer: {
        alignItems: 'center',
        alignContent: "center",
        marginBottom: "2%",
        marginTop: "2%"
    },
    imagemLogo: {
        width:80,
        height:120,
        marginTop: "10%",
    },
    container: {
        width: '80%',
    },
    textRecuperacao:{
        textAlign: "center",
        fontSize: 30,
        color: '#107878',
        marginBottom: "10%"
    },
    textIntroducao:{
        fontSize: 15,
        color: '#107878',
        marginBottom: "5%"
    },
    textCodRecuperacao:{
        fontSize: 23,
        color: '#107878',
        marginBottom: "5%"
    },
    inputContainer: {
        alignItems: 'center',
        width:"90%",
        marginBottom: "20%",
        fontSize: 50
    },
    loginEmail: {
        width: '90%',
        height: 50,
        fontSize: 20,
        borderStyle: 'solid',
        borderColor: '#107878',
        borderWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderBottomWidth: 3,
        padding: 10,
        color: '#107878',
        flexDirection: "row",
        marginBottom: "5%"
    },
    textInput:{
        fontSize:17,
        width:"90%",
        color:'#107878',
        marginLeft:"2%"
    },
    btnEnviar: {
        backgroundColor: '#107878',
        borderStyle: 'solid',
        width: '90%',
        height: 50,
        marginBottom: "5%",
        marginTop:"2%",
        borderRadius: 8,
        paddingTop: 10,
    },
    btnTexto: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 20
    },
})