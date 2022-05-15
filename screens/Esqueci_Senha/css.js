import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    background:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#262626',
    },
    logoContainer: {
      alignItems: 'center',
      alignContent: "center",
      marginBottom: "10%",
      marginTop: "12%"
    },
    imagemLogo: {
      width:70,
      height:100,
      marginTop: "15%",
      zIndex: 9
    },
    backgroundLogin: {
      position:'absolute',
      width: '100%',
      height: 300
    },
    container: {
        alignItems: 'center',
        width:"90%",
        height: '70%',
        marginBottom: "20%",
        fontSize: 50,
        paddingTop: 25,
        borderRadius: 8,
        backgroundColor: '#fff',
        position: 'relative'
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
        marginBottom: "5%",
        width: '90%'
    },
    textCodRecuperacao:{
        fontSize: 23,
        color: '#107878',
        marginBottom: "5%"
    },
    inputContainer: {
        alignItems: 'center',
        width:"100%",
        marginBottom: "20%",
        fontSize: 50,
    },
    loginEmail: {
        width: '90%',
        height: 50,
        fontSize: 20,
        borderStyle: 'solid',
        borderColor: '#107878',
        borderWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
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
        backgroundColor: '#757F7A',
        borderStyle: 'solid',
        width: '90%',
        height: 50,
        marginBottom: "5%",
        marginTop:"1%",
        paddingTop: 10,
    },
    btnTexto: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 20
    },
})

export {styles}