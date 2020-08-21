import React, {Component} from 'react';
import './App.css';
import Index from "./components/pages/Index";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "./components/pages/Login"
import Register from "./components/pages/Register";
import API from "./utils/API";

class App extends Component {
  state = {
    authorized: false,
    user: {}
  }
    
  componentDidMount() {
    this.isAuthorized();
  }

  isAuthorized = () => {
    API.isAuthorized()
      .then(res => {
        console.log(res);
        if (res.data.message) {
          this.setState({ authorized: false, user: {}});
        } else {
          this.setState({ authorized: true, user:res.data});
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ authorized: false });
      });
  };


  render(){
    return (
      <div className="App">
        <Router>
          <Route exact path="/">
            <Index 
              authorized={this.state.authorized}
              isAuthorized={this.isAuthorized} 
              user={this.state.user}
              //isAuthorized for when state needs to change to represent whether user logged in 
              />
            </Route>
           
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
  
        </Router>
      </div>
    );
  }
}

export default App;
