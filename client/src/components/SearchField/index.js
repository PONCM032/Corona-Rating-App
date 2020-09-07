import React, { Component } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import GeoLocation from "../GeoLocation/";
import { getGeocode, getLatLng } from "use-places-autocomplete";
import API from "../../utils/API";
import WriteReviewBtn from "../WriteReviewBtn/index";
import "./style.css";
import Reviews from "../Reviews";

let dayjs = require("dayjs");

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      placeName: "",
      lat: 0,
      lon: 0,
      city: "",
      reviews: [],
    };
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

              const placeName = address.substring(
                address.indexOf("[") + 1,
                address.indexOf(",")
              );

              const { lat, lng } = await getLatLng(results[0]);

              console.log(address);
              console.log(placeName);

              this.props.setLocation({
                address,
                lat,
                lng,
                locationName: "",
              });

              this.setState({
                address,
                placeName,
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
                      <span
                        className="uk-margin-small-right"
                        uk-icon="location"
                      ></span>
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>

        <div className="uk-margin">
          <input
            className="uk-input uk-form-width-medium"
            type="text"
            placeholder={this.state.city ? this.state.city : "City"}
            style={{ textAlign: "center" }}
            disabled
          />
        </div>

        {this.props.authorized &&
        this.state.lat &&
        this.state.lon &&
        this.state.reviews.length ? (
          <div class="uk-card uk-card-body">
            <article >
              {/* <h2>
                Your reviews written about:
                <br />
                <span
                  className="uk-margin-small-right"
                  uk-icon="location"
                ></span>
                {this.state.address}
              </h2> */}

              {this.state.reviews.map((review) => {
                // console.log(review);
                const date = dayjs(review.createdAt).format(
                  "MMMM D, YYYY h:mm A"
                );
                return (
                  <div key={review.id}>
                    {this.props.authorized ? (
                      <Reviews review={review} date={date} />
                    ) : null}
                  </div>
                );
              })}
            </article>
          </div>
        ) : null}

        <div className="map-style">
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
