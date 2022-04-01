import { StatusBar } from "expo-status-bar";
import React, {useState, useEffect, useRef} from 'react';
import { Text, View } from 'react-native';
import { cssMapa } from "./cssMapa";
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default function Mapa(){
	
	const [origem, setOrigem]=useState(null);
	const [destino, setDestino]=useState(null);

	useEffect(() => {
		(async function(){
			const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION_FOREGROUND);
			if(status === "granted")
			{
				let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
				setOrigem({
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
			zoomEnabled={true}
			loadingEnabled={true}

			>

			</MapView>

			<View style={cssMapa.search}>

			</View>
		</View>

	)
}