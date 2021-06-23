import { useEffect, useState } from 'react';
import './Homepage.css';
import '../Navigation/Navigation.css';
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from 'react-router-dom'
import * as uploadActions from "../../store/upload";
import Upload from "../Upload";
import {Route, Switch} from 'react-router-dom'


function Homepage() {
    const loggedIn = useSelector(state => state.session).user;
    if (loggedIn) {
        return (
                <div className='home-form'>
                <Switch>
                    <Route exact path='/upload-image'>
                        <Upload />
                    </Route>
                </Switch>
                </div>
        )
    } else {
        return (
            <div  className='img1'></div>
        )
    };

}

export default Homepage
