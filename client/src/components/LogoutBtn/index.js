import React from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";

function LogoutBtn(props) {

    function logout(){
        API.logout().then(()=> {
            console.log("logged out")
            props.isAuthorized()
        });
    };

    return(
        <Link onClick={logout} className="logout-btn uk-button uk-button-secondary" role="button" tabIndex="0">
            Logout
        </Link>
    );

};

export default LogoutBtn;