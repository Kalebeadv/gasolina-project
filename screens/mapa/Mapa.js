import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { cssMapa, newMap } from "./cssMapa";
import MapView, { Callout, Circle, Marker } from "react-native-maps"
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import keys from '../../config/googleConfig.json';
import { urlRootNode } from '../../config/config.json'
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Mapa({ route, navigation }) {

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
	const [distanciaOriginPosto, setDistanciaOriginPosto] = useState([])
	const [cars, setCars] = useState([]);
	const [selectedId, setSelectedId] = useState(route.id);

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
		setSelectedId(id)
	}

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

	async function comparaDistancia() {
		let selecionado;
		let calc;
		let menor = 0;
		let econ;
		let combustivel;
		console.log(distancias)
		for (let i = 0; i < cars.length; i++) {
			if (cars[i].id == selectedId) {
				selecionado = cars[i]
				console.log(selecionado)
			}
		}

		for (let i = 0; i < postos.length; i++) {
			for (let j = 0; j < fuel.length; j++) {
				console.log(fuel[j].idGasstation + " " + postos[i].id)
				if (fuel[j].idGasstation == postos[i].id) {
					combustivel = fuel[j]
				}
			}
			console.log(selecionado)
			calc = (Number(combustivel.valor) * Number(distancias[i])) / Number(selecionado.consumo)

			if (menor == 0) {
				menor = calc
				econ = postos[i]
			} else if (calc < menor) {
				menor = calc
				econ = postos[i]
			}
		}

		setDistanciaOriginPosto({
			latitude: Number(econ.latitude),
			longitude: Number(econ.longitude),
			latitudeDelta: 0.000922,
			longitudeDelta: 0.000421
		})
	}
	function buscar_icon()
	{
		return <Icon name="trophy" size={25} color="#FF8A76"/>
	}
	return (
		<View style={cssMapa.container}>
			<View style={cssMapa.placeholderArea}>
				
				<GooglePlacesAutocomplete
					placeholder="Buscar"
					icon={"trophy"}
					fetchDetails={true}
					GooglePlacesSearchQuery={{
						rankby: "distance"
					}}
					onPress={(data, details = null) => {
						// 'details' is provided when fetchDetails = true
						console.log(data, details)
						setRegion({
							latitude: details.geometry.location.lat,
							longitude: details.geometry.location.lng,
							latitudeDelta: 0.0922,
							longitudeDelta: 0.0421
						})
					}}
					query={{
						useEffect,
						key: "AIzaSyDkPz3CZtdL0jjmvHU0FQap1s7ktTwvWrM",
						language: "pt-br",
						components: "country:br",
						types: "establishment",
						radius: 30000,
						location: `${region.latitude}, ${region.longitude}`
					}}
					styles={{
						container: {
							width: "90%",
							zIndex: 1,
							marginTop: '15%'
						},
						listView: {
						},
						textInput: {
							fontSize: 20,
							borderStyle: 'solid',
							borderColor: '#FF8A76',
							borderWidth: 1,
							borderRightWidth: 1,
							borderBottomWidth: 1,
							textAlign: 'center',
							color: '#000'
						},
					}}
				/>
		
	
				<View style={cssMapa.btnViewContainer}>
					<TouchableOpacity style={cssMapa.btnContainer} onPress={() => { navigation.navigate('Rank') }}>
						<Text><Icon name="trophy" size={25} color="#FF8A76" /></Text>
					</TouchableOpacity>

					<TouchableOpacity style={cssMapa.btnRotaContainer} onPress={() => { comparaDistancia() }}>
						<Text style={cssMapa.textoRota}>Economizar <Icon name="dollar" size={25} color="#FF8A76"></Icon></Text>
					</TouchableOpacity>

					<TouchableOpacity style={cssMapa.btnContainer} onPress={() => { navigation.navigate('Carros') }}>
						<Text><Icon name="car" style={cssMapa.iconContainer} size={25} color="#FF8A76" /></Text>
					</TouchableOpacity>
				</View>
			</View>

			
			<MapView
				style={cssMapa.map}
				initialRegion={initialLocation}
				provider="google"
				showsUserLocation={true}
				loadingEnabled={true}
				customMapStyle={newMap}
				showsMyLocationButton={true}
			>
				{region &&
					<MapViewDirections
						origin={origin}
						destination={region}
						apikey={keys.googleMapKey}
						strokeWidth={4}
						onReady={result => {
							setDistance(result.distance);
						}
						}
					/>}
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
				{region &&
					<MapViewDirections
						origin={origin}
						destination={distanciaOriginPosto}
						apikey={keys.googleMapKey}
						strokeWidth={4}
						onReady={result => {
							setDistance(result.distance);
						}
						}
					/>}
			</MapView>
		</View>

	)
}