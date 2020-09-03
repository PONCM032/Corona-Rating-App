import React from "react";
import { Link } from 'react-router-dom';

function Write(){
    return(
        <Link to="/write" className="logout-btn uk-button uk-button-secondary" role="button" tabIndex="0">
             Write review
        </Link>
    )
}

export default Write;