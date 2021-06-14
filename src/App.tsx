import React, { Component } from "react";
import Navbar from "./components/Skeleton/Navbar";
import MyGallery from "./components/Skeleton/MyGallery";
import Homepage from "./components/Skeleton/Homepage";
import ArtFrame from "./components/ArtDisplay/ArtFrame";
import ArtistProfile from "./components/ArtDisplay/ArtistProfile";
import UserContext from './context/UserContext';

import {
  Route,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";
// import { ISession } from "./components/Interfaces/Interfaces";
import "./App.css";

//just a test


class App extends Component<{}, {}> {
  static contextType = UserContext;
  context!: React.ContextType<typeof UserContext>

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isLoggedIn: false,
  //     sessionToken: "",
  //   };
  // }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/" component = {Homepage} />
            <Route path="/mygallery"component = {MyGallery} /> 
            <Route path="/art" component = {ArtFrame} />
            <Route path="/artist" component = {ArtistProfile} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
