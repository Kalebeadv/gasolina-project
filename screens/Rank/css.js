import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#D1D2D3",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignContent: "center",
      alignItems: "center",
    },
    texto: {
      fontSize: 15,
      color: "#107878",
      marginTop: "50%", 
    },
    atualizarLista: {
      width: '40%',
      height: 50,
      fontSize: 20,
      marginBottom: "5%",
      borderStyle: 'solid',
      borderColor: '#ffffff',
      borderWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      padding: 10,
      paddingRight: 2,
      backgroundColor:"#ffffff",
      flexDirection: "row",
      borderRadius: 100,
      marginLeft: '55%',
    },
    btnViewContainer: {
      width: "100%",
      height:"10%",
      backgroundColor: "#fff",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9,
    },
    btnScreans: {
      justifyContent: "center",
      alignItems:"center",
      width: "16%",
      height: "70%",
      marginBottom: "5%",
      borderRadius: 12,
      marginHorizontal:"5%",
      top:"2.5%",
    },
    textoIcones: {
      color: "#107878",
    },
    item: {
      width: "100%",        
      padding: 20,
      paddingBottom: 10,
      paddingTop: 10,
      borderRadius: 16,
      color:"#000",
      backgroundColor:"#ffffff",
    },
    item2:{
      width: "100%",
      padding: 20,
      paddingBottom: 10,
      paddingTop: 10,
      color:"#107878",
      top:"5%"
    },
    svgBack:{
      position: 'absolute',
      width: '100%', 
    }, 
  });

export {styles};