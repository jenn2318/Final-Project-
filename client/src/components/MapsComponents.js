import React from "react";
// import ApiKey from "../../Apikey";
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapsComponents = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px`, width: `39%`, marginTop: `20px`, marginLeft:`15px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={14}
        defaultCenter={{lat: props.centerLat, lng: props.centerLong }}
        // defaultCenter={{lat: 33.7764, lng: -84.3893 }}
    >
        {props.isMarkerShown && props.children}
    </GoogleMap>
)



export default MapsComponents;