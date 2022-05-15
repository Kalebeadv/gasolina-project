import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
    },
    EntrarContainer: {
      width: '50%',
      left:"5%",
      marginTop:"65%"
    },
    tanqueo: {
      textAlign: "left",
      fontSize: 28,
      color: '#ffffff',
      fontStyle: 'normal',
      fontWeight: 'bold',
    },
    textoES:{
      color:'#ffffff',
      fontSize:15,
      marginRight:"75%",
    },
    loginEmail: {
      width: '90%',
      height: 50,
      fontSize: 20,
      borderStyle: 'solid',
      borderColor: '#ffffff',
      borderWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      padding: 10,
      color: '#ffffff',
      flexDirection: "row",
      marginBottom: "3%",
      borderRadius:100,
    },
    esqueci_senha: {
      color: '#ffffff',
      top:"2%",
      right:"-25%"
    },
    registro: {
      color: '#ffffff',
      fontSize: 15,
    },
    nome_registro: {
      color: '#ffffff',
      fontWeight: 'bold',
    },
    btnEntrar: {
      backgroundColor: '#757F7A',
      borderStyle: 'solid',
      width: '90%',
      height: 50,
      marginBottom: "5%",
      marginTop:"5%",
      paddingTop: 10,
      borderRadius:100,

    },
    btnTexto: {
      textAlign: 'center',
      color: '#ffffff',
      fontSize: 20
    },
    loginPass: {
      width: '90%',
      height: 50,
      fontSize: 20,
      borderStyle: 'solid',
      borderColor: '#ffffff',
      borderWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      padding: 10,
      color: '#ffffff',
      flexDirection: "row",
      borderRadius:100,
    },
    btnGoogle:{
      justifyContent:"center",
      backgroundColor: '#ffffff',
      borderStyle: 'solid',
      width: '50%',
      height: 40,
      flexDirection: "row",
      paddingTop: 10,
      borderRadius:5,
      elevation:5,
      shadowOffset:{ width: 10, height: 10},
      shadowColor:"#000",
      shadowOpacity:0.5,
      shadowRadius:10
    },
    btnGoogleTexto:{
      textAlign: 'center',
      color: '#000',
      fontSize: 15
    },
    ou:{
      fontSize:15,
      color:'#ffffff',
      marginBottom:"5%"
    },
    textInput:{
      fontSize:17,
      width:"100%",
      color:'#ffffff',
      marginLeft:"2%"
    },
    svgBack:{
      position:"absolute",
      left:"-0.8%",
      top: "-15%",
    },
    inputContainer:{
      justifyContent:"center",
      alignItems:"center",
      top:"2%"
    },
    googleContainer:{
      flexDirection : "row",
      left:"-3%"
    },
    registrarContainer:{
      left:"50%"
    }
  })

export { styles };