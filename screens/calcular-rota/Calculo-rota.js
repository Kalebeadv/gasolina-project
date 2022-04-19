import React from 'react';
import { Text, View } from 'react-native';
import urlRootNode from "../../config/config.json"


export default async function GasStation() {
  async function GetPosto() {
    let reqs = await fetch(urlRootNode + 'GasStation', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        vedade:"falso"
      })
    });

  return ress;
}return GetPosto()}