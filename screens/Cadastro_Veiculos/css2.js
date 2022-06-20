import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    background: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff'
    },
    loginContainer: {
      alignItems: 'center',
      width: '90%',
      marginBottom: 70
    },
    inputs: {
      fontSize: 17,
      marginLeft: "2%",
      width: '90%',
      color: '#107878'
    },
    btnCadastro: {
      backgroundColor: '#107878',
      width: '90%',
      height: 50,
      marginTop: 20,
      marginBottom: 10,
      paddingTop: 10,
      borderRadius: 100
    },
    btnCadastro_texto: {
      textAlign: 'center',
      color: '#ffffff',
      fontSize: 20
    },
    imagemLogo: {
      width: 84,
      height: 120,
    },
    textoInicioContainer: {
      alignItems: 'center',
      alignContent: "center",
      paddingBottom: "5%",
      marginTop:"20%"
    },
    inputIcon: {
      width: '90%',
      height: 50,
      fontSize: 20,
      marginBottom: "5%",
      borderStyle: 'solid',
      borderColor: '#107878',
      borderWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      padding: 10,
      paddingRight: 2,
      color: '#107878',
      flexDirection: "row",
      borderRadius: 100
    },
    textoInicio: {
      fontSize: 30,
      color: '#107878',
      marginTop: "5%"
    },
    voltarContainer:{
      marginTop:"15%",
      right:"40%"
    }
  });

  export {styles}