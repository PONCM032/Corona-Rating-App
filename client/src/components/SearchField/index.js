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
      <div className="uk-margin">
        <form>
            <div className="uk-grid-item-match uk-margin-large-left">
                <div className="uk-margin uk-grid-medium uk-child-width-auto uk-grid">
                    <label><input className="uk-checkbox" type="checkbox" /> A</label>
                    <label><input className="uk-checkbox" type="checkbox" /> B</label>
                </div>

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

        <div className="uk-margin">
                    <input class="uk-input uk-form-width-small" type="text" placeholder="City"/>
                    <div className="uk-button uk-button-default">Submit</div>
                </div>
            </div>
        </form>
      </div>
    );
  }
}

export default SearchField;
