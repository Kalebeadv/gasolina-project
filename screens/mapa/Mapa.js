import { StatusBar } from "expo-status-bar";
import React, {useState, useEffect, useRef} from 'react';
import { Text, View } from 'react-native';
import { cssMapa } from "./cssMapa";
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import keys from '../../config/googleConfig.json';
import MapViewDirections from 'react-native-maps-directions';

export default function Mapa(){
	
	const mapEl=useRef(null);
	const [origem, setOrigem]=useState(null);
	const [destino, setDestino]=useState(null);
	const [distance, setDistance]=useState(null);

	useEffect(() => {
		(async function(){
			const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION_BACKGROUND);
			if( status === "granted")
			{
				let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
				setOrigem( {
					latitude: location.coords.latitude,
					longitude: location.coords.latitude,
					latitudeDelta: 0.00922,
					longitudeDelta: 0.00421
				})
			} else{
				throw new Error("Location permission not granted");
			}
		
		})()
	}, [])

	return(
		<View style={cssMapa.container}>

			<MapView style={cssMapa.map}
			initialRegion={origem}
			showsUserLocation={true}
			loadingEnabled={true}
			ref={mapEl}

			>
				{destino &&
					<MapViewDirections 
					origin={origem}
					destination={destino}
					apikey = {keys.googleMapKey}
					strokeWidth={3}
					onReady={result => {
						setDistance(result.distance)
						mapEl.current.fitToCoordinates(
							result.coordinates, {
								edgePadding:{
									top:50,
									bottom:50,
									left:50,
									right:50
								}
							}
						)
					}}
				/>

				}
				
			</MapView>

			<View style={cssMapa.search}>
				<GooglePlacesAutocomplete
				placeholder="Para onde vamos?"
				onPress={( data , details = null) => {
					setDestino = ( {
						latitude: details.geometry.location.lat,
						longitude: details.geometry.location.lng,
						latitudeDelta: 0.000922,
						longitudeDelta: 0.000421
					})
				}}
				query = {{
					key: keys.googleMapKey,
					language: 'pt-br',
				}}
				fetchDetails={ true }
				styles={ { listView: { height:100} } }

				/>
			</View>
			<View>
				<Text>Distancia: {distance}</Text>
			</View>
		</View>

	)
}