import { RouteComponentProps } from 'react-router-dom';

export interface IArtPiece {
    title: string,
    images: [],
    audio: string,
    id: number,
    userId: number
}

export interface IProps {
    artID: string
}

export interface ISession {
    isLoggedIn: boolean,
    sessionToken: string
}

export interface IState {
    arts: IArtPiece[]
}

export interface IURLProps extends RouteComponentProps{}