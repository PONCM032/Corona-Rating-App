import React, { Component } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import GeoLocation from "../GeoLocation/";
import { getGeocode, getLatLng } from "use-places-autocomplete";
import SubmitBtn from "../SubmitBtn";
import API from "../../utils/API";
import WriteBtn from "../WriteBtn/index";

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = { address: "", lat: "", lon: "", city: "", reviews: [] };
  }

  handleChange = (address, lat, lng) => {
    // API.getReviewsByGeo(lat, lng)
    //   .then((res) => {
    //     this.setState({ reviews: res.data });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    this.setState({ address });
    console.log(address);
  };

  render() {
    return (
      <div className="uk-margin">
        <form>
          <div className="uk-grid-item-match uk-margin-large-left">
            <div className="uk-margin uk-grid-medium uk-child-width-auto uk-grid">
              <label>
                <input className="uk-checkbox" type="checkbox" /> A
              </label>
              <label>
                <input className="uk-checkbox" type="checkbox" /> B
              </label>
            </div>

            {this.props.authorized && (this.state.lat && this.state.lon) ? (
              <WriteBtn />
            ) : null}

            <PlacesAutocomplete
              value={this.state.address}
              onChange={this.handleChange}
              //onSelect={}
              onSelect={async (address) => {
                try {
                  const results = await getGeocode({ address });
                  const { lat, lng } = await getLatLng(results[0]);

                  console.log("results");
                  console.log(results[0]);

                  console.log(lat, lng);
                  console.log(results[0].address_components[2].long_name);

                  this.setState({ lat: lat, lon: lng });
                  console.log(address);
                  this.handleChange(address, lat, lng);
                  this.setState({
                    city: results[0].address_components[2].long_name, 
                  });
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
                      placeholder: "Search Places ...",
                      className: "uk-input uk-form-width-large",
                    })}
                  />
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion) => {
                      // const className = suggestion.active
                      //   ? "suggestion-item--active"
                      //   : "suggestion-item";
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: "#fafafa", cursor: "pointer" }
                        : { backgroundColor: "#ffffff", cursor: "pointer" };
                      return (
                        <div
                          className="input-search"
                          {...getSuggestionItemProps(suggestion, {
                            style,
                          })}
                        >
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
                class="uk-input uk-form-width-small"
                type="text"
                placeholder={this.state.city ? this.state.city : "City"}
              />

              <SubmitBtn />
            </div>
          </div>
        </form>

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
