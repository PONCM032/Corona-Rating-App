import React from "react";

import { Link } from 'react-router-dom';
function LoginBtn(){
    return(
        <Link  to='/login' className="login-btn uk-button uk-button-secondary" role="button" tabIndex="0">
        Login
    </Link>
    )
}

export default LoginBtn;