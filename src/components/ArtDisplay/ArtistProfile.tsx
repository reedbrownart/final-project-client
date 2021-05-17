import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Preview from "../ArtDisplay/Preview";

const Artist = (props) => {
  const { artistName, artworks} = props;
  return (
    <div>
      <h1>Arthur MacArtist's Colletion</h1>
      <Container>
            <Row>
              <Col>
                <Preview
                  title="Art Title"
                  thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
                  artLink="/art"
                  artistLink="/artist"
                />
              </Col>
              <Col>
                <Preview
                  title="Art Title"
                  thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg"
                  artLink="/art"
                  artistLink="/artist"
                />
              </Col>
            </Row>
        
          </Container>
    </div>
  );
}

export default Artist;