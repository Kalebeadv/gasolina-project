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
  const [DATA, setFuel] = useState([]);
  const wait = (timeout) => {
		return new Promise(resolve => setTimeout(resolve, timeout));
	  }

  async function getPosto() {
		var reqs = await fetch(urlRootNode + 'station', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		});
		let ress = await reqs.json();
		setPostos(ress);
	}

	async function getFuel() {
		var reqs = await fetch(urlRootNode + 'rankFuel', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		});
		let ress = await reqs.json();
		setFuel(ress);
	}

  function atualizaFuel(){
    for (let i = 0; i < DATA.length; i++){
      for (let j = 0; j < posto.length; j++){
        if (DATA[i].gasstationID == posto[j].id){
          console.log(posto[j].name)
          DATA[i]['gasstation'] = posto[j].name
        }
      }
    }
  }

  useEffect(async () => {
    getPosto();
    getFuel();
    atualizaFuel();
  }, [])

  function reloadPage(){
    getPosto();
    getFuel();
    setInterval(function(){
      atualizaFuel();
    }, 2000);
  }

  const Item = ({ fuel, onPress }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item2]}>
      <Text style={[styles.item]}>{ fuel.gasstation + "\n"+ fuel.type  + "\nR$ " + fuel.price +""}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
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
              style={styles.item2}
              renderItem={renderItem}             
              extraData={posto}
          />
        }

      <View style={styles.btnViewContainer}>
        <TouchableOpacity 
          style={styles.btnScreans}
          onPress={reloadPage}>
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


