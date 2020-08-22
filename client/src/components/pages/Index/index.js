import React, {} from "react";
import CreateBtn from "../../CreateBtn/index";
import LoginBtn from "../../LoginBtn/index";
import LogoutBtn from "../../LogoutBtn/index";
import Nav from "../../Nav/index";

function Index(props){
    return(
        <div className="bkgc">
        <Nav/>
        <h1>{`hello ${props.user.username}`}</h1>
        <h3>{props.authorized ? 'logged in' : 'logged out'}</h3>

        <h3>{props.authorized ? <LogoutBtn/> : <LoginBtn/>}</h3>
        
        <CreateBtn/>

        </div>
    )
}

export default Index;
//login/singup

//passport