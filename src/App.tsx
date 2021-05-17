import React, {Component} from "react";
import Navbar from "./components/Skeleton/Navbar";
import Display from "./components/Skeleton/Display";
import {
  Route,
  Switch,
  Link,
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import { ISession } from './components/Interfaces/Interfaces'

import "./App.css";

class App extends Component<{},ISession> {
  constructor(props) {
    super(props)
      this.state = {
        isLoggedIn: false,
        sessionToken: ""
      }
  }

  login = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  logout = () => {
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar isLoggedIn = {this.state.isLoggedIn} login = {this.login} logout = {this.logout}/>
          <Display />
        </Router>
      </div>
    );
  }
}

export default App;
