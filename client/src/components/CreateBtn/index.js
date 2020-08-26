import React from "react";
import "./style.css"

function CreateBtn(props){
    return(
        <span className="create-btn" {...props} role="button" tabIndex="0">
            Save Review
        </span>
    )
}

export default CreateBtn;