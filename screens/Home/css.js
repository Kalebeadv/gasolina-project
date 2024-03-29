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
        height: "55%",
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
        fontSize: 45,
        fontStyle: "italic",
        fontWeight: "bold",
        color: "#808080",
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
        top:"10%"
    },
    btnCar: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D3D3D3",
        borderRadius: 100,
        height: 50,
        marginBottom: "5%",
        flexDirection: "row",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    carsContainer: {
        width: "90%",
        marginHorizontal: "auto",
        marginVertical: "auto",
        top: "10%",
    },
    btnViewContainer: {
        width: "100%",
        height: "18%",
        position:"absolute",
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9,
        top: "107%",
    },
    btnScreans: {
        justifyContent: "center",
        alignItems: "center",
        width: "16%",
        height: "70%",
        marginBottom: "5%",
        borderRadius: 12,
        marginHorizontal: "5%",
        top: "2.5%",
    },
    textoIcones: {
        color: "#107878",
    },
    textoIconesSelecao: {
        color: "#A9A9A9",
    },
    svgBack: {
        position: "absolute",
        marginHorizontal: "auto",
        marginTop: "auto",
        left: "-8%"
    },
    allContainer: {
        top: "13%",
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
    txtRotaTitle: {
        fontSize: 19,
        top:"-20%",
        color:"#107878",
        fontWeight: "bold",
    },
    txtRotaPrice: {
        fontSize: 17,
        top:"-10%",
        left:"5%",
        fontWeight: "bold",
        color:"#107878"
    },
    txtRotaDistance: {
        fontSize: 17,
        left:"5%",
        fontWeight: "bold",
        color:"#107878"
    },
    atualizarLista: {
        width: '40%',
        height: 40,
        fontSize: 20,
        borderStyle: 'solid',
        borderColor: '#ffffff',
        borderWidth: 1,
        borderRightWidth: 1,
        borderBottomWidth: 1,
        padding: 10,
        paddingRight: 2,
        backgroundColor: "#ffffff",
        flexDirection: "row",
        borderRadius: 100,
        marginLeft: '26%',
        position: "absolute",
        top: "78%"
    },
    bomba:{
        position: "absolute",
        right:"5%"
    },
    infoContainer:{
        width: "90%",
        height: "50%",
        justifyContent: 'center',
    },
    txtBemVindo:{
        fontSize: 30,
        top:"-20%",
        color:"#107878",
        fontWeight: "bold",
    },
    txtQuest:{
        fontSize: 17,
        top:"-10%",
        color:"#107878",
        fontWeight: "bold",
    },
    gasolinaContainer:{
        flexDirection:"row",
        top:"10%"
    },
    siginOut:{
        left:"250%",
        top:"4%"
    }
});

export { styles }
