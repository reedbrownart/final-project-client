import userEvent from "@testing-library/user-event";
import React, { Component } from "react";
import { IUser } from "../components/Interfaces/Interfaces";

interface IUserContext {
  token: string | null;
  isAuth: boolean;
  user: IUser;
  setToken: (token: string | null, user: any) => void;
}

const UserContext = React.createContext<IUserContext>({
  user: {},
  token: null,
  isAuth: false,
  setToken: (token: string | null, user: any) => {},
});

export default UserContext;

interface IUserContextProps {}

interface IUserContextState {
  user: IUser;
  token: string | null;
  isAuth: boolean;
  isLoading: boolean;
}

export class UserContextProvider extends Component<
  IUserContextProps,
  IUserContextState
> {
  constructor(props: IUserContextProps) {
    super(props);
    this.state = {
      user: {},
      token: localStorage.getItem("token"),
      isAuth: false,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.validateToken();
  }

  componentDidUpdate(
    prevProps: IUserContextProps,
    prevState: IUserContextState
  ) {
    if (this.state.token !== prevState.token) {
      this.validateToken();
    }
  }

  validateToken = () => {
    if (this.state.token) {
      localStorage.setItem("token", this.state.token);
      fetch(`${process.env.REACT_APP_GIF_GALLERY_SERVER}/user/getprofile`, {
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: this.state.token,
        }),
      })
        .then((res) => {
          if (res.status !== 200) {
            this.setState({
              token: null,
              isAuth: false,
              user: {},
              isLoading: false,
            });

            localStorage.removeItem("token");
          }
          return res.json();
        })
        .then((json) => {
          if (json.user) {
            this.setState({
              isAuth: true,
              user: json.user,
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isAuth: false,
        user: {},
        isLoading: false,
      });
      localStorage.removeItem('token');
    }
  };

  setToken = (token: string | null, user: any) => {
    this.setState({
      token: token,
      user: user
    });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          token: this.state.token,
          isAuth: this.state.isAuth,
          user: this.state.user,
          setToken: this.setToken,
        }}
      >{
        !this.state.isLoading && this.props.children
      }</UserContext.Provider>
    );
  }
}
