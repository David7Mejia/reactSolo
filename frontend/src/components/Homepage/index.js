// import { useEffect } from 'react';
import './Homepage.css';
import '../Navigation/Navigation.css';
import { useSelector } from "react-redux";
// import * as getImageActions from "../../store/upload";
// import { getFeedThunk } from '../../store/upload';
import Upload from "../Upload";
import { Route, Switch, Router } from 'react-router-dom'
import Posts from '../Posts';


function Homepage() {
    const loggedIn = useSelector(state => state.session).user;
    console.log(loggedIn)
    if (loggedIn) {
        return (
                <div className='home-form'>
                <div>
                <Posts/>
                </div>
                </div>
        )
    } else {
        return (
            <div className='img1'>
                <div>
                </div>
            </div>
        )
    };

}

export default Homepage
