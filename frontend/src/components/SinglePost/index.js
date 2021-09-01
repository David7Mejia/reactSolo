import './SinglePost.css'
import { useEffect } from 'react'
import { useParams } from 'react-router';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Comments from '../Comments'
import { getPostThunk } from '../../store/upload'
import EditButton from './EditButton'

function SinglePost() {
    const dispatch = useDispatch()
    const loggedIn = useSelector(state => state.session).user;
    const feedPhotos = useSelector(state => (state.img));
    const { id } = useParams();
    const img = feedPhotos[id]

    useEffect(() => {
        dispatch(getPostThunk(id))
    }, [dispatch, id])

    return (
      <div className="test1">
        <div className="wrapper-post">
          <div className="img-container">
            <div className="this-post">
              <img src={img?.image_url} className="img-post" alt="" />
              <div id="post-username">
                 <Link to={`/user/${img?.user_id}`} className='to-profile'> {img?.username}</Link>
                {loggedIn?.id === img?.user_id && (
                  <div>
                    <EditButton btn={id} />
                  </div>
                )}
              </div>

              <div className="post-description">{img?.description}</div>
              <Comments />
            </div>
          </div>
        </div>
      </div>
    );
}

export default SinglePost
