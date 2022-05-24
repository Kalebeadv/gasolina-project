import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {urlRootNode} from "../../config/config.json";
import {styles} from "./css"
import Background from "../../assets/SvgImages/cars_rank.svg"

export default function Rank({ navigation }) {
  const [posto, setPostos] = useState([]);
  const [DATA, setFuel] = useState([])

  async function getPosto() {
		var reqs = await fetch(urlRootNode + 'station', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		});
		let ress = await reqs.json();
    console.log(ress)
		setPostos(ress);
	}

	async function getFuel() {
		var reqs = await fetch(urlRootNode + 'fuel', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		});
		let ress = await reqs.json();
    console.log(ress)
		setFuel(ress);
	}

  useEffect(() => {
    getFuel()
    getPosto()
    for (let i = 0; i < DATA.length; i++){
      
    }
  },[])

  const Item = ({ fuel, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item2]}>
      <Text style={[styles.title]}>{"Posto: " + fuel.idGasstation + "\nCombustivel: "+ fuel.type  + "\nPreço: " + fuel.valor }</Text>
    </TouchableOpacity>
  );
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#FF8A76" : "#757F7A";
    const color = item.id === selectedId ? "white" : "white";
    const centralizacao =  "center"
    return (
      <Item
        fuel ={item}
        onPress={() => setSelectedId(item.id)}
        style={styles.item}
      />
    );
  };

  // funcoes do navigation 
  function go_to_mapa(){ navigation.navigate("Mapa") }
  function selecionaCarro(){ navigation.navigate("Carros") }
  function Rank(){ navigation.navigate("Rank") }
  function Mapa(){ navigation.navigate("Mapa") }

  return (
    
    <SafeAreaView style={styles.container}>
    <Background style={styles.svgBack} width={Dimensions.get("screen").width} height={Dimensions.get("screen").height + 20} />
       {DATA != [] &&
          <FlatList
              data={DATA}
              style={styles.item}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
          />
        }

      <View style={styles.btnViewContainer}>
        <TouchableOpacity 
          style={styles.btnScreans}
          onPress={Rank}>
            <Icon name="rotate-right" size={25} color="#ffffff" />
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.btnScreans}
          onPress={Mapa}>
            <Icon name="map-marker" size={30} color="#ffffff" />
          </TouchableOpacity>

          <TouchableOpacity 
          style={styles.btnScreans}
          onPress={selecionaCarro}>
            <Icon name="car" size={25} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


