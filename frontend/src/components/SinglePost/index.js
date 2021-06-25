import './SinglePost.css'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { getPostThunk } from '../../store/upload'

function SinglePost() {
    const dispatch = useDispatch()
    const loggedIn = useSelector(state => state.session).user;
    const feedPhotos = useSelector(state => (state.img));
    const { id } = useParams();
    const img = feedPhotos[id]


    useEffect(() => {
        dispatch(getPostThunk(id))
    }, [dispatch])

    return (
        <div className="test1">
        <div className="wrapper-post">

                <div className="img-container">
                    <div className="this-post">
                    <img src={img?.image_url} className="img-post" />
                        <div id='post-username'>{img?.username}{loggedIn?.id === img?.user_id &&
                                        <button to='' id='delete-btn'>Delete</button>}</div>
                        <div className="post-description">{img?.description}</div>

                    </div>
                </div>
        </div>
        </div>
    )
}

export default SinglePost
