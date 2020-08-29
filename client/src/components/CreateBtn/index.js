import React from "react";
import "./style.css"

function CreateBtn(props){
    return(
        <button className="logout-btn uk-button uk-button-secondary" {...props} tabIndex="0">
             Submit {props.children}
        </button>
    )
}

export default CreateBtn;