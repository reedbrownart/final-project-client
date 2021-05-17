import React, { Component, BaseSyntheticEvent } from 'react';
import ArtPiece from './ArtPiece';
import { IArtPiece, IProps } from '../Interfaces/Interfaces';
import { stringify } from 'querystring';

class ArtFrame extends Component<{}, IArtPiece> {
    constructor() {
        super('')
        this.state = {
            title: "",
            images: [],
            audio: "",
            id: 0,
            userId: 0
        }
    }

    fetchData = () => {
        fetch(`https://gif-gallery-server.herokuapp.com/art/3`)
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