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
import GiphyPreview from "./GiphyPreview";
import APIURL from '../../helpers/environment';

class CreateArt extends Component<ICreateArtProps, ICreateArt> {
  static contextType = UserContext;
  context!: React.ContextType<typeof UserContext>;

  constructor(props: ICreateArtProps) {
    super(props);
    this.state = {
      modal: false,
      title: "",
      artistName: "",
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
      gifOneResults: [],
      gifTwoResults: [],
      gifThreeResults: [],
      gifFourResults: [],
      gifFiveResults: [],
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
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
      gifOneResults: [],
      gifTwoResults: [],
      gifThreeResults: [],
      gifFourResults: [],
      gifFiveResults: [],
    });
  };

  createArt = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    fetch(`${APIURL}/art/create`, {
      method: "POST",
      body: JSON.stringify({
        title: this.state.title,
        artistName: `${this.context.user.firstName} ${this.context.user.lastName}`,
        images: [
          [this.state.gifOneURL, this.state.gifTwoURL],
          [this.state.gifOneAnimation, this.state.gifTwoAnimation],
          [`${this.state.gifOneAnimationSpeed}s`, `${this.state.gifTwoAnimationSpeed}s`],
        ],
        audio: this.state.audio,
      }),
      headers: new Headers({
        "Content-Type": "application/json",

        //THIS IS WHERE THE CONTEXT USER TOKEN WILL GET INSERTED

        "Authorization": `${this.context.token}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => { })
      .catch((err) => console.log(err));
    this.toggle();
  };

  fetchYoutube = () => {
    console.log("fetching youtube");

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDWx5vHuDnMtqmZTMtxcqr1K4fnSGHD_sI&type=video&q=${this.state.audioSearch}`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          youtubeResults: json.items,
          audio: "",
        });
      });
  };

  fetchGiphy = () => {
    console.log("fetching giphy");

    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=Enmm3UZNiUyNOiajUcJ4QeIAtOhqIMWU&q=${this.state.gifOneSearch}&limit=25&offset=0&rating=g&lang=en`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          gifOneResults: json.data,
          gifOneURL: "",
        });
      });
  };

  fetchGiphyTwo = () => {
    console.log("fetching giphy");

    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=Enmm3UZNiUyNOiajUcJ4QeIAtOhqIMWU&q=${this.state.gifTwoSearch}&limit=25&offset=0&rating=g&lang=en`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        this.setState({
          gifTwoResults: json.data,
          gifTwoURL: "",
        });
      });
  };

  //FUNCTIONS FOR STORING THE CHOSEN RESULTS FROM YOUTUBE / GIPHY SEARCHES IN THE CREATE ART MODAL

  saveYoutube = (e: BaseSyntheticEvent, youtubeURL: string) => {
    e.preventDefault();
    this.setState({
      audio: `${youtubeURL}`,
    });
  };

  saveGifOne = (e: BaseSyntheticEvent, gifURL: string) => {
    e.preventDefault();
    this.setState({
      gifOneURL: `https://media3.giphy.com/media/${gifURL}/giphy.gif`,
    });
  };

  saveGifTwo = (e: BaseSyntheticEvent, gifURL: string) => {
    e.preventDefault();
    this.setState({
      gifTwoURL: `https://media3.giphy.com/media/${gifURL}/giphy.gif`,
    });
  };

  // saveGifThree = (e: BaseSyntheticEvent, gifURL: string) => {
  //   e.preventDefault();
  //   this.setState({
  //     gifThreeURL: `${gifURL}`,
  //   });
  // };

  // saveGifFour = (e: BaseSyntheticEvent, gifURL: string) => {
  //   e.preventDefault();
  //   this.setState({
  //     gifFourURL: `${gifURL}`,
  //   });
  // };

  // saveGifFive = (e: BaseSyntheticEvent, gifURL: string) => {
  //   e.preventDefault();
  //   this.setState({
  //     gifFiveURL: `${gifURL}`,
  //   });
  // };

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
            <Form onSubmit={this.createArt}>
              {/* INPUTS FOR TITLE AND AUDIO */}
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
              <div>
                <YoutubePreview
                  results={this.state.youtubeResults}
                  saveYoutube={this.saveYoutube}
                  audio={this.state.audio}
                />
              </div>
              {/* GIF ONE INPUT FORM GROUPS  */}
              <FormGroup>
                <Label htmlFor="gifOneURL">gifOneURL:</Label>
                <Input
                  type="text"
                  id="gifOneURL"
                  value={this.state.gifOneSearch}
                  onChange={(e) =>
                    this.setState({ gifOneSearch: e.target.value })
                  }
                  required
                />
                <Button onClick={this.fetchGiphy}>Search</Button>
              </FormGroup>
              <div>
                <GiphyPreview
                  results={this.state.gifOneResults}
                  saveGif={this.saveGifOne}
                  gifURL={this.state.gifOneURL}
                />
              </div>
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
              {/* GIF TWO INPUT FORM GROUPS  */}
              <FormGroup>
                <Label htmlFor="gifTwoURL">gifTwoURL:</Label>
                <Input
                  type="text"
                  id="gifTwoURL"
                  value={this.state.gifTwoSearch}
                  onChange={(e) =>
                    this.setState({ gifTwoSearch: e.target.value })
                  }
                  required
                />
                <Button onClick={this.fetchGiphyTwo}>Search</Button>
              </FormGroup>
              <div>
                <GiphyPreview
                  results={this.state.gifTwoResults}
                  saveGif={this.saveGifTwo}
                  gifURL={this.state.gifTwoURL}
                />
              </div>
              <FormGroup>
                <Label for="exampleSelectMulti">Select Animation Style</Label>
                <Input
                  type="select"
                  name="select"
                  id="exampleSelect"
                  value={this.state.gifTwoAnimation}
                  onChange={(e) =>
                    this.setState({ gifTwoAnimation: e.target.value })
                  }
                  required
                >
                  <option>saturate</option>
                  <option>inversion</option>
                  <option>hueRotate</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="gifTwoAnimationSpeed">
                  gifTwoAnimationSpeed:
                </Label>
                <Input
                  type="text"
                  id="gifTwoAnimationSpeed"
                  value={this.state.gifTwoAnimationSpeed}
                  onChange={(e) =>
                    this.setState({ gifTwoAnimationSpeed: e.target.value })
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
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default CreateArt;
