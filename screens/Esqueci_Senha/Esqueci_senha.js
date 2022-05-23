import React, { useState } from "react";
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./css"

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
            

                <View style={styles.inputContainer}>
                    <View style={styles.loginEmail}>
                        <Icon name="envelope-o" size={25} color="#757F7A" />
                        <TextInput
                          style={styles.textInput}
                          autoCorrect={false}
                          placeholder=" E-mail"
                          placeholderTextColor={'#107878'}
                          //onChangeText={(text) => setEmail(text)}
                        />
                    </View>
                    <TouchableOpacity style={styles.btnEnviar}>
                        <Text style={styles.btnTexto}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}