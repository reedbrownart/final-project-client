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
import { ICreateArt, ICreateArtProps } from "../Interfaces/Interfaces";
import UserContext from "../../context/UserContext";
import YoutubePreview from "./YoutubePreview";

const apiKey = "AIzaSyDWx5vHuDnMtqmZTMtxcqr1K4fnSGHD_sI";

class CreateArtTest extends Component<ICreateArtProps, ICreateArt> {
  static contextType = UserContext;
  context!: React.ContextType<typeof UserContext>;

  constructor(props: ICreateArtProps) {
    super(props);
    this.state = {
      modal: false,
      title: "",
      audio: "",
      audioSearch: "",
      gifOneURL: "",
      gifOneSearch: "",
      gifOneAnimation: "saturate",
      gifOneAnimationSpeed: "",
      gifTwoURL: "",
      gifTwoSearch: "",
      gifTwoAnimation: "saturate",
      gifTwoAnimationSpeed: "",
      gifThreeURL: "",
      gifThreeSearch: "",
      gifThreeAnimation: "saturate",
      gifThreeAnimationSpeed: "",
      gifFourURL: "",
      gifFourSearch: "",
      gifFourAnimation: "saturate",
      gifFourAnimationSpeed: "",
      gifFiveURL: "",
      gifFiveSearch: "",
      gifFiveAnimation: "saturate",
      gifFiveAnimationSpeed: "",
      youtubeResults: [],
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  handleRegister = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    fetch(`https://gif-gallery-server.herokuapp.com/art/create`, {
      method: "POST",
      body: JSON.stringify({
        title: this.state.title,
        images: [
          [this.state.gifOneURL, this.state.gifTwoURL],
          [this.state.gifOneAnimation, this.state.gifTwoAnimation],
          [this.state.gifOneAnimationSpeed, this.state.gifTwoAnimationSpeed],
        ],
        audio: this.state.audio,
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

  fetchYoutube = () => {
    console.log("fetching youtube");

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apiKey}&type=video&q=${this.state.audioSearch}`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          youtubeResults: json.items,
        });
      });
  };

  fetchGiphy = () => {
    console.log("fetching giphy");
  };

  //FUNCTIONS FOR STORING THE CHOSEN RESULTS FROM YOUTUBE / GIPHY SEARCHES IN THE CREATE ART MODAL

  saveYoutube = (e: BaseSyntheticEvent, youtubeURL: string) => {
    e.preventDefault();
    this.setState({
      audio: `https://www.youtube.com/embed/${youtubeURL}`
    })
  }

  saveGifOne = (e: BaseSyntheticEvent, gifURL: string) => {
    e.preventDefault();
    this.setState({
      gifOneURL: `${gifURL}`
    })
  }

  saveGifTwo = (e: BaseSyntheticEvent, gifURL: string) => {
    e.preventDefault();
    this.setState({
      gifTwoURL: `${gifURL}`
    })
  }

  saveGifThree = (e: BaseSyntheticEvent, gifURL: string) => {
    e.preventDefault();
    this.setState({
      gifThreeURL: `${gifURL}`
    })
  }

  saveGifFour = (e: BaseSyntheticEvent, gifURL: string) => {
    e.preventDefault();
    this.setState({
      gifFourURL: `${gifURL}`
    })
  }

  saveGifFive = (e: BaseSyntheticEvent, gifURL: string) => {
    e.preventDefault();
    this.setState({
      gifFiveURL: `${gifURL}`
    })
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
          size="lg"
        >
          <ModalHeader toggle={this.toggle}>Create New Art</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleRegister}>
              <FormGroup>
                <Label htmlFor="title">title:</Label>
                <Input
                  type="text"
                  id="title"
                  value={this.state.title}
                  onChange={(e) => this.setState({ title: e.target.value })}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="audio">audio:</Label>
                <Input
                  type="text"
                  id="audio"
                  value={this.state.audioSearch}
                  onChange={(e) =>
                    this.setState({ audioSearch: e.target.value })
                  }
                  required
                />
                <Button onClick={this.fetchYoutube}>Search</Button>
              </FormGroup>
              {/* GIF ONE INPUT FORM GROUPS  */}
              <FormGroup>
                <Label htmlFor="gifOneURL">gifOneURL:</Label>
                <Input
                  type="text"
                  id="gifOneURL"
                  value={this.state.gifOneURL}
                  onChange={(e) =>
                    this.setState({ gifOneURL: e.target.value })
                  }
                  required
                />
                <Button onClick={this.fetchGiphy}>Search</Button>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelectMulti">Select Animation Styles</Label>
                <Input
                  type="select"
                  name="select"
                  id="exampleSelect"
                  value={this.state.gifOneAnimation}
                  onChange={(e) =>
                    this.setState({ gifOneAnimation: e.target.value })
                  }
                  required
                >
                  <option>saturate</option>
                  <option>inversion</option>
                  <option>hueRotate</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="gifOneAnimationSpeed">
                  gifOneAnimationSpeed:
                </Label>
                <Input
                  type="text"
                  id="gifOneAnimationSpeed"
                  value={this.state.gifOneAnimationSpeed}
                  onChange={(e) =>
                    this.setState({ gifOneAnimationSpeed: e.target.value })
                  }
                  required
                />
              </FormGroup>
              <Button id="mainButton" type="submit">
                Create Art
              </Button>{" "}
              <Button id="importantButton" onClick={this.toggle}>
                Cancel
              </Button>
            </Form>
            <div>
              <h1>This is where the Youtube results will go</h1>
              <YoutubePreview results={this.state.youtubeResults} saveYoutube = {this.saveYoutube} />
            </div>
            <div>
              <h1>This is where the Giphy results will go</h1>
              <YoutubePreview results={this.state.youtubeResults} saveYoutube = {this.saveYoutube} />
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default CreateArtTest;
