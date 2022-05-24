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
    btnViewContainer: {
      width: "90%",
      height:"10%",
      backgroundColor: "#ffffff",
      flexDirection: "row",
      borderRadius: 12,
      justifyContent: "center",
      alignItems: "center",
      bottom: '8%',
      zIndex: 9
    },
    btnScreans: {
      justifyContent: "center",
      alignItems:"center",
      width: "16%",
      height: "70%",
      marginBottom: "5%",
      backgroundColor: "#107878",
      borderRadius: 12,
      marginHorizontal:"10%",
      top:"2.5%"
    },
    item: {
      width: "100%",
      padding: 20,
      paddingBottom: 10,
      paddingTop: 10,
      marginTop: '3%',
    },
    item: {
      width: "100%",        
      padding: 20,
      paddingBottom: 10,
      paddingTop: 10,
      marginVertical: 8,
      borderRadius: 16,
      color:"#107878"
    },
    item2:{
      width: "100%",
      padding: 20,
      paddingBottom: 10,
      paddingTop: 10,
      marginVertical: 8,
      borderRadius: 16,
      color:"#107878"
    },
    svgBack:{
      position: 'absolute',
      width: '100%', 
    }, 
  });

export {styles};