import { useEffect } from 'react';
import './Homepage.css';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom'
// import Navigation from "./Navigation/index";


function Homepage() {
  const loggedIn = useSelector(state => state.session).user;


    if (loggedIn) {
        return (
            <>
                <div className='home'></div>
            </>
        )
    } else {
        return (
            <div className='img1' >
             </div>
    )

    }


}

export default Homepage
