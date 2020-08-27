import React from "react";
import Nav from "../../Nav/index";
import WriteReviewForm from "../../WriteReviewForm/index"

function WriteReview(props){
    return(
    <div>
        <Nav
            authorized={props.authorized}
            isAuthorized={props.isAuthorized}
            user={props.user}
        />
        <h1>WRITE REVIEW PLACEHOLDER</h1>
    
        <WriteReviewForm/>

    </div>
    )
}

export default WriteReview;