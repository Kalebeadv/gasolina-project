import { Text, View, StyleSheet } from 'react-native';

export default function Carros(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>
                Carros
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
}); 