import React, { Component } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import GeoLocation from "../GeoLocation/";
import { getGeocode, getLatLng } from "use-places-autocomplete";
import API from "../../utils/API";
import WriteReviewBtn from "../WriteReviewBtn/index";
import "./style.css";

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = { address: "", lat: 0, lon: 0, city: "", reviews: [] };
  }

  handleChange = (address) => {
    this.setState({ address });
  };

  getReviews = (lat, lng) => {
    API.getReviewsByGeo(lat, lng)
      .then((res) => {
        console.log(res.data);
        this.setState({ reviews: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="uk-margin">
        {this.props.authorized && this.state.lat && this.state.lon ? (
          <WriteReviewBtn />
        ) : null}

        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={async (address) => {
            try {
              const results = await getGeocode({ address });

              const { lat, lng } = await getLatLng(results[0]);

              // console.log("results");
              // console.log(results[0]);

              // console.log(lat, lng);
              // console.log(results[0].address_components[2].long_name);

              console.log(address);

              this.props.setLocation({
                address,
                lat,
                lng,
                locationName: "",
              });

              this.setState({
                address,
                lat: lat,
                lon: lng,
                city: results[0].address_components[2].long_name,
              });

              this.getReviews(lat, lng);
            } catch (error) {
              console.log("error!");
            }
          }}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div className="uk-margin">
              <input
                {...getInputProps({
                  placeholder: "Search Places...",
                  className: "uk-input uk-form-width-large",
                })}
              />
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const style = suggestion.active
                    ? { backgroundColor: "#fafafa", cursor: "pointer" }
                    : { backgroundColor: "#ffffff", cursor: "pointer" };
                  return (
                    <div
                      className="input-suggestion"
                      {...getSuggestionItemProps(suggestion, {
                        style,
                      })}
                    >
                      <span class="uk-margin-small-right" uk-icon="location"></span><span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>

        <div className="uk-margin">
          <input
            className="uk-input uk-form-width-small"
            type="text"
            placeholder={this.state.city ? this.state.city : "City"}
          />
        </div>

        {this.state.reviews.map((review) => {
          console.log(review);
          return (
            <div class="uk-card uk-card-body">
              <article
                className="uk-comment uk-comment-primary"
                key={review.id}
              >
                <header className="uk-comment-header">
                  <div className="uk-grid-medium uk-flex-middle" uk-grid>
                    <div className="uk-width-auto"></div>
                    <div className="uk-width-expand">
                      <h4 className="uk-comment-title uk-margin-remove">
                        <span
                          className="uk-margin-small-right"
                          uk-icon="location"
                        ></span>
                        {this.state.address}
                      </h4>
                      <hr />
                      <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                        <li>{review.createdAt}</li>
                        <li>Masks Mandated: {review.masksMandated ? `Yes` : `No`} | 
                            Masks Reinforced: {review.masksReinforced ? `Yes` : `No`} |
                            Open Area: {review.openArea ? `Yes` : `No`} |
                            Distance Markers: {review.distanceMarkers ? `Yes` : `No`} |
                            Crowd Control : {review.crowdControl ? `Yes` : `No`}
                        </li>
                      </ul>
                    </div>
                  </div>
                </header>
                <div className="uk-comment-body">
                  <p>
                    {" "}
                    <span
                      className="uk-margin-small-right"
                      uk-icon="comments"
                    ></span>
                    {review.notes}
                  </p>
                </div>
              </article>
            </div>
          );
        })}

        <div style={{ margin: "0 auto", width: "50vw", height: "50vh" }}>
          <GeoLocation
            lat={this.state.lat}
            lon={this.state.lon}
            place={this.state.address}
          />
        </div>
      </div>
    );
  }
}

export default SearchField;
