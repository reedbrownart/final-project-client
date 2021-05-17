import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Route, Switch, Link, BrowserRouter as Router, useLocation } from 'react-router-dom';

const Navbar = (props) => {
    const { isLoggedIn, login, logout } = props;

    return (
        <div className = "navbar">
            <Link to='/'><Button>Home</Button></Link>
            {isLoggedIn
                ? <div><Link to='/mygallery'><Button>My Gallery</Button></Link> <Button onClick = {logout}>Logout</Button></div>
                : <Button onClick = {login}>Login</Button>}
        </div>
    )
}

export default Navbar;