import React from "react";
import "./style.css"

function Nav() {
  return (
    <nav class="uk-navbar-container uk-margin" uk-navbar="boundary-align: true; align: center;">
    <div class="uk-navbar-left">

        <a class="uk-navbar-item uk-logo" href="#">Corona Rating App</a>

        <ul class="uk-navbar-nav">
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
        </div>

    </div>
</nav>
  );
}

export default Nav;