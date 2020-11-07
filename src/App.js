
import React from "react";
import Orders from "./Orders"
import Products from "./Products"
import Marketplaces from "./Marketplaces"
import Upload from "./Upload"
import Connect from "./Connect"
import Logout from "./Logout"
import Settings from "./Settings"
import Profile from "./Profile"
import Dashboard from "./Dashboard"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './style/App.css';


class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {

    }

  }

  render(){
    return (
      <Router>
        <div className="App">

        <Switch>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/Products">
            <Products />
          </Route>
          <Route path="/marketplaces">
            <Marketplaces />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route path="/connect">
            <Connect />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>

      </div>
    </Router>
    );
  }
 
}

export default App;

