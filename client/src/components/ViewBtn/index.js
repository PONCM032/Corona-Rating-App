import React from "react";
import { Link } from 'react-router-dom';

function View(){
    return(
        <Link to="/view" className="logout-btn uk-button uk-button-secondary" role="button" tabIndex="0">
        View
    </Link>
    )
}

export default View;