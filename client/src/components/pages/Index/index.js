import React from "react";
import CreateBtn from "../../CreateBtn/index";
// import LoginBtn from "../../LoginBtn/index";
// import LogoutBtn from "../../LogoutBtn/index";
import Nav from "../../Nav/index";
import SearchField from "../../SearchField";

function Index(props) {
  return (
    <div className="bkgc">
      <Nav
        authorized={props.authorized}
        isAuthorized={props.isAuthorized}
        user={props.user}
      />
      <h1>
        {props.authorized ? `Welcome ${props.user.username}` : "Welcome!"}
      </h1>

      <SearchField authorized={props.authorized}/>

      {/* <div style={{ margin: "0 auto", width: "50vw", height: "50vh" }}>
        <GeoLocation />
      </div> */}

    </div>
  );
}

export default Index;
