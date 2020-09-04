import React from "react";
import "./style.css"
import logo from "../../assets/images/header.png";
import ViewBtn from "../ViewBtn/index";
import WriteBtn from "../WriteReviewBtn/index"
import LoginBtn from "../LoginBtn/index";
import LogoutBtn from "../LogoutBtn/index";


function Nav(props) {
  return (
    <nav className="uk-navbar-container uk-margin" uk-navbar="boundary-align: true; align: center;">
    <div className="uk-navbar-left">

        <a className="uk-navbar-item uk-logo" href="/">Corona Rating App</a>
        <h3>{props.authorized ? (
        <div className="container">
          <div className="row">
            <div className="col">
              <LogoutBtn isAuthorized={props.isAuthorized}/> 
            </div>
            <div className="col">
               <ViewBtn /> 
              </div>
              {/* <div className="col">
               <WriteBtn /> 
              </div> */}
          </div>
         </div>
        ) : (
          <LoginBtn/>)
        }</h3> 
   
    <img src={logo} alt="header"/>
   
        {/* <ul class="uk-navbar-nav">
            <li>
                <a href="#">
                    <span class="uk-icon uk-margin-small-right" uk-icon="icon: star"></span>
                    Features
                </a>
            </li>
        </ul>

        <div class="uk-navbar-item">
            <div>Some <a href="#">Link</a></div>
        </div>

        <div class="uk-navbar-item button">
            <form action="javascript:void(0)">
                <button class="uk-button uk-button-default">Button</button>
            </form>
        </div> */}

    </div>
</nav>
  );
}

export default Nav;