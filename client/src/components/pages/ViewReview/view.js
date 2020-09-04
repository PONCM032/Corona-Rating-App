import React, { useState, useEffect } from "react";
import Nav from "../../Nav/index";
import API from "../../../utils/API";

function ViewReview(props) {
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

  function deleteReview(id){
    API.deleteReview(id)
    .then( () => {
        getUserReview()
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
          {userReview.ratings.map(review => ( 
            <div className="uk-card uk-card-default uk-width-1-2@m">
              <div className="uk-card-header">
                <div className="uk-grid-small uk-flex-middle" uk-grid>
                  <div className="uk-width-expand">
                    <h3 className="uk-card-title uk-margin-remove-bottom">
                      {review.businessAddress}
                    </h3>
                    <p className="uk-text-meta uk-margin-remove-top">
                      <time>{review.createdAt}</time>
                    </p>
                  </div>
                </div>
              </div>
              <div className="uk-card-body">
                <p>{review.notes}</p>
              </div>
              <div className="uk-card-footer">
                <a onClick={() => deleteReview(review.id)} className="uk-button uk-button-text">
                  Delete Review
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>No Reviews to Display</h1>
      )}
    </div>
  );
}

export default ViewReview;
