import React, { Component, BaseSyntheticEvent } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { IModal, IModalProps } from "../Interfaces/Interfaces";
import UserContext from '../../context/UserContext';
import APIURL from '../../helpers/environment';

class Register extends Component<IModalProps, IModal> {
  static contextType = UserContext;
  context!: React.ContextType<typeof UserContext>
  
  constructor(props: IModalProps) {
    super(props);
    this.state = {
      modal: false,
      email: "",
      firstName: "",
      lastName: "",
      password: ""
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  handleRegister = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    fetch(`${APIURL}/user/register`, {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.password
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    })
      .then((res) => res.json())
      .then((data) => {
        this.context.setToken(data.token);
      })

    this.toggle();
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Register a New User</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleRegister}>
              <FormGroup>
                <Label htmlFor="email">Email:</Label>
                <Input
                  type="text"
                  id="email"
                  value={this.state.email}
                  onChange={(e) => this.setState({email: e.target.value})}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="firstName">First Name:</Label>
                <br />
                <Input
                  type="text"
                  id="firstName"
                  value={this.state.firstName}
                  onChange={(e) => this.setState({firstName: e.target.value})}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="lastName">Last Name:</Label>
                <br />
                <Input
                  type="text"
                  id="lastName"
                  value={this.state.lastName}
                  onChange={(e) => this.setState({lastName: e.target.value})}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password:</Label>
                <br />
                <Input
                  type="password"
                  id="password"
                  value={this.state.password}
                  onChange={(e) => this.setState({password: e.target.value})}
                />
              </FormGroup>
              <Button id="mainButton" type="submit">
                Signup
              </Button>{" "}
              <Button id="importantButton" onClick={this.toggle}>
                Cancel
              </Button>
            </Form>
          </ModalBody>  
        </Modal>
      </div>
    );
  }
}

export default Register;
