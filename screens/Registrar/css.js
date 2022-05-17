import { StyleSheet } from "react-native";
 
const styles = StyleSheet.create({
    background:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      
    },
    backContainer: {
      alignItems: 'center',
      alignContent: "center",
      width:"100%"
    },
    loginContainer: {
      alignItems: 'center',
      width:"90%",
      height: '63%',
      marginBottom: "40%",
      fontSize: 50,
      position: 'relative',
      top:"2%"
    },
    inputIcon:{
      width: '100%',
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
      marginBottom: "4%",
      borderRadius:100
    },
    imputs: {
      fontSize:17,
      width:"90%",
      color:'#ffffff',
      marginLeft:"2%"
    },
    btnRegistrar:{
      backgroundColor: '#757F7A',
      borderStyle: 'solid',
      width: '100%',
      height: 50,
      marginBottom: "2%",
      marginTop:"5%",
      paddingTop: 10,
      borderRadius:100
    },
    btnRegistrar_texto:{
      textAlign:'center',
      color:'#ffffff',
      fontSize: 20
    },
    login: {
      color: '#ffffff',
      fontSize: 15,
    },
    nome_Login: {
      color: '#ffffff',
      fontWeight: 'bold',
    },
    svgBack:{
      position:"absolute",
      top:"6%",
      left:"-2.5%",
    },
    googleContainer:{
      flexDirection : "row",
      left:"-3%",
      top:"5%"
    },
    btnGoogleTexto:{
      textAlign: 'center',
      color: '#000',
      fontSize: 13
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
    registrarContainer:{
      left:"70%"
    },
    tanqueo: {
      textAlign: "left",
      fontSize: 28,
      color: '#ffffff',
      fontStyle: 'normal',
      fontWeight: 'bold',
    },
    EntrarContainer: {
      width: '90%',
      marginTop:"90%"

    },
  });
  
export {styles};