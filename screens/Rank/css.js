import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#D1D2D3",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignContent: "center",
      alignItems: "center",
    },
    texto: {
      // trocar o nome quando colocar o select de carros
      fontSize: 15,
      color: "#107878",
      marginTop: "50%", // mudar apenas aqui para emplementar o select dos carros
    },
    btnViewContainer: {
      display: 'flex',
      flexDirection:'row',
      zIndex: 9,
      width: '90%',
      height: '10%',
      justifyContent: 'space-around',
      marginBottom: '8%',
      backgroundColor: '#757F7A',
  },
  btnContainer: {
      width: '25%',
      borderRadius: 30,
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
  },
  btnRotaContainer: {
      width: '25%',
      height: '80%',
      backgroundColor: '#fff',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '2%',
  },
    textoRota: {
      color: '#FF8A76',
      fontSize: 20,
      marginLeft: 25
    },  
    item: {
      width: "100%",
      padding: 20,
      paddingBottom: 10,
      paddingTop: 10,
      marginTop: '3%'
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
    }
  });

export {styles};