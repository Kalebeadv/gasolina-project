import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet } from "react-native";
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import config from "../../config/googleConfig.json";



export default function Mapa() {

  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    (async function () {
      const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION_FOREGROUND);
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
    <View style={styleMapa.container}>
      <MapView style={styleMapa.map}
        initialRegion={origin}
        showsUserLocation={true}
        zoomEnabled={false}
        loadingEnabled={true}
      >
      </MapView>
      <View style={StyleSheet.search}>
        <GooglePlacesAutocomplete
          placeholder='Para onde vamos?'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: config.googleMapKey,
            language: 'pt-br',
          }}

          enablePoweredByContainer={false}
          fetchDetails={true}
          styles={{ listView: { height: 100 } }}
        />
      </View>
    </View>
  )
}


const styleMapa = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#fff',
    justifyContent: "flex-start",
  },
  map: {
    height: "70%"
  },
  search: {
    height: 50
  }
});