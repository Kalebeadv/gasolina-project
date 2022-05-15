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
        backgroundColor: '#fff',
        marginTop: '10%',
        width: '90%',
        height: '60%'
    },
    texto: { // trocar o nome quando colocar o select de carros
        fontSize: 15,
        color: '#107878',
        marginTop: '50%' // mudar apenas aqui para emplementar o select dos carros
    },
    cadastraEExclui:{
        flexDirection: 'row',
        justifyContent:"center",
        marginTop: '115%'
    },
    cadastroVeiculos: {
        justifyContent:"center",
        backgroundColor: '#757F7A',
        width: '20%',
        height: 50,
        marginBottom: '5%',
        marginLeft:"5%",
        marginRight:"5%",
        paddingTop: 10,
        marginTop: 20,
        flexDirection: 'row',
    },
    nome_rota: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    },
    btnViewContainer: {
        display: 'flex',
        flexDirection:'row',
        zIndex: 9,
        width: '90%',
        height: '10%',
        justifyContent: 'space-around',
        marginBottom: '8%',
        backgroundColor: '#757F7A',
    },
    btnContainer: {
        width: '25%',
        borderRadius: 30,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnRotaContainer: {
        width: '25%',
        height: '80%',
        backgroundColor: '#fff',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2%',
    },
    textoRota: {
        fontSize: 20,
        color: '#FF8A76'
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
    },
    icone:{
        paddingLeft: "5%"
    }
}); 

export {styles};