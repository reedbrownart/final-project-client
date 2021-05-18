import React, { Component } from "react";
import { RouteComponentProps } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import Preview from "../ArtDisplay/Preview";

export interface IProps extends RouteComponentProps{}

class Artist extends Component {
  constructor(props) {
    super(props)

  }
  // const { artistName, artworks} = props;
  
  render() {
    return (
      <div>
        <h1>Arthur MacArtist's Colletion</h1>
      </div>
    );
  }
}

export default Artist;