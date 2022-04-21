import {StyleSheet} from "react-native";

const cssMapa = StyleSheet.create({
    container: {
        flex: 0,
        position: 'relative',
    },
    map:{
        width: '100%',
        height: "100%",
        backgroundColor: '#fff',
    },
    placeholderArea:{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignContent:'center',
        alignItems: 'center',
    },
    btnViewContainer:{
        display: 'flex',
        flexDirection:'row',
        zIndex: 9,
        width: '90%',
        height: '10%',
        justifyContent: 'space-around',
        marginBottom: '6%',
        backgroundColor: '#107878',
        borderRadius: 30,
    },
    btnContainer:{
       width: '25%',
       borderRadius: 30,
       alignContent: 'center',
       alignItems: 'center',
       justifyContent: 'center', 
    },
    btnRotaContainer:{
       width: '45%',
       height: '80%',
       backgroundColor: '#fff',
       borderRadius: 30,
       alignContent: 'center',
       alignItems: 'center',
       justifyContent: 'center',
       marginTop: '2%'
    },
    textoRota:{
        fontSize: 20,
        color: '#000'
    },
    teste:{
        zIndex: 9
    }
});
export {cssMapa};