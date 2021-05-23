import React, { Component } from "react";
import { IState } from "../Interfaces/Interfaces";
import { Container, Row, Col } from "reactstrap";
import Preview from "../ArtDisplay/Preview";

// IState interface allows for storage of art objects

class Homepage extends Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      arts: [],
      artistName: ""
    };
  }

  // This fetches the ten most recent arts and stores them in the stateful variable "arts"

  fetchRecentArt = () => {
    fetch("https://gif-gallery-server.herokuapp.com/art/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      this.setState({
        arts: json.arts,
      });
      //console.log("pretty sure you stored the fetch bruv");
    });
  };

  // When the component mounts, it will perform the fetch

  componentDidMount() {
    this.fetchRecentArt();
  }

  render() {
    return (
      <div>
        <div className="logo">
          <h1>Gif Gallery!</h1>
        </div>
        <div className="tagline">
          <h1>An open art gallery for internet artists</h1>
        </div>
        <div className="recent grid">
          <h1>The most recent artwork</h1>

          {/* This maps through the recent art array and renders a container full of Preview components
          which are passed the props of Art Title, Artist Name, Thumbnail (strech goal), and links to the
          art and artist page */}

          <Container>
            <Row>
              {this.state.arts.map((art) => {
                return (
                  <Col>
                    <Preview
                      title={art.title}
                      artist={art.artistName}
                      thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
                      artLink={`/art?art=${art.id}`}
                      artistLink={`/artist?artist=${art.userId}`}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Homepage;
