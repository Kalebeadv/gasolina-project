import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        width: "100%"
    },
    melhorContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderRadius: 10,
        width: "90%",
    },
    gasolina: {
        top: "90%",
        fontSize: 40,
        fontStyle: "italic",
        color: "#ffffff"
    },
    image: {
        fontSize: 50,
        marginBottom: "10%"
    },
    btnRoute: {
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "#107878",
        borderRadius: 100,
        width: "70%",
        height: 40,
        marginBottom: "5%",
        flexDirection:"row",
    },
    btnCar: {
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: "#D7E2FF",
        borderRadius: 100,
        height: 50,
        marginBottom: "5%",
        flexDirection:"row"
    },
    carsContainer: {
        width: "90%",
        marginHorizontal: "auto",
        marginVertical: "auto",
        top: "10%"
    },
    screansContainer: {
        width: "90%",
        top: "30%",
        backgroundColor: "#ffffff",
        flexDirection: "row",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    btnScreans: {
        justifyContent: "center",
        alignItems:"center",
        width: "15%",
        height: 40,
        marginBottom: "5%",
        backgroundColor: "#107878",
        borderRadius: 12,
        marginHorizontal:"10%",
        top:"2.5%"
    },
    svgBack: {
        position: "absolute",
        marginHorizontal: "auto",
        marginTop: "auto",
        left: "0.1%"
    },
    allContainer:{
        top:"25%",
        justifyContent: 'center',
        alignItems:"center",
    },
    btnRoute_text:{
        color:"#ffffff",
        marginEnd:"5%",
        fontSize:20
    },
    btnCar_text:{
        color:"#107878",
        marginStart:"5%",
        fontSize:25
    }

});

export { styles }