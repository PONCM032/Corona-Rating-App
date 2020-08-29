import React from "react";
import CreateBtn from "../CreateBtn/index";
// import API from "../../utils/API";
// import FormComponent from "../StarRating/index"

function WriteReviewForm(props) {

    function handleFormSubmit(event){
        event.preventDefault();
    
        console.log("it works!")
    }

  return (
    <div className="container uk-background-muted uk-padding">
      <div className="row">
        <div className="col-8">
          <form>
            <div className="uk-background-muted uk-padding">
              <fieldset className="uk-fieldset">
                <legend className="uk-legend">
                  <h1>Write Review</h1>
                </legend>
                {/* <FormComponent /> */}
                <div className="uk-margin">
                  <input
                    className="uk-input"
                    type="text"
                    placeholder="Name of Location"
                    name="businessName"
                  />
                </div>

                <div className="uk-margin">
                  <input
                    className="uk-input"
                    type="text"
                    placeholder="Address"
                    name="businessAddress"
                  />
                </div>
                <div className="uk-margin">
                     <select className="uk-select">
                     <option>Select Type</option>
                        <option name="businessType" value="Arts/Culture">Arts/Culture</option>
                        <option name="businessType" value="Food">Food</option>
                        <option name="businessType" value="Government">Government</option>
                        <option name="businessType" value="Transportation">Transportation</option>
                        <option name="businessType" value="Entertainment">Entertainment</option>
                        <option name="businessType" value="Goods/Services">Goods/Services</option>
                        <option name="businessType" value="Health">Health</option>
                        <option name="businessType" value="Other">Other</option>
                     </select>
                </div>
                
                <div className="uk-margin">
                  <textarea
                    className="uk-textarea"
                    rows="6"
                    placeholder="Please write review here"
                    name="notes"
                  ></textarea>
                </div>
              </fieldset>
            </div>
          </form>
        </div>
        <div className="col-4">
          <div className="uk-background-muted uk-padding">
            <h4>Please Select All That Apply</h4>
            <label>
              <input className="uk-checkbox" type="checkbox" name="masksMandated"/> Masks Mandated
            </label>
            <br />
            <hr className="uk-divider-small"></hr>
            <label>
              <input className="uk-checkbox" type="checkbox" name="masksReinforced"/> Masks Reinforced
            </label>
            <hr className="uk-divider-small"></hr>
            <label>
              <input className="uk-checkbox" type="checkbox" name="openArea"/> Open Area
            </label>
            <hr className="uk-divider-small"></hr>
            <label>
              <input className="uk-checkbox" type="checkbox" name="distanceMarkers"/> Distance Markers
            </label>
            <hr className="uk-divider-small"></hr>
            <label>
              <input className="uk-checkbox" type="checkbox" name="crowdControl"/> Crowd Control
            </label>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div>
            <CreateBtn 
            onClick={handleFormSubmit}
            ></CreateBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteReviewForm;
