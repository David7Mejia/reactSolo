import './Profile.css'
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useParams } from "react-router";
import {getUserThunk} from "../../store/user"



function Profile() {
    const userId = useParams().id
    const dispatch = useDispatch()
    const profileImages = useSelector(state => state.user).user

    console.log(profileImages)
    useEffect(() => {
        dispatch(getUserThunk(userId))
    }, [])

    return (
        <div className='center-images-div'>

        <div className="profile">
            {profileImages &&
                profileImages?.map(image => (
                    <div className="profile-images" key={image.id}>
                        <img src={image.image_url} alt="profile" className='profile-pics'/>
                    </div>
                ))}
                </div>
            </div>

)
}

export default Profile;
