import React from 'react';
import MyGallery from './MyGallery';
import Homepage from './Homepage';
import ArtFrame from '../ArtDisplay/ArtFrame';
import ArtistProfile from '../ArtDisplay/ArtistProfile';
import { Route, Switch, Link, BrowserRouter as Router, useLocation } from 'react-router-dom';

const Display = () => {

    return (

        <div>
            <Switch>
                <Route exact path = "/"><Homepage /></Route>
                <Route exact path = "/mygallery"><MyGallery /></Route>
                <Route exact path = "/art"><ArtFrame /></Route>
                <Route exact path = "/artist"><ArtistProfile /></Route>
            </Switch>
        </div>
    )
}

export default Display;