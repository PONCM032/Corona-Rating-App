import React, {} from "react";
import Nav from "../../Nav/index";
import Input from "../../Input/index"
import WrappedMap from "../../GoogleMap";

function Index(props){
    return(
        <div className="bkgc">
        <Nav
            authorized={props.authorized}
            isAuthorized={props.isAuthorized}
            user={props.user}
        />

        <h1>{props.authorized ? `Welcome ${props.user.username}`: "Welcome!"}</h1>

        <Input/>

        <div style={{ margin: "0 auto", width: "50vw", height: "50vh" }}>
          {props.authorized ? <WrappedMap
              isMarkerShown
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: "100%" }} />}
              mapElement={<div style={{ height: `100%` }} />}
            /> : "logged out"}
         </div>

        </div>
    )
}

export default Index;