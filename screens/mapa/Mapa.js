import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { cssMapa } from "./cssMapa";
import MapView, { Callout, Circle, Marker } from "react-native-maps"
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import keys from '../../config/googleConfig.json';
import { urlRootNode } from '../../config/config.json'
import MapViewDirections from 'react-native-maps-directions';
import Icon from 'react-native-vector-icons/FontAwesome'
import SetPins from '../../src/components/SetPins';
import { FA5Style } from '@expo/vector-icons/build/FontAwesome5';


export default function Mapa({ navigation }) {

	const [posto_isaurao, setPonto_isaurao] = useState({
		latitude: -9.968422105011024,
		longitude: -67.8053766143921
	})

	const mapEl = useRef(null);
	const [origin, setOrigin] = useState(null);
	const [distance, setDistance] = useState(null);
	const [region, setRegion] = React.useState({
		latitude: 0,
		longitude: 0,
		latitudeDelta: 0,
		longitudeDelta: 0
	})
	const [location, setLocation] = useState(null)
	const [postos, setPostos] = useState([])
	const [distanciaOriginPosto, setDistanciaOriginPosto] = useState([])

	async function comparaDistancia() {
		let postoLatitude;
		let postoLongitude;
		let salvaMaior;
		for (let i = 0; i < postos.length; i++) {
			postoLatitude = origin.latitude - postos[i].latitude;
			postoLongitude = origin.longitude - postos[i].longitude;
			if (i === 0) {
				salvaMaior = postos[i];
			}
			else if ((postoLatitude > salvaMaior.latitude) && (postoLongitude > salvaMaior.longitude)) {
				salvaMaior = postos[i];
			}
		}
		console.log(salvaMaior);
		setDistanciaOriginPosto(salvaMaior);
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
		console.log(ress)
		setPostos(ress);
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
			} else {
				throw new Error('Location permission not granted');
			}
		}
		)(getPosto());
	}, []);



	return (
		<View style={cssMapa.container}>
			<View style={cssMapa.placeholderArea}>
				<GooglePlacesAutocomplete 
						placeholder="Buscar"
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
								width: "100%", 
								zIndex: 1,
								marginTop: '7%'	
							},
							listView: { 
							},
							textInput: { 
								backgroundColor: "#fff", 
								fontSize: 20,
								borderStyle: 'solid',
    							borderColor: '#107878',
								borderRadius: 8,
    							borderWidth: 1,
    							borderRightWidth: 1,
    							borderBottomWidth: 3,
							},
							textInputContainer: {
							},
						}}
					/>

				<View style={cssMapa.btnViewContainer}> 
					<TouchableOpacity style={cssMapa.btnContainer} onPress={() => {navigation.navigate('Rank')}}>
          				<Text><Icon name="trophy" size={25} color="#fff"/></Text>
       				</TouchableOpacity>
						
					<TouchableOpacity style={cssMapa.btnRotaContainer} onPress={() => { comparaDistancia() }}>
						<Text style={cssMapa.textoRota}>Rota <Icon name="dollar" size={25} color="#107878"></Icon></Text>
					</TouchableOpacity>
						
					<TouchableOpacity style={cssMapa.btnContainer} onPress={() => {navigation.navigate('Carros')}}>
          				<Text><Icon name="car" style={cssMapa.iconContainer} size={25} color="#fff"/></Text>
       				</TouchableOpacity>	
				</View>	
			</View>


			<MapView
				style={cssMapa.map}
				initialRegion={origin}
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

				{distanciaOriginPosto &&
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

const newMap = [
	{
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#c9c5c5"
		},
		{
		  "visibility": "on"
		}
	  ]
	},
	{
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#523735"
		}
	  ]
	},
	{
	  "elementType": "labels.text.stroke",
	  "stylers": [
		{
		  "color": "#f5f1e6"
		}
	  ]
	},
	{
	  "featureType": "administrative",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "visibility": "off"
		}
	  ]
	},
	{
	  "featureType": "administrative",
	  "elementType": "geometry.stroke",
	  "stylers": [
		{
		  "color": "#c9b2a6"
		}
	  ]
	},
	{
	  "featureType": "administrative.land_parcel",
	  "elementType": "geometry.stroke",
	  "stylers": [
		{
		  "color": "#c8c9cb"
		}
	  ]
	},
	{
	  "featureType": "administrative.land_parcel",
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#000000"
		}
	  ]
	},
	{
	  "featureType": "landscape.natural",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#c9cfc9"
		}
	  ]
	},
	{
	  "featureType": "poi",
	  "stylers": [
		{
		  "visibility": "off"
		}
	  ]
	},
	{
	  "featureType": "poi",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#dfd2ae"
		}
	  ]
	},
	{
	  "featureType": "poi",
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#93817c"
		}
	  ]
	},
	{
	  "featureType": "poi.park",
	  "elementType": "geometry.fill",
	  "stylers": [
		{
		  "color": "#a5b076"
		}
	  ]
	},
	{
	  "featureType": "poi.park",
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#447530"
		}
	  ]
	},
	{
	  "featureType": "road",
	  "stylers": [
		{
		  "visibility": "simplified"
		}
	  ]
	},
	{
	  "featureType": "road",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#fffefa"
		},
		{
		  "visibility": "on"
		}
	  ]
	},
	{
	  "featureType": "road",
	  "elementType": "labels.icon",
	  "stylers": [
		{
		  "visibility": "off"
		}
	  ]
	},
	{
	  "featureType": "road.arterial",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#fdfcf8"
		}
	  ]
	},
	{
	  "featureType": "road.highway",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#cabc91"
		}
	  ]
	},
	{
	  "featureType": "road.highway",
	  "elementType": "geometry.stroke",
	  "stylers": [
		{
		  "color": "#e9bc62"
		}
	  ]
	},
	{
	  "featureType": "road.highway.controlled_access",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#e98d58"
		}
	  ]
	},
	{
	  "featureType": "road.highway.controlled_access",
	  "elementType": "geometry.stroke",
	  "stylers": [
		{
		  "color": "#db8555"
		}
	  ]
	},
	{
	  "featureType": "road.local",
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#806b63"
		}
	  ]
	},
	{
	  "featureType": "transit",
	  "stylers": [
		{
		  "visibility": "off"
		}
	  ]
	},
	{
	  "featureType": "transit.line",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#dfd2ae"
		}
	  ]
	},
	{
	  "featureType": "transit.line",
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#8f7d77"
		}
	  ]
	},
	{
	  "featureType": "transit.line",
	  "elementType": "labels.text.stroke",
	  "stylers": [
		{
		  "color": "#ebe3cd"
		}
	  ]
	},
	{
	  "featureType": "transit.station",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#dfd2ae"
		}
	  ]
	},
	{
	  "featureType": "water",
	  "elementType": "geometry.fill",
	  "stylers": [
		{
		  "color": "#4285f4"
		}
	  ]
	},
	{
	  "featureType": "water",
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#92998d"
		}
	  ]
	}
]