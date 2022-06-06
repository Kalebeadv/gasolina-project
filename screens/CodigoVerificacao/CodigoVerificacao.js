import React, { useState, useEffect } from "react";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet, Alert, Dimensions } from "react-native";
import config from "../../config/config.json";
import { styles } from "./css";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CodigoVerificacao({ route, navigation }) {
    const [nome, setNome] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [codigo, setCodigo] = useState(null);
    const [code2, setCode2] = useState(null)


    useEffect(async () => {
        let cod;
        if (codigo == null) {
            cod = generateRandomInt(10000, 99999)
            setCodigo(cod)
        }else{
            cod = codigo
        }


        let userc = route.params.userc;
        userc = JSON.parse(userc);
        console.log(userc)

        
        setEmail(userc.email);
        setPassword(userc.password);
        setNome(userc.name);

        var reqs = await fetch(config.urlRootNode + "enviaEmail", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                emailDeEnvio: userc.email,
                cod: cod
            })
        })
    }, [])

    function generateRandomInt(min, max) {
        return Math.floor((Math.random() * (max + 1 - min)) + min);
    }

    async function registerUser() {
        console.log(codigo + " " + code2)

        if (codigo == code2) {
            var reqs = await fetch(config.urlRootNode + 'registrar', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    stNameUser: nome,
                    emailUser: email,
                    passwordUser: password,
                })
            });
            let ress = await reqs.json();

            if (ress == 'true') {
                await AsyncStorage.setItem('email', email);
                await AsyncStorage.setItem('pass', password);
                navigation.navigate('CadastroVeiculo');

            } else if (ress == 'false') {
                Alert.alert(
                    "Algo inesperado",
                    "Usuário já existe"
                );
            } else if (ress == 'Email Invalido') {
                Alert.alert(
                    "Algo inesperado",
                    "Email Invalido"
                );
            }
        }
    }

    return (
        <KeyboardAvoidingView style={styles.background}>
            <View style={styles.logoContainer}>
                <Image style={styles.imagemLogo}
                    source={require("../../assets/images/LogoVerde.png")}
                />
            </View>


            <View style={styles.container}>
                <Text style={styles.textRecuperacao}>Código de Verificação</Text>

                <Text style={styles.textIntroducao}>Para ajudar a proteger sua conta, precisamos
                    confirmar se é realmente você que está tentando fazer cadastro.
                </Text>

                <Text style={styles.textCodRecuperacao}>você recebera um código de verificação em seu e-mail</Text>


                <View style={styles.inputContainer}>
                    <View style={styles.loginEmail}>
                        <Icon name="envelope-o" size={25} color="#757F7A" />
                        <TextInput
                            style={styles.textInput}
                            autoCorrect={false}
                            placeholder=" Digite o Código"
                            placeholderTextColor={'#107878'}
                            onChangeText={(text) => setCode2(text)}
                        />
                    </View>
                    <TouchableOpacity style={styles.btnEnviar} onPress={registerUser}>
                        <Text style={styles.btnTexto}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}