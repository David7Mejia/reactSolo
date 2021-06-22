import { useEffect, useState } from 'react';
import './Homepage.css';
import '../Navigation/Navigation.css';
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect } from 'react-router-dom'
import * as uploadActions from "../../store/upload";
import {Slide } from 'react-slideshow-image'
import Upload from "../Upload";
import {Route, Switch} from 'react-router-dom'


function Homepage() {
    // useEffect(() => {

    //     let slide = document.getElementById('img-slide')
    //     let arr = ['img1', 'img2', 'img3']

    //     setInterval(() => {
    //         let first = arr.shift();
    //         arr.push(first);
    //         slide.className = first;
    //     }, 2000)
    // }, [])


    // const dispatch = useDispatch();
    const loggedIn = useSelector(state => state.session).user;
    // const [getImg, setGetImg] = useState('');

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
            // <div  className='' id='img-slide'></div>
            <div  className='img1'></div>
            // <div>
            //     <Slide easing="ease">
            //         <div className="each-slide ">
            //             <div className='img1'>
            //             </div>
            //         </div>
            //         <div className="each-slide">
            //             <div className='img2' >
            //             </div>
            //         </div>
            //         <div className="each-slide">
            //             <div className='img3' >
            //             </div>
            //         </div>
            //     </Slide>
            // </div>
        )
    };

}

export default Homepage
