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
import {urlRootNode} from "../../config/config.json"


export default function Rank({ navigation }) {
  const [posto, setPostos] = useState([]);
  const [DATA, setFuel] = useState([])

<<<<<<< HEAD
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
=======
  const DATA = [
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Kalebe auto-gatas",
      fuelType: "Gasolina",
      price: "5,56",
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Isaurão",
      fuelType: "Gasolina",
      price: "8,56",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Petrorás",
      fuelType: "Gasolina",
      price: "8,56",
    },
  ];
>>>>>>> 1fd767763876e708a7342d908339d582bd984bae

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
<<<<<<< HEAD
=======
    const backgroundColor = item.id === selectedId ? "#FF8A76" : "#757F7A";
    const color = item.id === selectedId ? "white" : "white";
    const centralizacao =  "center"
>>>>>>> 1fd767763876e708a7342d908339d582bd984bae

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
<<<<<<< HEAD
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
=======
>>>>>>> 1fd767763876e708a7342d908339d582bd984bae
});
