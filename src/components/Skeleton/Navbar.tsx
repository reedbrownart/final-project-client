import React, { BaseSyntheticEvent, Component } from "react";
import { Button, Form, Input, FormGroup, Label, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import Register from "../Modals/Register";
import {
  Link,
} from "react-router-dom";
import { ILoginState } from "../Interfaces/Interfaces";
import UserContext from '../../context/UserContext';

// Navbar accepts props from App.tsx
// Navbar also has stateful variables for email and password so the user can login

class Navbar extends Component<{}, ILoginState> {
  static contextType = UserContext;
  context!: React.ContextType<typeof UserContext>

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  // This function performs a login post using the email and password stateful variables

  handleLogin = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    fetch(`https://gif-gallery-server.herokuapp.com/user/login`, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //this.props.updateToken(data.token);
        this.context.setToken(data.token);
        this.setState({
          userID: data.user.id
          //userID: this.context.user.id
        })
      })
      .catch((err) => {
        console.log(err)
      })
  };

  //this function will string query the artist ID from the URL and return it as a string

  artistID = () => {
    const url = `/mygallery?artist=${this.context.user.id}`;

    return url;
  };

  render() {
    return (
      <div className="navbar">
        {/* Link to the Home Page */}

        <Link to="/">
          <Button>Home</Button>
        </Link>

        {/* This is a ternary that changes based on whether the user "isLoggedIn" */}

        {this.context.isAuth ? (
          <div className="loggedIn">
            {/* If the user IS logged in the navbar will have a link to their gallery and a logout button */}

            <Link to={this.artistID}>
              <Button>My Gallery</Button>
            </Link>
            <Button onClick={() => this.context.setToken(null)}>Logout</Button>
          </div>
        ) : (
          <div className="loggedOut">

            {/* If the user isn't logged in a Form is generated which has a email and password field
            The form has a login and register button (which opens a register modal) */}

            <Form
              onSubmit={(e) => {
                this.handleLogin(e);
              }}
              className="loginForm"
            >
              <div className="loginInputs">
                <FormGroup className="formGroup">
                  <Input
                    type="text"
                    id="email"
                    value={this.state.email}
                    onChange={(e) => this.setState({ email: e.target.value })}
                    required
                    classname="inputBox"
                    placeholder="email"
                  />
                </FormGroup>
                <FormGroup className="formGroup">

                  <Input
                    type="password"
                    id="password"
                    value={this.state.password}
                    onChange={(e) => this.setState({ password: e.target.value })}
                    required
                    classname="inputBox"
                    placeholder="password"
                  />
                </FormGroup>
              </div>
              <div>
                <Button type="submit">Login</Button>
                <Register
                  buttonLabel="Register"
                  className="register"
                />
              </div>
            </Form>
          </div>
        )}
      </div>
    );
  }
}

export default Navbar;
