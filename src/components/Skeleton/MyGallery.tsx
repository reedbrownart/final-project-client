import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { IState, IURLProps } from "../Interfaces/Interfaces";
import CreateArt from '../Modals/CreateArt';
import CreateArtTest from '../Modals/CreateArtTest';
import UpdateArt from '../Modals/UpdateArt';
import Preview from "../ArtDisplay/Preview";
import UserContext from '../../context/UserContext';

class MyGallery extends Component<IURLProps, IState> {
  static contextType = UserContext;
  context!: React.ContextType<typeof UserContext>

  constructor(props: IURLProps) {
    super(props);
    this.state = {
      arts: [],
      artistName: ""
    };
  }

  // Fetch Art Gallery references the URL to fetch an artist's works

  fetchArtGallery = () => {
    const query = new URLSearchParams(this.props.location.search);
    console.log(query.get('artist'));

    const artistID = Number(query.get('artist'))

    fetch(`https://gif-gallery-server.herokuapp.com/art/gallery/${artistID}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({
          arts: json.arts,
        });
        //console.log("pretty sure you stored the fetch bruv");
      });
  };

  // When this component mounts it will fetch the user's art

  componentDidMount() {
    this.fetchArtGallery();
  }

  componentDidUpdate() {
    //this.fetchArtGallery();
  }

  render() {
    if(!this.context.isAuth) {
      this.props.history.push('/')
    }
    return (
      <div>
        <h1>This is My Gallery</h1>
        {/* <Button>Update Artist Profile</Button>
        <Button>View Artist Profile</Button> */}
        <CreateArtTest buttonLabel = "Create New Art" className = "createArt"/>
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
                  {/* <UpdateArt buttonLabel = "update" className = "updateArt" artID = {art.id}/>
                  <Button>Get Link</Button> */}
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default MyGallery;
