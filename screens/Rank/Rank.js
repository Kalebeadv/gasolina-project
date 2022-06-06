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
import { urlRootNode } from "../../config/config.json";
import { styles } from "./css"
import Background from "../../assets/SvgImages/cars_rank.svg"
import AsyncStorage from '@react-native-async-storage/async-storage';
import FuelTypeRank from "../../src/components/FuelTypeRank";


export default function Rank({ navigation }) {
  const [posto, setPostos] = useState([]);
  const [DATA, setFuel] = useState([]);
  const [selectFuel, setSelectFuel] = useState("gasolina")
  const [reload, setReload] = useState(null)

  function atualizaFuel(fuel){
    
    return fuel;
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
      body: JSON.stringify({
        combus: selectFuel
      }),
		});
		let ress = await reqs.json();
    for (let i = 0; i < ress.length; i++){
      for (let j = 0; j < posto.length; j++){
        if (ress[i].gasstationID == posto[j].id){
          ress[i]['gasstation'] = posto[j].name
        }
      }
    }

		setFuel(ress);
	}
  


  useEffect(async () => {
    await getPosto();
    getFuel();
    reloadPage();
  }, [selectFuel])


  async function reloadPage(){
    await getPosto();
    getFuel();
  }

  useEffect(() =>{
		if (reload < 5){
			setReload(reload + 1);
		}
	},[reload])

  const Item = ({ item  }) => (
    <View style={[styles.item2]}>
      <Text style={[styles.item]}>{ item.gasstation + "\n"+ item.type  + "\nR$ " + item.price +""}</Text>
    </View>
  );

  const renderItem = ({ item }) => {
    console.log(item)
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={styles.item}
      />
    );
  };


  // funcoes do navigation 
  function Rank() { navigation.navigate("Rank") }
  function Home() { navigation.navigate("Home") }
  function Mapa() { navigation.navigate("Mapa") }
  function selecionaCarro() { navigation.navigate("Carros") }

  return (
    <SafeAreaView style={styles.container}>
      <Background style={styles.svgBack} width={Dimensions.get("screen").width} height={Dimensions.get("screen").height} />
      {DATA !=  [] &&
        <FlatList
          data={DATA}
          style={styles.item2}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      }

      <View>
        <TouchableOpacity style={styles.atualizarLista}>
          <FuelTypeRank
            funcao={setSelectFuel}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.btnViewContainer}>
        <TouchableOpacity
          style={styles.btnScreans}

          onPress={reloadPage}>
          <Icon name="line-chart" size={25} color="#107878" />
          <Text style={styles.textoIcones}>Ranking</Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.btnScreans}
          onPress={Home}>
          <Icon name="home" size={30} color="#107878" />
          <Text style={styles.textoIcones}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnScreans}
          onPress={Mapa}>
          <Icon name="map-marker" size={30} color="#107878" />
          <Text style={styles.textoIcones}>Mapa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnScreans}
          onPress={selecionaCarro}>
          <Icon name="car" size={25} color="#107878" />
          <Text style={styles.textoIcones}>Carros</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

