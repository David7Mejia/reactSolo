// import { useEffect } from 'react';
import './Homepage.css';
import '../Navigation/Navigation.css';
import { useSelector } from "react-redux";
// import * as getImageActions from "../../store/upload";
// import { getFeedThunk } from '../../store/upload';
import Upload from "../Upload";
import { Route, Switch } from 'react-router-dom'
import Posts from '../Posts';


function Homepage() {
    const loggedIn = useSelector(state => state.session).user;

//id user_id, collections_id, image_url
    if (loggedIn) {
        return (
                <div className='home-form'>
                <Switch>
                    <Route exact path='/upload-image'>
                        <Upload />
                    </Route>
                </Switch>
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
