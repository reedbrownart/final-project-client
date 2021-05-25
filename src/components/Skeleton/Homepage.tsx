import React, { Component } from "react";
import { IState } from "../Interfaces/Interfaces";
import { Container, Row, Col } from "reactstrap";
import Preview from "../ArtDisplay/Preview";
import APIURL from '../../helpers/environment';

// IState interface allows for storage of art objects

class Homepage extends Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      arts: [],
      artistName: "",
      reviews: []
    };
  }

  // This fetches the ten most recent arts and stores them in the stateful variable "arts"

  fetchRecentArt = () => {
    fetch(`${APIURL}/art/`)
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
          Gif Gallery
        </div>
        <br/><br/>
        <div className="tagline">
          <h2>An open art gallery for internet artists</h2>
          <br/>
          <p className = "poweredBy">Powered by GIPHY and Youtube</p>
        </div>
        <br/><br/><br/><br/>
        <div className="recent grid">

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
                      thumbnail={art.images[0][0]}
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
