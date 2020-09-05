import React from "react";
import SearchField from "../SearchField/index"

function Input() {
  return (
    <div className="container">
      <form>
        <div>
          <div className="uk-margin uk-grid-medium uk-child-width-auto uk-grid">
            <div>
              <h4>Please Select All That Apply</h4>
              <label>
                <input className="uk-checkbox" type="checkbox" name="masksMandated"/> Masks Mandated
              </label>
              <hr className="uk-divider-small"></hr>
              <label>
                <input className="uk-checkbox" type="checkbox" name="masksReinforced"/> Masks
                Reinforced
              </label>
              <hr className="uk-divider-small"></hr>
              <label>
                <input className="uk-checkbox" type="checkbox" name="openArea"/> Open Area
              </label>
              <hr className="uk-divider-small"></hr>
              <label>
                <input className="uk-checkbox" type="checkbox" name="distanceMarkers"/> Distance
                Markers
              </label>
              <hr className="uk-divider-small"></hr>
              <label>
                <input className="uk-checkbox" type="checkbox" name="crowdControl"/> Crowd Control
              </label>
              <hr className="uk-divider-small"></hr>
              <label>
                <input className="uk-checkbox" type="checkbox" name="handSanitizer"/> Hand Sanitizer Station
              </label>
              <hr className="uk-divider-small"></hr>
              <label>
                <input className="uk-checkbox" type="checkbox" name="tempChecks"/> Temperature Checks
              </label>
            </div>
          </div>
          <div className="uk-margin">
         <SearchField name="businessAddress"/>
            <select
              className="uk-select uk-form-width-small"
              placeholder="Search Type"
            >
              <option name="businessType" value="Arts/Culture">
                Arts/Culture
              </option>
              <option name="businessType" value="Food">
                Food
              </option>
              <option name="businessType" value="Government">
                Government
              </option>
              <option name="businessType" value="Transportation">
                Transportation
              </option>
              <option name="businessType" value="Entertainment">
                Entertainment
              </option>
              <option name="businessType" value="Goods/Services">
                Goods/Services
              </option>
              <option name="businessType" value="Health">
                Health
              </option>
              <option name="businessType" value="Other">
                Other
              </option>
            </select>
            <input
              className="uk-input uk-form-width-small"
              type="text"
              placeholder="City"
            />
            <div className="uk-button uk-button-default">Submit</div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Input;
