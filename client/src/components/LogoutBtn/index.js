import React, {Component} from "react";
import API from "../../utils/API"
import { Link } from "react-router-dom";

class LogoutBtn extends Component {

    logout(){
        API.logout().then(()=> {
            window.location="/"
        });
        console.log("pretty please")
    }

render(){
    return(
        <Link to="/" onClick={this.logout} className="logout-btn uk-button uk-button-secondary" role="button" tabIndex="0">
            Logout
        </Link>
    )
}
}

export default LogoutBtn;