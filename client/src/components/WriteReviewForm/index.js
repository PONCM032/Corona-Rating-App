import React from "react";

function WriteReviewForm() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <form>
            <div className="uk-background-muted uk-padding">
              <fieldset className="uk-fieldset">
                <legend className="uk-legend">Legend</legend>

                <div className="uk-margin">
                  <input className="uk-input" type="text" placeholder="Name of Location" />
                </div>

                <div className="uk-margin">
                  <input className="uk-input" type="text" placeholder="Address" />
                </div>

                <div className="uk-margin">
                  <textarea
                    className="uk-textarea"
                    rows="6"
                    placeholder="Please write review here"
                  ></textarea>
                </div>
              </fieldset>
            </div>

            <hr class="uk-divider-vertical"></hr>
            <div className="uk-background-muted uk-padding"></div>
          </form>
        </div>
        <div className="col-4">
          <div className="uk-background-muted uk-padding">
            <h3>Please Select All That Apply</h3>
            <label>
              <input className="uk-checkbox" type="checkbox" /> Masks Mandated
            </label>
            <br/>
            <hr class="uk-divider-small"></hr>
            <label>
              <input className="uk-checkbox" type="checkbox" /> Masks Reinforced
            </label>
            <hr class="uk-divider-small"></hr>
            <label>
              <input className="uk-checkbox" type="checkbox" /> Open Area
            </label>
            <hr class="uk-divider-small"></hr>
            <label>
              <input className="uk-checkbox" type="checkbox" /> Distance Markers
            </label>
            <hr class="uk-divider-small"></hr>
            <label>
              <input className="uk-checkbox" type="checkbox" /> Crowd Control
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriteReviewForm;
