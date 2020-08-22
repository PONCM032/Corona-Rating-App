import React, {Component} from "react";
import API from "../../utils/API"
import { Link } from "react-router-dom";

class LogoutBtn extends Component {

    logout(){
        API.logout();
        console.log("pretty please")
    }

render(){
    return(
        <button onClick={this.logout} className="logout-btn uk-button uk-button-primary" role="button" tabIndex="0">
            Logout
            <Link to="/"/>
        </button>
    )
}
}

export default LogoutBtn;