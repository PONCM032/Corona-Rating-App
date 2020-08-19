import React from "react";
import "./style.css"

function EditBtn(props){
    return(
        <span className="edit-btn" {...props} role="button" tabIndex="0">
            Edit
        </span>
    )
}

export default EditBtn;