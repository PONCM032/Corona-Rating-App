import React from "react";
import WrappedMap from "../GoogleMap";

class GeoLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      userAddress: null,
    };
    this.getLocation = this.getLocation.bind(this);
    this.getCoordinates = this.getCoordinates.bind(this);
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.getCoordinates,
        this.handleLocationError
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  getCoordinates(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  }

  handleLocationError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
      default:
        alert("An unknown error occurred.");
    }
  }

  render() {
    return (
      <div>
        <h2>GeoLocation</h2>
        <button onClick={this.getLocation}>Get location</button>
        {/* <p>Lat: {this.state.latitude}</p>
        <p>Lon: {this.state.longitude}</p> */}
        {/* <p>Address: {this.state.userAddress}</p> */}
        {this.state.latitude && this.state.longitude ? (
          <div style={{ margin: "0 auto", width: "50vw", height: "50vh" }}>
            <WrappedMap
              isMarkerShown
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: "100%" }} />}
              mapElement={<div style={{ height: `100%` }} />}
              latitude={this.state.latitude}
              longitude={this.state.longitude}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default GeoLocation;
