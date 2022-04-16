import React from 'react';


export default function CalcularRota() {

    const [consumo, setconsumo] = useState(null);


    async function CalcularRota() {
        let reqs = await fetch(config.urlRootPhp + 'Controller.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                consumoUser: consumo
            })
        });
        let ress = await reqs.json();
        Keyboard.dismiss();
        if (ress || ress == null) {
            await AsyncStorage.setItem('consumo', consumo);
            
        } else {
            Alert.alert(
                "Algo inesperado",
                "Email ou Senha invalido"
            )
        }
    }




    return (

        console.log("Calculo da rota")

    );
}