import {StyleSheet} from "react-native";

const cssMapa = StyleSheet.create({
    container: {
        flex: 0,
        position: 'relative'
    },
    map:{
        width: '100%',
        height: "90%",
        backgroundColor: '#fff',
        marginTop: '17%',
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
        width: '100%',
        justifyContent: 'space-around',
        marginBottom: '10%'
    },
    btnContainer:{
       width: '25%',
       height: 100,
       backgroundColor: '#107878',
       borderRadius: 30,
       alignContent: 'center',
       alignItems: 'center',
       justifyContent: 'center', 
    },
    iconContainer: {

    },
});
export {cssMapa};