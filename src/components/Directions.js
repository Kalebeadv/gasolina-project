import getDirections from 'react-native-google-maps-directions'
import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class DirectForGoogle extends Component {

    handleGetDirections = () => {
        const data = {
            source: this.props.start,
            destination: this.props.end,
            params: [
                {
                    key: "travelmode",
                    value: "driving"
                },
                {
                    key: "dir_action",
                    value: "navigate"
                }
            ],
        }

        getDirections(data)
    }

    render() {
        return (
            <View>
                <Text style={styles.text} onPress={this.handleGetDirections} >GO</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    },
    text: {
        textAlign: 'center',
        color: '#107878',
        fontSize:30,
        fontWeight: "bold",
    },
})