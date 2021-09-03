import './Profile.css'
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useParams } from "react-router";
import { getUserThunk, userInfoThunk } from "../../store/user";
import {Link} from 'react-router-dom';



function Profile() {
  const userId = useParams().id
  console.log('PROFILE USER',userId)
    const dispatch = useDispatch()
    const profileImages = useSelector(state => state?.user)?.user
    const profileUser = useSelector((state) => state?.info)?.info;

    useEffect(() => {
        dispatch(getUserThunk(userId))
    }, [userId])
    useEffect(() => {
        dispatch(userInfoThunk(userId))
    }, [userId])

    return (
      <div className="center-images-div">
        <div className="user-info-holder">
          <p className="profile-username " p>
            <i className="fas fa-user-circle" />
            &nbsp;
            {profileUser?.username}
            &nbsp;
            <span className="post-count">
              {profileImages?.length} posts
            </span>
          </p>
        </div>
        <div className="profile">
          {profileImages &&
            profileImages?.map((image) => (
              <Link to={`/images/${image?.id}`}>
                <div className="profile-images" key={image.id}>
                  <img
                    src={image.image_url}
                    alt="profile"
                    className="profile-pics"
                  />
                </div>
              </Link>
            ))}
        </div>
      </div>
    );
}

export default Profile;
