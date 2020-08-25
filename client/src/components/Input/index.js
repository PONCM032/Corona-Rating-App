import React from "react";

function Input() {
    return (
        <form>
            <div className="uk-grid-item-match uk-margin-large-left">
                <div className="uk-margin uk-grid-medium uk-child-width-auto uk-grid">
                    <label><input className="uk-checkbox" type="checkbox" /> A</label>
                    <label><input className="uk-checkbox" type="checkbox" /> B</label>
                </div>

                <div className="uk-margin">
                    <input className="uk-input uk-form-width-large" type="text" placeholder="Search Location" /> 
                    <input class="uk-input uk-form-width-small" type="text" placeholder="City"/>
                    <div className="uk-button uk-button-default">Submit</div>
                </div>
            </div>
        </form>
    )
}

export default Input;