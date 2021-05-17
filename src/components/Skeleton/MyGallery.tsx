import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Preview from "../ArtDisplay/Preview";

class MyGallery extends Component<{}, {}> {
  constructor() {
    super("");
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>This is My Gallery</h1>
        <Button>Update Artist Profile</Button>
        <Button>View Artist Profile</Button>
        <Container>
          <Row>
            <Col>
              <Preview
                title="Art Title"
                thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
                artLink="/art"
                artistLink="/artist"
              />
              <Button>Update</Button>
              <Button>Get Link</Button>
            </Col>
            <Col>
              <Preview
                title="Art Title"
                thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
                artLink="/art"
                artistLink="/artist"
              />
              <Button>Update</Button>
              <Button>Get Link</Button>
            </Col>
            <Col>
              <Preview
                title="Art Title"
                thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
                artLink="/art"
                artistLink="/artist"
              />
              <Button>Update</Button>
              <Button>Get Link</Button>
            </Col>
            <Col>
              <Preview
                title="Art Title"
                thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
                artLink="/art"
                artistLink="/artist"
              />
              <Button>Update</Button>
              <Button>Get Link</Button>
            </Col>
            <Col>
              <Preview
                title="Art Title"
                thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
                artLink="/art"
                artistLink="/artist"
              />
              <Button>Update</Button>
              <Button>Get Link</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default MyGallery;
