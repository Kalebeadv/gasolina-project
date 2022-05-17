import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    background: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    svgBack:{
        position:"absolute",
        marginHorizontal:"auto",
        marginTop:"auto",
        left:"-50%",
        top:"-120%"
    },
    EntrarContainer: {
        width: '100%',
        top:"-40%",
        left:"-20%",
        marginTop:"20%"
    },
    gasolina: {
        top:"-10%",
        textAlign: "left",
        fontSize: 28,
        color: '#107878',
        fontStyle: 'normal',
    },
    comecarContainer:{
        bottom:"-65%",
        right:"-25%"
    },
    btnComecar:{
        justifyContent:"center",
        width:"100%",
        height:40,
        borderRadius:100,
        borderWidth:1,
        borderColor:"#ffff"
    },
    textoComecar:{
        textAlign:"center",
        color:"#ffffff"
    }
})

export { styles };