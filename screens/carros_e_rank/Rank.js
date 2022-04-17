import { Text, View, StyleSheet } from 'react-native';

export default function Rank(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>
                Rank
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