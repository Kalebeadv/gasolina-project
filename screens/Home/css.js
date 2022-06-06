import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    melhorContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderRadius: 10,
        width: "90%",
        height:"50%",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        
    },
    gasolina: {
        top: "90%",
        fontSize: 45,
        fontStyle: "italic",
        color: "#ffffff",
        marginLeft: 15
    },
    image: {
        fontSize: 50,
        marginBottom: "10%",
    },
    btnRoute: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#107878",
        borderRadius: 100,
        width: "70%",
        height: 40,
        marginBottom: "5%",
        flexDirection: "row",
    },
    btnCar: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D7E2FF",
        borderRadius: 100,
        height: 50,
        marginBottom: "5%",
        flexDirection: "row",
    },
    carsContainer: {
        width: "90%",
        marginHorizontal: "auto",
        marginVertical: "auto",
        top: "10%",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    btnViewContainer: {
        width: "100%",
        height:"18%",
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9,
        top: "24%",
    },
    btnScreans: {
        justifyContent: "center",
        alignItems:"center",
        width: "16%",
        height: "70%",
        marginBottom: "5%",
        borderRadius: 12,
        marginHorizontal:"5%",
        top:"2.5%",
    },
    textoIcones: {
       color: "#107878",
    },
    svgBack: {
        position: "absolute",
        marginHorizontal: "auto",
        marginTop: "auto",
        left: "0.1%"
    },
    allContainer: {
        top:"13%",
        justifyContent: 'center',
        alignItems: "center",
    },
    btnRoute_text: {
        color: "#ffffff",
        marginEnd: "5%",
        fontSize: 20
    },
    btnCar_text: {
        color: "#107878",
        marginStart: "5%",
        fontSize: 25
    },
    container: {
        flex: 1,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export { styles }