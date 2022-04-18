import React from 'react';
import { Text, View } from 'react-native';


export default function GasStation() {


   var gasStation 

    async function RetornaGasStation() {
        var reqs = await fetch(config.urlRootNode + 'GasStation', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          
        });
    
        let ress = await reqs.json();
    
        gasStation = JSON.parse(ress);
        return gasStation;
    
      }
      
    return (
        {RetornaGasStation}
    )
}