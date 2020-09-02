import React, { Component } from "react";
import "./App.css";
import Index from "./components/pages/Index";
import ViewReview from "./components/pages/ViewReview/view";
import WriteReview from "./components/pages/WriteReview/write";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import API from "./utils/API";

class App extends Component {
  state = {
    authorized: false,
    user: {},
    locationInfo: {
      name: "",
      address: "",
      lat: "",
      lng: "",
    },
  };

  componentDidMount() {
    this.isAuthorized();
  }

  setLocation = (data) => {
    this.setState({
      locationInfo: data,
    });
  };

  isAuthorized = () => {
    API.isAuthorized()
      .then((res) => {
        console.log(res);
        if (res.data.message) {
          this.setState({ authorized: false, user: {} });
        } else {
          this.setState({ authorized: true, user: res.data });
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({ authorized: false });
      });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/">
            <Index
              authorized={this.state.authorized}
              user={this.state.user}
              isAuthorized={this.isAuthorized}
              //isAuthorized for when state needs to change to represent whether user logged in
              setLocation={this.setLocation}
            />
          </Route>

          <Route exact path="/login">
            {this.state.authorized ? (
              <Redirect to="/" />
            ) : (
              <Login
                authorized={this.state.authorized}
                user={this.state.user}
                isAuthorized={this.isAuthorized}
              />
            )}
          </Route>
          <Route exact path="/register">
            {this.state.authorized ? (
              <Redirect to="/" />
            ) : (
              <Register isAuthorized={this.isAuthorized} />
            )}
          </Route>
          <Route exact path="/view">
            {!this.state.authorized ? (
              <Redirect to="/" />
            ) : (
              <ViewReview
                authorized={this.state.authorized}
                user={this.state.user}
                isAuthorized={this.isAuthorized}
              />
            )}
          </Route>
          <Route exact path="/write">
            {!this.state.authorized ? (
              <Redirect to="/" />
            ) : (
              <WriteReview
                authorized={this.state.authorized}
                user={this.state.user}
                isAuthorized={this.isAuthorized}
                locationInfo={this.state.locationInfo}
              />
            )}
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
