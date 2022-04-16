import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { cssMapa } from "./cssMapa";
import MapView, { Callout, Circle, Marker } from "react-native-maps"
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import keys from '../../config/googleConfig.json';
import MapViewDirections from 'react-native-maps-directions';

import Icon from 'react-native-vector-icons/FontAwesome'




export default function Mapa({navigation}) {

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
		})();
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
								marginTop: '5%'	
							},
							listView: { 
							},
							textInput: { 
								backgroundColor: "#fff", 
								fontSize: 20,
								borderStyle: 'solid',
    							borderColor: '#107878',
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
          				<Text><Icon name="trophy" style={cssMapa.iconContainer} size={35} color="#fff"/></Text>
       				</TouchableOpacity>
						
					<TouchableOpacity style={cssMapa.btnContainer} onPress={() => {navigation.navigate('Carros')}}>
          				<Text><Icon name="car" style={cssMapa.iconContainer} size={35} color="#fff"/></Text>
       				</TouchableOpacity>	
				</View>	
			</View>

					
			<MapView
				style={cssMapa.map}
				initialRegion={origin}
				provider="google"
				showsUserLocation={true}
				loadingEnabled={true}
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


				<Marker coordinate={{
					latitude: -9.96381794670852,
					longitude:  -67.826919587418,
					latitudeDelta: 0.000922,
					longitudeDelta: 0.000421
				}}
				title="Posto Petrobras Isaurão"
				description="Av. Nações Unidas, 2123 - Estacao Experimental"
				>
				</Marker>
				
				<Marker coordinate={{
					latitude: -9.965560070532558, 
					longitude:  -67.83312823666452,
					latitudeDelta: 0.000922,
					longitudeDelta: 0.000421
				}}
				title="Posto Petrobras"
				description="R.Isaura Parente, 1412-Estacao Experimental"
				>
				</Marker>

			</MapView>

			<View style={cssMapa.search}>
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
						container: { flex: 0, position: "absolute", width: "100%", zIndex: 1 },
						listView: { backgroundColor: "white" }
					}}
				/>
			</View>
			<View>
				<Text>Distancia: {distance}</Text>
			</View>
		</View>

	)
}