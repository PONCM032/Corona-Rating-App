import React from "react";
import "./App.css";
import WrappedMap from "./components/GoogleMap";

function App() {
  return (
    <div style={{ margin: '0 auto', width: "50vw", height: "50vh" }}>
      <WrappedMap
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
