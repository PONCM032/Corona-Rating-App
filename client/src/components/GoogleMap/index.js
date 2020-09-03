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

const Map = (props) => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  let mapCenterCoords =
    (props.placeLatitude && props.placeLongitute) === 0
      ? { lat: props.userLatitude, lng: props.userLongitude }
      : { lat: props.placeLatitude, lng: props.placeLongitute };

  console.log(mapCenterCoords);

  function handleChange() {
    mapCenterCoords = { lat: props.placeLatitude, lng: props.placeLongitute };
  }

  // console.log(
  //   `place lat: ${props.placeLatitude} and long: ${props.placeLongitute}`
  // );
  // console.log(
  //   `user lat: ${props.userLatitude} userlong: ${props.userLongitude}`
  // );

  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: mapCenterCoords.lat, lng: mapCenterCoords.lng }}
      defaultOptions={{ styles: mapStyle }}
      // onClick={centerMap(setSelectedPlace)}
    >
      {places.results.map((place) => (
        <Marker
          key={place.place_id}
          position={{ lat: mapCenterCoords.lat, lng: mapCenterCoords.lng }}
          // onClick={() => {
          //   setSelectedPlace(place);
          // }}
          icon={{
            url:
              "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            scaledSized: new window.google.maps.Size(25, 25),
          }}
        />
      ))}

      {selectedPlace && (
        <InfoWindow
          position={{
            lat: mapCenterCoords.lat,
            lng: mapCenterCoords.lng,
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
