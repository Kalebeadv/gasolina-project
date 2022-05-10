import React, { useState } from "react";
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

export default function Rank({ navigation }) {
  const gasstation = {
    name: "isaurao",
    preco: "6,75",
    tipo: "Gasolina",
    name: "Kalebe auto-gatas",
    preco: "7,75",
    tipo: "Alcool",
    name: "Petrobrás",
    preco: "8,75",
    tipo: "Deasel",
  };

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Isaurão",
      fuelType: "Gasolina",
      price: "8,56",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Kalebe auto-gatas",
      fuelType: "Gasolina",
      price: "5,56",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Petrorás",
      fuelType: "Gasolina",
      price: "8,56",
    },
  ];

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{"Posto: " + item.title + "\nCombustivel: " + item.fuelType + "\nPreço: " + item.price}</Text>
    </TouchableOpacity>
  );
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#107878" : "#23cdcd";
    const color = item.id === selectedId ? "white" : "black";
    const centralizacao =  "center"

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
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
              color="#fff"
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
    backgroundColor: "#fff",
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
    display: "flex",
    flexDirection: "row",
    zIndex: 9,
    width: "90%",
    height: "10%",
    justifyContent: "space-around",
    marginBottom: "6%",
    backgroundColor: "#107878",
    borderRadius: 30,
  },
  btnContainer: {
    width: "25%",
    borderRadius: 30,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  btnRotaContainer: {
    width: "25%",
    height: "80%",
    backgroundColor: "#fff",
    borderRadius: 30,
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "2%",
  },
  textoRota: {
    fontSize: 20,
    color: "#fff",
  },
    item: {
        width: "100%",
        padding: 20,
        paddingBottom: 10,
        paddingTop: 10,
        marginVertical: 8,
        borderRadius: 16,
    },
});
