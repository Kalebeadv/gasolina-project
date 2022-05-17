import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome } from '@expo/vector-icons';


export default function Home({ navigation }) {

  function go_to_mapa()
  {
    navigation.navigate("Mapa")
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.gasolina}>Ga$olina</Text>
      </View>
      <View>
        <View style={styles.melhorContainer}>
          <Text style={styles.image}>Image</Text>
          <Text>Posto da Alvorada</Text>
          <Text>G 7,50 Distância : 10Km</Text>
          <TouchableOpacity style={styles.btnRoute} onPress={go_to_mapa}>
            <Text>Traçar Rota</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.carsContainer}>
          <TouchableOpacity style={styles.btnCar}>
            <Text>Ford Ka 2002</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.screansContainer}>
          <TouchableOpacity style={styles.btnScreans}>
            <Text>R</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnScreans}>
            <Text>R</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnScreans}>
            <Text>R</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    width:"100%"
  },
  melhorContainer:{
    justifyContent: "center",
    alignItems:"center",
    backgroundColor:"lightblue",
    borderRadius:10,
    width:"90%",
    marginHorizontal:"auto",
    marginVertical:"auto"
  },
  gasolina:{
    fontSize:30,
    fontStyle:"italic"
  },
  image:{
    fontSize:50,
    marginBottom:"10%"
  },
  btnRoute:{
    justifyContent:"center",
    textAlign:"center",
    backgroundColor:"#00FA9A",
    borderRadius:100,
    width:"70%",
    height:30,
    marginBottom:"5%"
  },
  btnCar:{
    justifyContent:"center",
    textAlign:"center",
    backgroundColor:"#00FA9A",
    borderRadius:100,
    height:40,
    marginBottom:"5%"
  },
  carsContainer:{
    width:"90%",
    marginHorizontal:"auto",
    marginVertical:"auto",
    top:"10%"
  },
  screansContainer:{
    width:"90%",
    marginHorizontal:"auto",
    marginVertical:"auto",
    top:"10%",
    backgroundColor:"#00FA9A",
    flexDirection:"row",
    borderRadius:100,
    justifyContent:"center",
    alignItems:"center"
  },
  btnScreans:{
    justifyContent:"center",
    textAlign:"center",
    width:"15%",
    height:40,
    marginBottom:"5%",
    backgroundColor:"#00FA9A",
    borderRadius:15,
    marginHorizontal:"auto",
    marginVertical:"auto",
    top:"14%"
  },
  
});