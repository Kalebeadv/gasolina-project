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
	const [originA, setOrigin] = useState({
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
	const [distanciaOriginPosto, setDistanciaOriginPosto] = useState({
		latitude: Number(route.lati),
		longitude: Number(route.long),
		latitudeDelta: 0.1,
		longitudeDelta: 0.1
	})
	const [cars, setCars] = useState([]);
	const [selectedId, setSelectedId] = useState(route.car);
	const [reload, setReload] = useState(route.reload);
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
		let car = await AsyncStorage.getItem("VeiculoSelecionado")
		setCars(JSON.parse(carros))
		setSelectedId(JSON.parse(car))
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
				console.log(originA)
			} else {
				throw new Error('Location permission not granted');
			}
		}
		)(getCars());
	}, []);
	useEffect(() => {
		getPosto();
	})


	function buscar_icon()
	{
		return <Icon name="trophy" size={25} color="#FF8A76"/>
	}

  	function selecionaCarro(){ navigation.navigate("Carros") }
  	function Rank(){ navigation.navigate("Rank") }

	function Home(){ navigation.navigate("Home")}
	function Mapa(){ navigation.navigate("Mapa")}

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
							width: "95%",
							zIndex: 1,
							marginTop: '15%',
						},
						listView: {
						},
						textInput: {
							fontSize: 20,
							borderRadius: 10,
							backgroundColor: '#fff',
							color: 'black',
							borderWidth: 1,
							borderColor: "#107878"
						},
						
					}}
				/>
				
				<View style={cssMapa.fazRotaContainer}>
                	<TouchableOpacity style={cssMapa.fazRota}>
                	    <Icon name="dollar" size={40} color="#107878" />
                	</TouchableOpacity>
           	 	</View>

				<View style={cssMapa.btnViewContainer}>
        			<TouchableOpacity 
        			style={cssMapa.btnScreans}
        			onPress={Rank}>
        			    <Icon name="line-chart" size={25} color="#107878" />
						<Text style={cssMapa.textoIcones}>Ranking</Text>
        			</TouchableOpacity>

					<TouchableOpacity 
					style={cssMapa.btnScreans}
          			onPress={Home}>
            			<Icon name="home" size={30} color="#107878" />
            			<Text style={cssMapa.textoIcones}>Inicio</Text>
          			</TouchableOpacity>

        			<TouchableOpacity 
        			style={cssMapa.btnScreans}
        			onPress={Mapa}>
        			    <Icon name="map-marker" size={30} color="#A9A9A9" />
						<Text style={cssMapa.textoIconesSelecao}>Mapa</Text>
        			</TouchableOpacity>

        			<TouchableOpacity 
        			style={cssMapa.btnScreans}
        			onPress={selecionaCarro}>
        				<Icon name="car" size={25} color="#107878" />
						<Text style={cssMapa.textoIcones}>Carros</Text>
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
				showsMyLocationButton={false}
			>
				{region &&
					<MapViewDirections
						origin={originA}
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

				{originA &&
					<MapViewDirections
						origin={originA}
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