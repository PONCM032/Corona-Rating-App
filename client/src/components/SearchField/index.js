import React, { Component } from "react";
import PlacesAutocomplete from "react-places-autocomplete";

class SearchField extends Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };
  }

  handleChange = (address) => {
    this.setState({ address });
  };

  render() {
    return (
        <form>
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
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
                    const className = suggestion.active
                      ? "suggestion-item--active"
                      : "suggestion-item";
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
        </form>
    );
  }
}

export default SearchField;
