import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#262626'
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
    loginContainer: {
      alignItems: 'center',
      width:"90%",
      height: '63%',
      marginBottom: "40%",
      fontSize: 50,
      paddingTop: 25,
      borderRadius: 8,
      backgroundColor: '#fff',
      position: 'relative'
    },
    inputIcon:{
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
    imputs: {
      fontSize:17,
      width:"90%",
      color:'#107878',
      marginLeft:"2%"
    },
    btnRegistrar:{
      backgroundColor: '#757F7A',
      borderStyle: 'solid',
      width: '90%',
      height: 50,
      marginBottom: "2%",
      marginTop:"5%",
      paddingTop: 10,
    },
    btnRegistrar_texto:{
      textAlign:'center',
      color:'#ffffff',
      fontSize: 20
    },
    login: {
      color: '#000',
      fontSize: 15,
      marginTop: 10,
    },
    nome_Login: {
      color: '#FF8A76',
    },
  });
  
export {styles};