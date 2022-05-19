import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { styles } from './css';
import Icon from "react-native-vector-icons/FontAwesome";
import Background from "../../assets/SvgImages/BackgroundHome.svg"


export default function Home({ navigation }) {

  function go_to_mapa(){ navigation.navigate("Mapa") }
  function selecionaCarro(){ navigation.navigate("Carros") }
  function Rank(){ navigation.navigate("Rank") }
  function Home(){ navigation.navigate("Home") }

  return (
    <View style={styles.container}>
    <Background style={styles.svgBack} width={Dimensions.get("screen").width} height={Dimensions.get("screen").height + 20} />
      <View>
        <Text style={styles.gasolina}>Ga$olina</Text>
      </View>

      <View style={styles.allContainer}>

        <View style={styles.melhorContainer}>
          <Icon name="print" size={150} color="#107878" />

          <Text>Posto da Alvorada</Text>
          <Text>G 7,50 Distância : 10Km</Text>

          <TouchableOpacity style={styles.btnRoute} onPress={go_to_mapa}>
            <Text style={styles.btnRoute_text}>Traçar Rota</Text>
            <Icon name="angle-double-right" size={30} color="#ffffff" />
          </TouchableOpacity>
        </View>

        <View style={styles.carsContainer}>

          <TouchableOpacity 
          style={styles.btnCar}
          onPress={selecionaCarro}>
            <Icon name="car" size={30} color="#107878" />
            <Text style={styles.btnCar_text}>Ford Ka 2002</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.screansContainer}>

          <TouchableOpacity 
          style={styles.btnScreans}
          onPress={Rank}>
            <Icon name="line-chart" size={20} color="#ffffff" />
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.btnScreans}
          onPress={Home}>
            <Icon name="home" size={20} color="#ffffff" />
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.btnScreans}
          onPress={selecionaCarro}>
            <Icon name="car" size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

