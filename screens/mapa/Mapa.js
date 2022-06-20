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
import DirectForGoogle from "../../src/components/Directions"

export default function Mapa({ navigation }) {

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
	const [postos, setPostos] = useState([])
	const [distanciaOriginPosto, setDistanciaOriginPosto] = useState({
		latitude: 0,
		longitude: 0,
		latitudeDelta: 0.1,
		longitudeDelta: 0.1
	})
	const [reload, setReload] = useState(null);
	const [left, setLeft] = useState('60%')
	const [postoSelecionado, setPostoSelecionado] = useState([])
	const [googleOn, setGoogleOn] = useState(null)


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

	function infoPosto(){
		navigation.navigate("InfoPosto", {posto: JSON.stringify(postoSelecionado)})
	}
	function btnInfo(posto){
		setLeft("0%")
		setPostoSelecionado(posto)
	}

	function trassarRota(){
		setDistanciaOriginPosto({
			latitude: Number(postoSelecionado.latitude),
			longitude: Number(postoSelecionado.longitude),
			latitudeDelta: 0.3,
			longitudeDelta: 0.3
		})
		setGoogleOn(false)
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
		getPosto()
	},[reload])

	useEffect(() => {
		setGoogleOn(true)
	}, [postoSelecionado])
	


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
				
				<View style={[cssMapa.fazRotaContainer, {left}]}>
                	<TouchableOpacity style={[cssMapa.fazRota, {width: 60, height: 60} ]} onPress={infoPosto}>
                	    <Icon name="info" size={34} color="#107878" />
                	</TouchableOpacity>
				{googleOn == true?
                	<TouchableOpacity style={cssMapa.fazRota} onPress={trassarRota}>
                	    <Icon name="share" size={40} color="#107878" />
                	</TouchableOpacity>:

					<TouchableOpacity style={cssMapa.fazRota} onPress={infoPosto}>
                	    <DirectForGoogle 
							start={originA}
							end={{
								latitude : Number(postoSelecionado.latitude),
								longitude : Number(postoSelecionado.longitude)
								}}
						/>
                	</TouchableOpacity>
				}
           	 	</View>

				<View style={cssMapa.btnViewContainer}>
        			<TouchableOpacity 
        			style={cssMapa.btnScreans}
        			onPress={Rank}>
        			    <Icon name="line-chart" size={25} color="#107878" />
						<Text style={cssMapa.textoIcones}>Ranque</Text>
        			</TouchableOpacity>

					<TouchableOpacity 
					style={cssMapa.btnScreans}
          			onPress={Home}>
            			<Icon name="home" size={30} color="#107878" />
            			<Text style={cssMapa.textoIcones}>Início</Text>
          			</TouchableOpacity>

        			<TouchableOpacity 
        			style={cssMapa.btnScreans}
        			onPress={reloadPage}>
        			    <Icon name="map-marker" size={30} color="#A9A9A9" />
						<Text style={cssMapa.textoIconesSelecao}>Mapa</Text>
        			</TouchableOpacity>

        			<TouchableOpacity 
        			style={cssMapa.btnScreans}
        			onPress={selecionaCarro}>
        				<Icon name="dashboard" size={25} color="#107878" />
						<Text style={cssMapa.textoIcones}>Veículos</Text>
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
								title={m.name}
								description={m.adress}
								onPress={() => {btnInfo(m)}}
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