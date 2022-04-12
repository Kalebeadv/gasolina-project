import {StyleSheet} from "react-native";

const cssMapa = StyleSheet.create({
    container: {
        flex: 0,
        position: 'relative'
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
        height: '7%',
        width: '100%',
        justifyContent: 'space-around',
        marginBottom: '7%'
    },
    btnContainer:{
       width: '35%',
       backgroundColor: '#107878',
       borderRadius: 8, 
    },
    textContainer: {
        textAlign: 'center',
        marginTop: '6%',
        fontSize: 20,
        color: 'white'
    },
});
export {cssMapa};