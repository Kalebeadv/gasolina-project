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
    cadastraEExclui:{
        flexDirection: 'row',
        justifyContent:"center",
        top: '150%',
        zIndex: 9
    },
    cadastroVeiculos: {
        justifyContent:"center",
        backgroundColor: '#757F7A',
        height: 40,
        marginBottom: "5%",
        backgroundColor: "#107878",
        borderRadius: 12,
        marginHorizontal:"10%",
        top:"2.5%",
        flexDirection: 'row',
    },
    nome_rota: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    },
    btnViewContainer: {
		width: "90%",
		height:"10%",
		backgroundColor: "#ffffff",
		flexDirection: "row",
		borderRadius: 12,
		justifyContent: "center",
		alignItems: "center",
		bottom: '8%',
		zIndex: 9
	},
	btnScreans: {
		justifyContent: "center",
		alignItems:"center",
		width: "16%",
		height: "70%",
		marginBottom: "5%",
		backgroundColor: "#107878",
		borderRadius: 12,
		marginHorizontal:"10%",
		top:"2.5%"
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
        paddingLeft: "5%",
        marginTop: 10,
        marginRight: 5
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
        left:"95%",
        top:"15%"
    }
}); 

export {styles};