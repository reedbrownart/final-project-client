import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { IState, IURLProps } from "../Interfaces/Interfaces";
import CreateArt from "../Modals/CreateArt";
// import CreateArtTest from "../Modals/CreateArtTest";
import Review from '../ArtDisplay/Review';
import UpdateArt from "../Modals/UpdateArt";
import Preview from "../ArtDisplay/Preview";
import UserContext from "../../context/UserContext";

class MyGallery extends Component<IURLProps, IState> {
  static contextType = UserContext;
  context!: React.ContextType<typeof UserContext>;

  constructor(props: IURLProps) {
    super(props);
    this.state = {
      arts: [],
      artistName: "",
      reviews: []
    };
  }

  // Fetch Art Gallery references the URL to fetch an artist's works

  fetchArtGallery = () => {
    const query = new URLSearchParams(this.props.location.search);
    console.log(query.get("artist"));

    const artistID = Number(query.get("artist"));

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

  fetchReviews = () => {
    const query = new URLSearchParams(this.props.location.search);
    console.log(query.get("artist"));

    const artistID = Number(query.get("artist"));

    fetch(`${process.env.REACT_APP_GIF_GALLERY_SERVER}/reviews/tenreviews/${artistID}`)
        .then((res) => {
            
            return res.json();
        })
        .then((json) => {
            console.log(`this is the review data:`);
            console.log(json)
            this.setState({
                reviews: json.reviews
            })
        })
        .catch((err) => {
            console.log(err)
        })
}

  // When this component mounts it will fetch the user's art

  componentDidMount() {
    this.fetchArtGallery();
    this.fetchReviews();
  }

  componentDidUpdate() {
    this.fetchArtGallery();
  }

  render() {
    if (!this.context.isAuth) {
      this.props.history.push("/");
    }
    return (
      <div>
        <h1>This is My Gallery</h1>
        {/* <Button>Update Artist Profile</Button>
        <Button>View Artist Profile</Button> */}
        <CreateArt buttonLabel="Create New Art" className="createArt" />
        <Container>
          <Row>
            <h1>This are my arts!</h1>
          </Row>
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
                  <UpdateArt buttonLabel = "update" className = "updateArt" artID = {art.id}/>
                  <Button>Get Link</Button>
                </Col>
              );
            })}
          </Row>
          {/* <Row>
            <h1>These are my Reviews</h1>
          </Row>
          <Row>
            {this.state.reviews.map((review) => {
              return (
                <Col>
                    <Review rating = {review.rating} description = {review.description} />
                </Col>
            )
            })}
          </Row> */}
        </Container>
      </div>
    );
  }
}

export default MyGallery;
