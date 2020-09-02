import React, { useEffect, useState } from "react";
import Nav from "../../Nav/index";
import API from "../../../utils/API"

function ViewReview(props){

    const [review, setReview] = useState("");

    // useEffect(()=> {
    //     API.

    // }
    // )

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