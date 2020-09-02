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
        
        <WriteReviewForm locationInfo={props.locationInfo}/>

    </div>
    )
}

export default WriteReview;