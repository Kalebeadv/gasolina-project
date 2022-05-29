import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, RefreshControl } from 'react-native';
import MapView, { Callout, Circle, Marker } from "react-native-maps"
import { styles } from './css';
import Icon from "react-native-vector-icons/FontAwesome";
import Background from "../../assets/SvgImages/BackgroundHome.svg"
import BombaDeGasolina from "../../assets/SvgImages/Bomba de Gasolina.svg"
import MapViewDirections from 'react-native-maps-directions';
import keys from '../../config/googleConfig.json';
import { cssMapa, newMap } from "./cssMapa";
import { urlRootNode } from '../../config/config.json'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import RNRestart from 'react-native-restart';


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
	const [distancias, setDistancias] = useState([])
	const [fuel, setFuel] = useState([])
	const [postos, setPostos] = useState([])
	const [postoMaisEconomico, setPostoMaisEconomico] = useState([]);
	const [cars, setCars] = useState([]);
	const [selectedId, setSelectedId] = useState(route.id);
	const [combustivelEconomico, setCombustivelEconomico] = useState(null);
	const [distanciaPosto, setDistanciaPosto] = useState(null)
	const [refreshing, setRefreshing] = React.useState(false);
	const wait = (timeout) => {
		return new Promise(resolve => setTimeout(resolve, timeout));
	  }
	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		getFuel()
		getPosto()
		comparaDistancia()
		wait(2000).then(() => setRefreshing(false));
	}, []);

	useEffect(() => {
		(async function () {
			const { status } = await Location.requestForegroundPermissionsAsync();
			if (status === 'granted') {
				let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
				setOrigin({
					latitude: location.coords.latitude,
					longitude: location.coords.longitude,
					latitudeDelta: 0.000922,
					longitudeDelta: 0.000421
				})
				console.log(origin)
			} else {
				throw new Error('Location permission not granted');
			}
		}
		)(getCars());
	}, []);

	useEffect(() => {
		getFuel()
		getPosto()
	}, [selectedId])

	useEffect(() => {
		comparaDistancia()
	})

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
		var reqs = await fetch(urlRootNode + 'fuel', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		});
		let ress = await reqs.json();
		setFuel(ress);
	}
	async function getCars() {
		let carros = await AsyncStorage.getItem("CarrosUser");
		let id = await AsyncStorage.getItem("VeiculoSelecionado")
		setCars(JSON.parse(carros))
		setSelectedId(JSON.parse(id))
		console.log(id)
	}

	async function comparaDistancia() {
		let selecionado = selectedId;
		let calc;
		let menor = 0;
		let econ;
		let combustivel;
		let combuEco;
		let distan;
		console.log(distancias)

		for (let i = 0; i < postos.length; i++) {
			for (let j = 0; j < fuel.length; j++) {
				if (fuel[j].idGasstation == postos[i].id) {
					combustivel = fuel[j]
				}
			}
			console.log(selecionado)
			calc = (Number(combustivel.valor) * Number(distancias[i])) / Number(selecionado.consumo)

			if (menor == 0) {
				menor = calc
				combuEco = combustivel
				distan = Number(distancias[i])
				econ = postos[i]
			} else if (calc < menor) {
				menor = calc
				combuEco = combustivel
				distan = Number(distancias[i])
				econ = postos[i]
			}
		}

		setPostoMaisEconomico(econ);
		setCombustivelEconomico(combuEco);
		setDistanciaPosto(distan);
	}


	//------------------------- Navigate -------------------
	function go_to_mapa() { navigation.navigate("Mapa", { lati: postoMaisEconomico.latitude, long: postoMaisEconomico.longitude }) }
	function selecionaCarro() { navigation.navigate("Carros") }
	function Rank() { navigation.navigate("Rank") }
	function MapaA() { navigation.navigate("Mapa") }

	return (
		<View style={styles.container}>
			<RefreshControl 
			refreshing={refreshing}
            onRefresh={onRefresh}/>
			<Background style={styles.svgBack} width={Dimensions.get("screen").width} height={Dimensions.get("screen").height + 20} />
			<View>
				<Text style={styles.gasolina}>Ga$olina</Text>
			</View>

			<View style={styles.allContainer}>
				<View style={styles.melhorContainer}>
					<BombaDeGasolina fill={"#107878"} width={160} height={160} />

					<Text>{postoMaisEconomico && postoMaisEconomico.name}</Text>
					<Text>{combustivelEconomico && "Distancia: " + distanciaPosto + "Km R$ " + combustivelEconomico.valor + ""}</Text>

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
						<Text style={styles.btnCar_text}>{selectedId && selectedId.brand + " " + selectedId.model}</Text>
					</TouchableOpacity>
				</View>

				<View style={styles.screansContainer}>

					<TouchableOpacity
						style={styles.btnScreans}
						onPress={Rank}>
						<Icon name="line-chart" size={25} color="#ffffff" />
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.btnScreans}
						onPress={MapaA}>
						<Icon name="map-marker" size={30} color="#ffffff" />
					</TouchableOpacity>

					<TouchableOpacity
						style={styles.btnScreans}
						onPress={onRefresh}>
						<Icon name="map-marker" size={25} color="#ffffff" />
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

					{postos.length > 0 &&
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
										distlist.push(result.distance)
										setDistancias(distlist)
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

