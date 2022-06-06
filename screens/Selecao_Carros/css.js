import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: '#D1D2D3',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
    },
    carrosContainer: {
        flex: 1,
        position: 'absolute',
        marginTop: '13%',
        width: '90%',
        height: '70%',
        zIndex: 9
    },
    texto: { // trocar o nome quando colocar o select de carros
        fontSize: 15,
        color: '#107878',
        marginTop: '50%' // mudar apenas aqui para emplementar o select dos carros
    },
    cadastraVeiculoContainer:{
        flexDirection: 'row',
        justifyContent:"center",
        top: '160%',
        zIndex: 9,
        width: '100%'
    },
    cadastroVeiculos: {
        justifyContent:"center",
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        width: 70,
        height: 70,
        borderRadius: 100,
        paddingRight: 5,
        marginLeft: '75%',
        marginBottom: '5%'
    },
    nome_rota: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    },
    btnViewContainer: {
        width: "100%",
        height:"10%",
        backgroundColor: "#fff",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9
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
    item: {
        width: "100%",
        padding: 20,
        paddingBottom: 10,
        paddingTop: 10,
        marginTop: '3%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    icone:{
        marginTop: "5%",
        marginLeft: "8%"
    },
    svgBack:{
        position: 'absolute',
        width: '100%', 
    },
    info:{
        fontSize:16,
        top:"-15%",
        left:"5%"
    },
    itemContainer:{
        flexDirection:"row"
    },
    pincelIcon:{
        position:"absolute",
        left:"100%",
        top:"15%"
    },
    vehiIcon:{
        top:"2%",
        marginRight:"2%"
    }
}); 

export {styles};