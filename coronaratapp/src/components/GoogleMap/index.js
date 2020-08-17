import React from "react";
import { GoogleMap, withGoogleMap, withScriptjs, Marker } from "react-google-maps";

const Map = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: 37.7749,
        lng: -122.4194 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: 37.7749,
            lng: -122.4194 }} />
      )}
    </GoogleMap>
  ))
);

export default Map;
