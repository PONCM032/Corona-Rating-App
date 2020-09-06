import React from "react";

const Reviews = (props) => {
  console.log(props);
  return (
    <div className="uk-card uk-card-body" key={props.review.id}>
      <article className="uk-comment uk-comment-primary">
        <div className="uk-card uk-card-default uk-align-center">
          <div className="uk-card-header">
            <div className="uk-grid-small uk-flex-middle" uk-grid>
              <div className="uk-width-expand">
                <h3 className="uk-card-title uk-margin-remove-bottom">
                  <span
                    className="uk-margin-small-right"
                    uk-icon="location"
                  ></span>
                  {props.review.businessAddress}
                </h3>
                <hr />
                <p className="uk-margin-remove justify-left">
                  <span
                    className="uk-margin-small-right"
                    uk-icon="calendar"
                  ></span>
                  {props.date}
                </p>
                <br />
                <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                  <li>
                    Masks Mandated: {props.review.masksMandated ? `Yes` : `No`}
                  </li>
                  <li>
                    Masks Reinforced:{" "}
                    {props.review.masksReinforced ? `Yes` : `No`}
                  </li>
                  <li>Open Area: {props.review.openArea ? `Yes` : `No`}</li>
                  <li>
                    Distance Markers:{" "}
                    {props.review.distanceMarkers ? `Yes` : `No`}
                  </li>
                  <li>
                    Crowd Control: {props.review.crowdControl ? `Yes` : `No`}
                  </li>
                  <li>
                    Hand Sanitizer Station:{" "}
                    {props.review.handSanitizer ? `Yes` : `No`}
                  </li>
                  <li>
                    Temperature Checks: {props.review.tempChecks ? `Yes` : `No`}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="uk-card-body">
            <h4>
              <span className="uk-margin-small-right" uk-icon="comments"></span>
              {props.review.notes}
            </h4>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Reviews;
