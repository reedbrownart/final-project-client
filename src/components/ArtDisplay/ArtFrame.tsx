import React, { Component } from 'react';
import ArtPiece from './ArtPiece';
import { IArtPiece, IURLProps } from '../Interfaces/Interfaces';
import { Container, Row, Col, Button } from "reactstrap";
import Review from './Review';
import PostReview from '../Modals/PostReview'

class ArtFrame extends Component<IURLProps, IArtPiece> {
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
        console.log(query.get('art'));

        const artID = Number(query.get('art'))

        console.log(artID)

        fetch(`${process.env.REACT_APP_GIF_GALLERY_SERVER}/art/${artID}`)
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((json) => {
                console.log(json);
                this.setState({
                    title: json.title,
                    artistName: json.artistName,
                    images: json.images,
                    audio: json.audio,
                    id: json.id,
                    userId: json.userId
                })
                console.log('you set the state, congrats!')
                console.log(this.state.images)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    fetchReviews = () => {
        const query = new URLSearchParams(this.props.location.search);
        console.log(query.get("art"));
    
        const artID = Number(query.get("art"));

        fetch(`${process.env.REACT_APP_GIF_GALLERY_SERVER}/reviews/tenreviews/${artID}`)
            .then((res) => {
                console.log('reviews are being fetched');
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

    componentDidMount() {
        this.fetchArt();
        this.fetchReviews();
    }

    render() {
        const query = new URLSearchParams(this.props.location.search);
        console.log(query.get('art'));

        const artID = Number(query.get('art'))

        return (
            <div className = "artWall">
                <ArtPiece
                    title = {this.state.title}
                    artArray = {this.state.images}
                    audioLink = {this.state.audio}
                />
                <Container>
                    <Row>
                        <PostReview buttonLabel = "Post Review" className = "postReview" artID = {artID}/>
                    </Row>
                    <Row>
                        {this.state.reviews.map((review) => {
                            return (
                                <Col>
                                    <Review rating = {review.rating} description = {review.description} />
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