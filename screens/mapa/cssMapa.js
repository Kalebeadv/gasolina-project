import {StyleSheet} from "react-native";

const cssMapa = StyleSheet.create({
    container: {
        flex: 0,
        position: 'relative',
    },
    map:{
        width: '100%',
        height: "100%",
        backgroundColor: '#fff',
    },
	home:{
		display: 'flex',
        flexDirection:'row',
        zIndex: 9,
        width: '25%',
        height: '10%',
        justifyContent: 'space-around',
        marginBottom: '8%',
        backgroundColor: '#757F7A',
		alignContent: 'center',
       alignItems: 'center',
       justifyContent: 'center',
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
	fazRotaContainer:{
        flexDirection: 'row',
        justifyContent:"center",
        zIndex: 9,
        width: '100%'
    },
    fazRota: {
        justifyContent:"center",
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        width: 70,
        height: 70,
        borderRadius: 100,
        paddingRight: 2,
        marginLeft: '75%',
        marginBottom: '5%',
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
    textoRota:{
        fontSize: 20,
        color: '#000'
    },
    teste:{
        zIndex: 9
    }
});

const newMap = [
	{
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#f5f5f5"
		}
	  ]
	},
	{
	  "elementType": "labels.icon",
	  "stylers": [
		{
		  "visibility": "off"
		}
	  ]
	},
	{
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#616161"
		}
	  ]
	},
	{
	  "elementType": "labels.text.stroke",
	  "stylers": [
		{
		  "color": "#f5f5f5"
		}
	  ]
	},
	{
	  "featureType": "administrative",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "visibility": "off"
		}
	  ]
	},
	{
	  "featureType": "administrative.country",
	  "stylers": [
		{
		  "visibility": "on"
		}
	  ]
	},
	{
	  "featureType": "administrative.land_parcel",
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#bdbdbd"
		}
	  ]
	},
	{
	  "featureType": "administrative.locality",
	  "stylers": [
		{
		  "visibility": "on"
		}
	  ]
	},
	{
	  "featureType": "administrative.neighborhood",
	  "stylers": [
		{
		  "visibility": "on"
		}
	  ]
	},
	{
	  "featureType": "administrative.province",
	  "stylers": [
		{
		  "visibility": "on"
		}
	  ]
	},
	{
	  "featureType": "landscape.man_made",
	  "stylers": [
		{
		  "color": "#c0bfbf"
		},
		{
		  "visibility": "on"
		}
	  ]
	},
	{
	  "featureType": "landscape.natural",
	  "stylers": [
		{
		  "color": "#88a095"
		}
	  ]
	},
	{
	  "featureType": "landscape.natural.landcover",
	  "stylers": [
		{
		  "color": "#a0aba3"
		}
	  ]
	},
	{
	  "featureType": "landscape.natural.terrain",
	  "stylers": [
		{
		  "color": "#66756a"
		}
	  ]
	},
	{
	  "featureType": "poi",
	  "stylers": [
		{
		  "visibility": "off"
		}
	  ]
	},
	{
	  "featureType": "poi",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#eeeeee"
		}
	  ]
	},
	{
	  "featureType": "poi",
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#757575"
		}
	  ]
	},
	{
	  "featureType": "poi.park",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#e5e5e5"
		}
	  ]
	},
	{
	  "featureType": "poi.park",
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#9e9e9e"
		}
	  ]
	},
	{
	  "featureType": "road",
	  "elementType": "labels.icon",
	  "stylers": [
		{
		  "visibility": "off"
		}
	  ]
	},
	{
	  "featureType": "road.arterial",
	  "elementType": "geometry.fill",
	  "stylers": [
		{
		  "color": "#d5bdb8"
		}
	  ]
	},
	{
	  "featureType": "road.arterial",
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#757575"
		}
	  ]
	},
	{
	  "featureType": "road.highway",
	  "stylers": [
		{
		  "visibility": "on"
		}
	  ]
	},
	{
	  "featureType": "road.highway",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#dadada"
		}
	  ]
	},
	{
	  "featureType": "road.highway",
	  "elementType": "geometry.fill",
	  "stylers": [
		{
		  "color": "#ff8a76"
		}
	  ]
	},
	{
	  "featureType": "road.highway",
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#616161"
		}
	  ]
	},
	{
	  "featureType": "road.local",
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#9e9e9e"
		}
	  ]
	},
	{
	  "featureType": "transit",
	  "stylers": [
		{
		  "visibility": "off"
		}
	  ]
	},
	{
	  "featureType": "transit.line",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#e5e5e5"
		}
	  ]
	},
	{
	  "featureType": "transit.station",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#eeeeee"
		}
	  ]
	},
	{
	  "featureType": "water",
	  "stylers": [
		{
		  "color": "#6f90d3"
		},
		{
		  "visibility": "on"
		}
	  ]
	},
	{
	  "featureType": "water",
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#9e9e9e"
		}
	  ]
	}
	
]

export {cssMapa, newMap};

