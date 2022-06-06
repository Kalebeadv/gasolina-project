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
		latitude: 0,
		longitude: 0,
		latitudeDelta: 0.1,
		longitudeDelta: 0.1
	})
	const [cars, setCars] = useState([]);
	const [selectedId, setSelectedId] = useState(null);
	const [reload, setReload] = useState(null);

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

	function reloadPage() {
		for (let i = reload; i <= reload + 1; i++) {
			setReload(i)
		}
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
				console.log(originA)
			} else {
				throw new Error('Location permission not granted');
			}
		
		},[reload])

	useEffect(() => {
        let psoto = JSON.parse(route.params.posto)
        console.log(psoto)

        setPostos(psoto);
		setDistanciaOriginPosto({
            latitude: Number(psoto.latitude),
            longitude: Number(psoto.longitude),
            latitudeDelta: 0.000922,
            longitudeDelta: 0.000421
        })
	},[originA])
	


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
			<View style={[cssMapa.placeholderArea, {top: "39%"}]}>
				
				
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
        			    <Icon name="map-marker" size={30} color="#107878" />
						<Text style={cssMapa.textoIcones}>Mapa</Text>
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
				{postos &&
						<Marker coordinate={{
							latitude: Number(postos.latitude),
							longitude: Number(postos.longitude),
							latitudeDelta: 0.000922,
							longitudeDelta: 0.000421
						}}
							key={postos.id}
							title={postos.name}
							description={postos.adress}
							/>
					}

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