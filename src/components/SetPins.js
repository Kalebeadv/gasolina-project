import React, { Component } from "react";
import { Marker } from "react-native-maps"
import { Text, View } from "react-native";
import { urlRootNode } from '../../config/config.json'

export default class SetPins extends Component {
    constructor(f){
        this.f = f
    }

    async getPosto() {
        var reqs = await fetch(urlRootNode + 'station', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });
        let ress = await reqs.json();
        return ress;
    }
    geraMarker(obj) {
        let j = []
        for (let i = 0; i < obj.length; i++) {
            j.push(
                <Marker coordinate={{
                    latitude: 0,
                    longitude: 0,
                    latitudeDelta: 0.000922,
                    longitudeDelta: 0.000421
                }}
                    title=''
                    description=''
                >
                </Marker>
            )
            console.log(j)
        }
        return j;
    }

    render() {
        <View>
            {f = this.geraMarker(this.getPosto())} 
            {console.log(f)}
        </View>
    }
}