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
      fontSize: 23,
      color: "#107878",
      marginTop: "10%", 
    },
    texto2: {
      fontSize: 18,
      color: "#107878",
      marginTop: "2%", 
    },
    postoContainer: {
      width: '100%',
      height: "30%",
      borderStyle: 'solid',
      borderColor: '#ffffff',
      borderWidth: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      padding: 10,
      paddingRight: 2,
      backgroundColor:"#ffffff",
      justifyContent:"center",
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
    textoIconesSelecao: {
      color: '#A9A9A9'
    },
    item: {
      width: "100%",       
      padding: 20,
      paddingBottom: 10,
      paddingTop: 10,
      color:"#ffffff",
      backgroundColor:"#107878",
      flexDirection:"row",
      height:90,
    },
    item2:{
        width: "100%",
        padding: 20,
        paddingBottom: 10,
        paddingTop: 10,
        marginTop: '-3%'
    },
    svgBack:{
      position: 'absolute',
      width: '100%', 
    },
    icon:{
      position:"absolute",
      left:"100%",
      top:"20%",
      backgroundColor:"#ffffff",
      padding:15,
      borderRadius:100,
    },
    txtItem:{
      color:"#ffffff",
      fontSize:25,
    },
    rankContainer:{
      width: "100%",
      top:"5%",
      height:"80%"
    }
  });

export {styles};