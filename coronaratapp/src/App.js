import React from "react";
import "./App.css";
// import Map from "./components/GoogleMap/index1";
import Map from "./components/GoogleMap";

const libraries = ["places"];

function App() {
  return (
    <Map
      isMarkerShown
      googleMapURL={{
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
      }}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `500px`, width: `500px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}

export default App;
