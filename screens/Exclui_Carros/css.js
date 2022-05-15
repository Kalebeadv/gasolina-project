import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        marginTop: "20%",
        backgroundColor: '#fff',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
    },
    texto: { // trocar o nome quando colocar o select de carros
        fontSize: 15,
        color: '#107878',
        marginTop: '50%' // mudar apenas aqui para emplementar o select dos carros
    },
    cadastraEExclui:{
        flexDirection: 'row',
        justifyContent:"center",
    },
    excluiVeiculo: {
        justifyContent:"center",
        backgroundColor: '#757F7A',
        width: '25%',
        height: 50,
        marginBottom: '5%',
        marginLeft:"65%",
        marginRight:"5%",
        paddingTop: 10,
        marginTop: 20,
        flexDirection: 'row',
        paddingRight: 5
    },
    nome_rota: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20
    },
    btnViewContainer: {
        display: 'flex',
        flexDirection: 'row',
        zIndex: 9,
        width: '90%',
        height: '10%',
        justifyContent: 'space-around',
        marginBottom: '6%',
        backgroundColor: '#107878',
        borderRadius: 30,
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
        borderRadius: 30,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2%',

    },
    textoRota: {
        fontSize: 20,
        color: '#fff'
    },
    item: {
        width: "100%",
        padding: 20,
        paddingBottom: 10,
        paddingTop: 10,
        marginVertical: 8,
        borderRadius: 16,
    },
    title: {
        fontSize: 24,
    },
    icone:{
        paddingLeft: "5%"
    }
}); 

export {styles};