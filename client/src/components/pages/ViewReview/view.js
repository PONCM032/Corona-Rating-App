import React from "react";
import Nav from "../../Nav/index";

function ViewReview(props){
    return(
    <div>
        <Nav
            authorized={props.authorized}
            isAuthorized={props.isAuthorized}
            user={props.user}
        />
        <h1>VIEW REVIEW PLACEHOLDER</h1>
    </div>)
}

export default ViewReview;