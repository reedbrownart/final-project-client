import { RouteComponentProps } from 'react-router-dom';

export interface IArtPiece {
    title: string,
    artistName: string,
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
    arts: IArtPiece[],
    artistName: string
}

export interface IURLProps extends RouteComponentProps{
    token: string
}

//INTERFACES FOR REGISTER MODAL

export interface IModal {
    modal: boolean,
    email: string,
    firstName: string,
    lastName: string,
    password: string
}

export interface IModalProps {
    buttonLabel: string,
    className: string
}

// INTERFACES FOR CREATE ART MODAL

export interface ICreateArt {
    modal: boolean,
    title: string,
    audio: string,
    audioSearch: string,
    gifOneURL: string,
    gifOneSearch: string,
    gifOneAnimation: string,
    gifOneAnimationSpeed: string,
    gifTwoURL: string,
    gifTwoSearch: string,
    gifTwoAnimation: string,
    gifTwoAnimationSpeed: string,
    gifThreeURL: string,
    gifThreeSearch: string,
    gifThreeAnimation: string,
    gifThreeAnimationSpeed: string,
    gifFourURL: string,
    gifFourSearch: string,
    gifFourAnimation: string,
    gifFourAnimationSpeed: string,
    gifFiveURL: string,
    gifFiveSearch: string,
    gifFiveAnimation: string,
    gifFiveAnimationSpeed: string,
    youtubeResults: any[]
}

export interface ICreateArtProps {
    buttonLabel: string,
    className: string
}

export interface IUpdateArtProps {
    buttonLabel: string,
    className: string,
    artID: number
}

export interface ILoginState {
    email: string,
    password: string,
    userID?: number
}

//Determines the props that will be accepted by the Navbar component

export interface ILoginProps {
    isLoggedIn: any,
    login: any,
    logout: any,
    updateToken: any,
    clearToken: any,
    sessionToken: string
}

export interface IUser {
    id?: number,
    firstName?: string,
    lastName?: string,
    email?: string,
    password?: string,
    isAdmin?: boolean
}