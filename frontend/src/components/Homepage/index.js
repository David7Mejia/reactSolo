import { useEffect } from 'react';
import './Homepage.css';
import '../Navigation/Navigation.css';
import { useDispatch, useSelector } from "react-redux";
// import * as getImageActions from "../../store/upload";
import { getFeedThunk } from '../../store/upload';
import Upload from "../Upload";
import { Route, Switch } from 'react-router-dom'
import Posts from '../Posts';


function Homepage() {
    const dispatch = useDispatch()

    const loggedIn = useSelector(state => state.session).user;
    const feedPhotos = useSelector(state => Object.values(state.img));
    // console.log(feedPhotos)

    // const [id, user_id, collections_id, image_url] = feedPhotos


    useEffect(() => {
        dispatch(getFeedThunk())
    }, [dispatch])
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

                </div>
                </div>
        )
    } else {
        return (
            <div className='img1'>
                <div>
                    <Posts images={feedPhotos}/>
                </div>
            </div>
        )
    };

}

export default Homepage
