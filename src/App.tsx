import React, { Component } from "react";
import Navbar from "./components/Skeleton/Navbar";
import MyGallery from "./components/Skeleton/MyGallery";
import Homepage from "./components/Skeleton/Homepage";
import ArtFrame from "./components/ArtDisplay/ArtFrame";
import ArtistProfile from "./components/ArtDisplay/ArtistProfile";

import {
  Route,
  Switch,
  Link,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import { ISession } from "./components/Interfaces/Interfaces";
import { IURLProps } from "./components/Interfaces/Interfaces";
import "./App.css";

class App extends Component<{}, ISession> {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      sessionToken: "",
    };
  }

  login = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  logout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar
            isLoggedIn={this.state.isLoggedIn}
            login={this.login}
            logout={this.logout}
          />

          <Switch>
            <Route exact path="/" component = {Homepage} />
            <Route path="/mygallery" component = {MyGallery} />
            <Route path="/art" component = {ArtFrame} />
            <Route path="/artist" component = {ArtistProfile} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
