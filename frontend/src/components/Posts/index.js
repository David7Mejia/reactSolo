import './Posts.css'
import { useEffect } from 'react';
import { getFeedThunk } from '../../store/upload';
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'
function Posts() {
    const dispatch = useDispatch()
    const feedPhotos = useSelector(state => Object.values(state.img));
    const loggedIn = useSelector(state => state.session).user;
    //to use when editing or deleting post to check if current user is the owner of the post
    // console.log(`user id is this `, loggedIn.id)
    useEffect(() => {
        dispatch(getFeedThunk())
    }, [dispatch])

    if (loggedIn.id === feedPhotos.user_id) {

    }


    return (
        <div className='test'>

            { feedPhotos &&
                feedPhotos.map(img => (
                    <div key={img.id} >
                        <div className='wrapper'>
                                <Link to={`/images/${img.id}`}>
                                    <div className='feed-container'>
                                        <img src={img.image_url} className='feed-img' alt='feed-img'/>
                                    </div>
                                </Link>
                            <div className='img-description'>
                                <div className='feed-username'>{img.username}</div>

                                {loggedIn.id === img.user_id &&
                                        <button to='' className='delete-btn'>EDIT</button>}
                                <br />
                                <div className='caption'>{img.description}</div>
                            </div>
                        </div>
                            <br />
                    </div>
                ))

            }
        </div>
    )
}

export default Posts
