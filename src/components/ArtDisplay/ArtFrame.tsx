import React, { Component } from 'react';
import ArtPiece from './ArtPiece';
import { IArtPiece, IURLProps } from '../Interfaces/Interfaces';
import { Container, Row, Col } from "reactstrap";
import Review from './Review';
import PostReview from '../Modals/PostReview'
import APIURL from '../../helpers/environment';
import UserContext from "../../context/UserContext";

class ArtFrame extends Component<IURLProps, IArtPiece> {
    static contextType = UserContext;
    context!: React.ContextType<typeof UserContext>;

    constructor(props: IURLProps) {
        super(props)
        this.state = {
            title: "",
            artistName: "",
            images: [],
            audio: "",
            id: 0,
            userId: 0,
            reviews: []
        }
    }

    fetchArt = () => {
        const query = new URLSearchParams(this.props.location.search);
        const artID = Number(query.get('art'))

        fetch(`${APIURL}/art/${artID}`)
            .then((res) => {
                // console.log(res);
                return res.json();
            })
            .then((json) => {
                // console.log(json);
                this.setState({
                    title: json.title,
                    artistName: json.artistName,
                    images: json.images,
                    audio: json.audio,
                    id: json.id,
                    userId: json.userId
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    fetchReviews = () => {
        const query = new URLSearchParams(this.props.location.search);
        const artID = Number(query.get("art"));

        fetch(`${APIURL}/reviews/tenreviews/${artID}`)
            .then((res) => {
                // console.log('reviews are being fetched');
                return res.json();
            })
            .then((json) => {
                // console.log(`this is the review data:`);
                // console.log(json)
                this.setState({
                    reviews: json.reviews
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    isLoggedIn = () => {
        const query = new URLSearchParams(this.props.location.search);
        const artID = Number(query.get('art'))

        if (this.context.isAuth) {
            return (
                <Row>
                    <PostReview buttonLabel="Post Review" className="postReview" artID={artID} />
                </Row>
            )
        } else {
            return <></>
        }
    }

    componentDidMount() {
        this.fetchArt();
        this.fetchReviews();
    }

    componentDidUpdate() {
        this.fetchReviews();
        this.isLoggedIn();
    }

    render() {
        const query = new URLSearchParams(this.props.location.search);
        const artID = Number(query.get('art'))

        return (
            <div className="artWall">
                <ArtPiece
                    title={this.state.title}
                    artArray={this.state.images}
                    audioLink={this.state.audio}
                />
                <Container>
                    <Row>
                        <PostReview buttonLabel = "Post Review" className = "postReview" artID = {artID}/>
                    </Row>
                    <Row>
                        {this.state.reviews.map((review) => {
                            return (
                                <Col>
                                    <Review rating={review.rating} description={review.description} />
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default ArtFrame;