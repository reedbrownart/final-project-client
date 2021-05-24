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
import { IPostReviewState, IReviewModalProps } from "../Interfaces/Interfaces";
import UserContext from '../../context/UserContext';

class PostReview extends Component<IReviewModalProps, IPostReviewState> {
  static contextType = UserContext;
  context!: React.ContextType<typeof UserContext>
  
  constructor(props: IReviewModalProps) {
    super(props);
    this.state = {
      modal: false,
      rating: "",
      description: ""
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  postReview = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    fetch(`https://gif-gallery-server.herokuapp.com/reviews/create/${this.props.artID}`, {
      method: "POST",
      body: JSON.stringify({
        rating: this.state.rating,
        description: this.state.description
      }),
      headers: new Headers({
        "Content-Type": "application/json",

        //THIS IS WHERE THE CONTEXT USER TOKEN WILL GET INSERTED

        Authorization: `${this.context.token}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {})
      .catch((err) => console.log(err));
    this.toggle();
  };

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
          <ModalHeader toggle={this.toggle}>Post a New Review</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.postReview}>
              <FormGroup>
                <Label htmlFor="email">Rating:</Label>
                <Input
                  type="text"
                  id="rating"
                  value={this.state.rating}
                  onChange={(e) => this.setState({rating: e.target.value})}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Description:</Label>
                <Input
                  type="text"
                  id="description"
                  value={this.state.description}
                  onChange={(e) => this.setState({description: e.target.value})}
                />
              </FormGroup>
              <Button id="mainButton" type="submit">
                Post Review
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

export default PostReview;
