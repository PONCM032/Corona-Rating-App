import React, { useState, useEffect } from "react";
import CreateBtn from "../CreateBtn/index";
import API from "../../utils/API";
import { Redirect } from "react-router-dom";
// import FormComponent from "../StarRating/index"

function WriteReviewForm(props) {

    const [reviews, setReviews] = useState([])
    const [formObject, setFormObject] = useState({})
    const [submitted, setSubmitted] = useState(false)


    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        let formData = formObject;

        if(event.target.type === 'checkbox'){
          formData[name] = event.target.checked
        } else {
          formData[name] = value;
        }

        setFormObject(formData);
    };

    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event){
        event.preventDefault();

        if(formObject.businessName && formObject.businessAddress){
             API.addReview({
                businessName: formObject.businessName,
                businessAddress: formObject.businessAddress,
                businessType: formObject.businessType,
                notes: formObject.notes,
                masksMandated: formObject.masksMandated,
                masksReinforced: formObject.masksReinforced,
                openArea: formObject.openArea,
                distanceMarkers: formObject.distanceMarkers,
                crowdControl: formObject.crowdControl
        })
        .then(setSubmitted(true))
        .catch(err => console.log(err));
        }
       
        
    }

  if(submitted)  return <Redirect to='/view'/>
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
                    onChange={handleInputChange}
                    className="uk-input"
                    type="text"
                    placeholder="Name of Location"
                    name="businessName"
                  />
                </div>

                <div className="uk-margin">
                  <input
                    onChange={handleInputChange}
                    className="uk-input"
                    type="text"
                    placeholder="Address"
                    name="businessAddress"
                  />
                </div>
                <div className="uk-margin">
                     <select className="uk-select" onChange={handleInputChange} name="businessType" >
                     <option>Select Type</option>
                        <option  value="Arts/Culture">Arts/Culture</option>
                        <option value="Food">Food</option>
                        <option value="Government">Government</option>
                        <option value="Transportation">Transportation</option>
                        <option value="Entertainment">Entertainment</option>
                        <option  value="Goods/Services">Goods/Services</option>
                        <option value="Health">Health</option>
                        <option  value="Other">Other</option>
                     </select>
                </div>
                
                <div className="uk-margin">
                  <textarea
                    onChange={handleInputChange}
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
              <input onChange={handleInputChange} className="uk-checkbox" type="checkbox" name="masksMandated"/> Masks Mandated
            </label>
            <br />
            <hr className="uk-divider-small"></hr>
            <label>
              <input onChange={handleInputChange} className="uk-checkbox" type="checkbox" name="masksReinforced"/> Masks Reinforced
            </label>
            <hr className="uk-divider-small"></hr>
            <label>
              <input onChange={handleInputChange} className="uk-checkbox" type="checkbox" name="openArea"/> Open Area
            </label>
            <hr className="uk-divider-small"></hr>
            <label>
              <input onChange={handleInputChange} className="uk-checkbox" type="checkbox" name="distanceMarkers"/> Distance Markers
            </label>
            <hr className="uk-divider-small"></hr>
            <label>
              <input onChange={handleInputChange} className="uk-checkbox" type="checkbox" name="crowdControl"/> Crowd Control
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
