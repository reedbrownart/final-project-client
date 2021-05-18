import React, { Component, BaseSyntheticEvent } from 'react';
import ArtPiece from './ArtPiece';
import { IArtPiece, IURLProps } from '../Interfaces/Interfaces';
import { stringify } from 'querystring';


class ArtFrame extends Component<IURLProps, IArtPiece> {
    constructor(props: IURLProps) {
        super(props)
        this.state = {
            title: "",
            images: [],
            audio: "",
            id: 0,
            userId: 0
        }
    }

    fetchData = () => {
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

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <div className = "artFrame">
                <ArtPiece
                    title = {this.state.title}
                    artArray = {this.state.images}
                    audioLink = {this.state.audio}
                />
            </div>
        )
    }
}

export default ArtFrame;