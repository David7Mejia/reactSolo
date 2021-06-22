import { useEffect, useState } from 'react';
import './Homepage.css';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom'
import * as uploadActions from "../../store/upload";
// import Navigation from "./Navigation/index";


function Homepage() {
    const dispatch = useDispatch();
    const loggedIn = useSelector(state => state.session).user;
    const [getImg, setGetImg] = useState('');




    const onSubmit = (e) => {
        e.preventDefault();
        return dispatch(uploadActions.uploadImage({getImg}))
    }

    if (loggedIn) {
        return (
            <>
                <div className='home-form'>
                    
                    {/* <form calssName='img-form'onSubmit={onSubmit}>
                        <label htmlFor='img'>Select Image </label>
                        <input
                            type='file'
                            id="img"
                            accept='image/*'
                            value={getImg}
                            onChange={e => setGetImg(e.target.value)}
                        />
                        <input type='submit'></input>
                    </form> */}
                </div>
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
