import React, { useState, useEffect } from "react";
import Nav from "../../Nav/index";
import API from "../../../utils/API";
import Reviews from "../../Reviews";
import "./style.css";

let dayjs = require("dayjs");

function ViewReview(props) {
  console.log(dayjs());
  const [userReview, setUserReview] = useState();

  useEffect(() => {
    getUserReview();
  }, []);

  function getUserReview() {
    API.getReview()
      .then((res) => {
        console.log("testing please");
        console.log(res.data);
        setUserReview(res.data);
      })
      .catch((err) => console.log(err));
  }

  function deleteReview(id) {
    API.deleteReview(id)
      .then(() => {
        getUserReview();
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Nav
        authorized={props.authorized}
        isAuthorized={props.isAuthorized}
        user={props.user}
      />

      {userReview && userReview.ratings.length ? (
        <div>
          {userReview.ratings.map((review) => {
            const date = dayjs(review.createdAt).format("MMMM D, YYYY h:mm A");
            // console.log(date);
            return (
              <div key={review.id}>
                <Reviews review={review} date={date} />
                <div className="uk-card-footer">
                  <a
                    onClick={() => deleteReview(review.id)}
                    className="uk-button uk-button-text delete-btn"
                  >
                    <span
                      className="uk-margin-small-right"
                      uk-icon="trash"
                    ></span>
                    Delete Review
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h1>No Reviews to Display</h1>
      )}
      <br />
    </div>
  );
}

export default ViewReview;
