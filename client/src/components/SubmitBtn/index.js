import React, { Component } from "react";
import { getGeocode, getLatLng } from "use-places-autocomplete";

class SubmitBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const address = document.getElementsByClassName(
      "uk-input uk-form-width-large"
    ).value;

    return (
      <button
        className="logout-btn uk-button uk-button-secondary"
        // {...props}
        tabIndex="0"
        onClick={async (address) => {
          try {
            const results = await getGeocode({ address });
            console.log(results[0]);
          } catch (error) {
            console.log("error!");
          }
        }}
      >
        Submit
        {/* {props.children} */}
      </button>
    );
  }
}

export default SubmitBtn;
