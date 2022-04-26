import React from 'react';
import LottieView from 'lottie-react-native';

import { View, StyleSheet, Image } from 'react-native';

export default function Splash({ navigation }){

    function telaLogin(){
        navigation.navigate('Entrar')
    }

    return (
        <View style={styles.container}>
            <View style={styles.itensContainer}>
                <View style={styles.imagemLogoContainer}>
                    <Image style={styles.imagemLogo}
                        source={require("../../assets/images/Logo.png")}
                    />
                </View>
                <View style={styles.LottieView}>
                    <LottieView 
                        source={require('../../assets/images/Splashanimada2.json')} 
                        autoPlay 
                        loop={false}
                        autoSize
                        resizeMode='contain'
                        speed={0.7}
                        onAnimationFinish={telaLogin}
                    />
                </View>
            </View>
        </View>
  )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position:'relative',
    },
    itensContainer: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignContent:'center',
        alignItems: 'center',
    },
    imagemLogoContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignContent:'center',
        alignItems: 'center', 
        zIndex: 9
    },
    imagemLogo: {
        width: 110,
        height: 157,
    },
    LottieView: {
        flex: 1,
        width: '100%',
        height: "100%",
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignContent:'center',
        alignItems: 'center',
        marginRight: '6%',
        marginBottom: '30%'
    },
});