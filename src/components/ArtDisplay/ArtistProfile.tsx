import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Preview from "../ArtDisplay/Preview";
import { IState, IURLProps } from "../Interfaces/Interfaces";

class Artist extends Component<IURLProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      arts: [],
      artistName: "",
      reviews: []
    };
  }

  fetchData = () => {
    const query = new URLSearchParams(this.props.location.search);
    console.log(query.get("artist"));

    const artistID = Number(query.get("artist"));

    console.log(artistID);
    fetch(`https://gif-gallery-server.herokuapp.com/art/gallery/${artistID}`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjIxMzU4MzExLCJleHAiOjE2MjE0NDQ3MTF9.szSRc8wyAI69b8S_tnIeNlEfhS2yfHZKad6PVQ6wiLI",
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({
          arts: json.arts,
        });
        console.log("pretty sure you stored the fetch bruv");
      });

    fetch(`https://gif-gallery-server.herokuapp.com/user/${artistID}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({
          artistName: `${json.user.firstName} ${json.user.lastName}`,
        });
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        <h1>This is {this.state.artistName}'s Gallery</h1>
        <p>
          Maybe an artist's bio will eventually go here. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Ratione repellat dolores totam
          beatae ipsa? Eligendi voluptatibus, dolor reprehenderit excepturi
          itaque iste, veritatis commodi exercitationem officia maxime magni,
          deleniti minima ipsa.
        </p>
        <Container>
          <Row>
            {this.state.arts.map((art) => {
              return (
                <Col>
                  <Preview
                    title={art.title}
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
    );
  }
}

export default Artist;
