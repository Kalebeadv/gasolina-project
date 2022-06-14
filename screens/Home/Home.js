import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import MapView, { Callout, Circle, Marker } from "react-native-maps"
import { styles } from './css';
import Icon from "react-native-vector-icons/FontAwesome";
import Background from "../../assets/SvgImages/RegisterBackground.svg"
import BombaDeGasolina from "../../assets/SvgImages/Bomba de Gasolina.svg"
import MapViewDirections from 'react-native-maps-directions';
import keys from '../../config/googleConfig.json';
import { cssMapa, newMap } from "./cssMapa";
import { urlRootNode } from '../../config/config.json'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import FlexSelect from "../../src/components/FlexSelectButton";


export default function Home({ route, navigation }) {
	var distlist = []
	const [initialLocation, setInitialLocation] = useState({
		latitude: -9.96860362889137,
		longitude: -67.8291926515884,
		latitudeDelta: 0.1,
		longitudeDelta: 0.1
	})
	const [origin, setOrigin] = useState({
		latitude: 0,
		longitude: 0,
		latitudeDelta: 0,
		longitudeDelta: 0
	});
	const [region, setRegion] = useState({
		latitude: 0,
		longitude: 0,
		latitudeDelta: 0,
		longitudeDelta: 0
	})
	const [distance, setDistance] = useState(null);
	const [distancias, setDistancias] = useState([]);
	const [fuel, setFuel] = useState([]);
	const [postos, setPostos] = useState([]);
	const [postoMaisEconomico, setPostoMaisEconomico] = useState([]);
	const [cars, setCars] = useState([]);
	const [car, setCar] = useState([]);
	const [combustivelEconomico, setCombustivelEconomico] = useState(null);
	const [distanciaPosto, setDistanciaPosto] = useState(null);
	const [reload, setReload] = useState(null);
	const [FlexFuel, setFlexFuel] = useState(null);
	const [encontrar, setEncontrar] = useState(true);
	const [hide, setHide] = useState("80%")
	const [usuario, setUser] = useState([])

	function reloadPage() {
		for (let i = reload; i <= reload + 1; i++) {
			setReload(i)
		}
		setEncontrar(false)
	}
	function info() {
		console.log("Distancias-----------------\n" + distancias);
		console.log("Carro-----------------\n" + car);
		console.log("Distancia Posto-----------------\n" + distanciaPosto);
		console.log("Postos-----------------\n" + postos);
		console.log("Fuel-----------------\n" + fuel)

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
		let comb;

		car ? comb = car.typeFuel : comb = "gasolina"

		if (comb == 'flex') {
			comb = FlexFuel
		}

		var reqs = await fetch(urlRootNode + 'homeFuel', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				combus: comb,
			})
		});
		let ress = await reqs.json();
		setFuel(ress);
	}

	async function comparaDistancia() {
		let calc;
		let menor = 0;
		let econ;
		let combuEco;
		let distan;

		for (let i = 0; i < postos.length; i++) {
			let combustivel;
			let dis1;
			for (let j = 0; j < fuel.length; j++) {
				if (fuel[j].gasstationID == postos[i].id) {
					combustivel = fuel[j]
					break
			}
		}
			if (combustivel == undefined){
				break
			}

			for (let c = 0; c < distancias.length; c++) {
				if (distancias[c].id == postos[i].id) {
					dis1 = distancias[c].distance
					break
				}
			}

			calc = (Number(combustivel.price) * Number(dis1)) / Number(car.consumo)

			console.log(calc);

			if (menor == 0) {
				menor = calc
				combuEco = combustivel
				distan = Number(dis1)
				econ = postos[i]
			} else if (calc < menor) {
				menor = calc
				combuEco = combustivel
				distan = Number(dis1)
				econ = postos[i]
			}
		}

		setPostoMaisEconomico(econ);
		setCombustivelEconomico(combuEco);
		setDistanciaPosto(distan);
	}

	useEffect(async () => {
		const { status } = await Location.requestForegroundPermissionsAsync();
		if (status === 'granted') {
			let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
			setOrigin({
				latitude: location.coords.latitude,
				longitude: location.coords.longitude,
				latitudeDelta: 0.000922,
				longitudeDelta: 0.000421
			})
		} else {
			throw new Error('Location permission not granted');
		}
	}, [reload]);

	useEffect(() => {
		async function getCars() {
			let userEmail = await AsyncStorage.getItem("email");
			let carros = await AsyncStorage.getItem("CarrosUser");
			let id = await AsyncStorage.getItem("VeiSelect");
			let userc = await AsyncStorage.getItem("userConfig");

			console.log(userEmail + "==============" + id)
			console.log(userc);
			setUser(JSON.parse(userc))

			if (id == 'null' || typeof (carros) != "string") {
				console.log("banco")
				let reqs = await fetch(urlRootNode + 'carros', {
					method: 'POST',
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						email: userEmail
					})
				})
				let ress = await reqs.json();
				await AsyncStorage.setItem("CarrosUser", JSON.stringify(ress));
				setCars(ress)
				return;
			} else {
				console.log("memoria")
				carros = JSON.parse(carros)
				setCars(carros)
			}
		}
		getCars();
	}, [origin]);

	useEffect(async () => {
		let id = await AsyncStorage.getItem("VeiSelect");
		let carro;
		console.log(cars + " ===== " + id);
		for (let i = 0; i < cars.length; i++) {
			if (cars[i].id == id) {
				carro = cars[i]
			}
		}
		if (carro.typeFuel == "flex"){
			setHide("0%")
		}else{
			setHide("80%")
		}
		setCar(carro)
	}, [cars])

	useEffect(() => {
		getFuel()
		getPosto();
	}, [car])

	useEffect(() => {
		comparaDistancia()
	}, [fuel, distancias])

	useEffect(() => {
		setReload(0);
	},[FlexFuel])

	//------------------------- Navigate -------------------
	function go_to_mapa() { navigation.navigate("Mapa2", { posto: JSON.stringify(postoMaisEconomico) }) }
	function Rank() { navigation.navigate("Rank") }
	function Home() { navigation.navigate("Home") }
	function Mapa() { navigation.navigate("Mapa") }
	function selecionaCarro() { navigation.navigate("Carros") }

	return (
		<View style={styles.container}>
			<Background style={styles.svgBack} width={Dimensions.get("screen").width + 50} height={Dimensions.get("screen").height + 50} />

			<View>
				<Text style={styles.gasolina}>Ga$olina</Text>
			</View>

			<View style={styles.allContainer}>
			{encontrar == true?
				<View style={styles.melhorContainer}>
					<Text style={styles.txtBemVindo}>Bem vindo/a!</Text>
					<Text style={styles.txtQuest}>Quer encontrar o posto mais econômico?</Text>
					<TouchableOpacity style={styles.btnRoute} onPress={reloadPage}>
						<Text style={styles.btnRoute_text}>Encontrar</Text>
						<Icon name="search" size={20} color="#ffffff" />
					</TouchableOpacity>
				</View>
				:
				<View style={styles.melhorContainer}>
					<View style={styles.infoContainer}>
						<BombaDeGasolina style={styles.bomba} fill={"#107878"} width={120} height={120} />
						<Text style={styles.txtRotaTitle}>{postoMaisEconomico && postoMaisEconomico.name}</Text>
						<Text style={styles.txtRotaPrice}>{combustivelEconomico && combustivelEconomico.type.toLocaleUpperCase() + ": \n                R$ " + combustivelEconomico.price + ""}</Text>
						<Text style={styles.txtRotaDistance}>{distanciaPosto && "DISTÂNCIA: \n                " + distanciaPosto + "Km"}</Text>
					</View>

					<TouchableOpacity style={styles.btnRoute} onPress={go_to_mapa}>
						<Text style={styles.btnRoute_text}>Traçar Rota</Text>
						<Icon name="angle-double-right" size={30} color="#ffffff" />
					</TouchableOpacity>
				</View>
			}
				{car &&
					<View style={styles.carsContainer}>
						<TouchableOpacity
							style={styles.btnCar}
							onPress={selecionaCarro}>
							{car.typeVehicle == "carro" ?
								<Icon name="car" size={30} color="#107878" /> :
								<Icon name="motorcycle" size={30} color="#107878" />
							}

							<Text style={styles.btnCar_text}>{car.brand + " " + car.model}</Text>
						</TouchableOpacity>
        					<TouchableOpacity style={[styles.atualizarLista, {left : hide}]}>
         		 				<FlexSelect
            							funcao={setFlexFuel}
          						/>
        					</TouchableOpacity>
      					
					</View>
				}

				<View style={styles.btnViewContainer}>

					<TouchableOpacity
						style={styles.btnScreans}
						onPress={Rank}>
						<Icon name="line-chart" size={25} color="#107878" />
						<Text style={styles.textoIcones}>Ranque</Text>
					</TouchableOpacity>

					<TouchableOpacity 
					style={styles.btnScreans}
					onPress={reloadPage}>
						<Icon name="home" size={30} color="#A9A9A9" />
						<Text style={styles.textoIconesSelecao}>Início</Text>
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
						<Text style={styles.textoIcones}>Veículos</Text>
					</TouchableOpacity>
				</View>


				<MapView
					style={cssMapa.map}
					initialRegion={initialLocation}
					provider="google"
					showsUserLocation={true}
					loadingEnabled={true}
					showsMyLocationButton={false}
				>
					{postos.length > 0 &&
						postos.map((m) => {
							return (
								<Marker coordinate={{
									latitude: Number(m.latitude),
									longitude: Number(m.longitude),
									latitudeDelta: 0.000922,
									longitudeDelta: 0.000421
								}}
									key={m.id}
									title={m.name}
									description={m.adress}
								/>
							);
						})}

					{origin && postos.length > 0 &&
						postos.map((m2) => {
							return (
								<MapViewDirections
									origin={origin}
									destination={{
										latitude: Number(m2.latitude),
										longitude: Number(m2.longitude),
										latitudeDelta: 0.000922,
										longitudeDelta: 0.000421
									}}
									apikey={keys.googleMapKey}
									strokeWidth={0}
									onReady={result => {
										distlist.push({ id: m2.id, distance: result.distance });
										setDistancias(distlist);
									}}
								/>
							)
						})
					}
				</MapView>
			</View>
		</View>
	);
}

