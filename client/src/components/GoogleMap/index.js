import React, { useState } from "react";
import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker,
  InfoWindow,
} from "react-google-maps";
import * as places from "../../utils/PlacesData/libraries.json";
import mapStyle from "../../utils/MapStyle";
// import GetLocation from "../GeoLocation/";

const Map = (props) => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: props.latitude, lng: props.longitude }}
      defaultOptions={{ styles: mapStyle}}
    >
      {places.results.map((place) => (
        <Marker
          key={place.place_id}
          position={{
            lat: place.geometry.location.lat,
            lng: place.geometry.location.lng,
          }}
          onClick={() => {
            setSelectedPlace(place);
          }}
          icon={{
            url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            scaledSized: new window.google.maps.Size(25, 25)
          }}
        />
      ))}

      {selectedPlace && (
        <InfoWindow
          position={{
            lat: selectedPlace.geometry.location.lat,
            lng: selectedPlace.geometry.location.lng,
          }}
          onCloseClick={() => {
            setSelectedPlace(null);
          }}
        >
          <div>
            <h2>{selectedPlace.name}</h2>
            <p>{selectedPlace.vicinity}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;
