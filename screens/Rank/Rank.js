import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {urlRootNode} from "../../config/config.json";
import {styles} from "./css"


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

  return (
    <SafeAreaView style={styles.container}>
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
          style={styles.btnRotaContainer}
          onPress={() => {
            navigation.navigate("Rank");
          }}
        >
          <Text>
            <Icon name="trophy" size={25} color="#000" />
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => {
            navigation.navigate("Mapa");
          }}
        >
          <Text style={styles.textoRota}>Mapa</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => {
            navigation.navigate("Carros");
          }}
        >
          <Text>
            <Icon
              name="car"
              style={styles.iconContainer}
              size={25}
              color="#FF8A76"
            />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


