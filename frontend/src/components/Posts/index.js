import './Posts.css'
import { useEffect } from 'react';
import { getFeedThunk } from '../../store/upload';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

function Posts() {
    const dispatch = useDispatch()
    const feedPhotos = useSelector(state => Object.values(state.img));
    // console.log(`@@@@@@@@@@@@@@@@@@@@`,feedPhotos)
    const history = useHistory()

    useEffect(() => {
        dispatch(getFeedThunk())
        // history.push('/')
    }, [dispatch])


    return (
        <div className='test'>

            { feedPhotos &&
                feedPhotos.map(img => (
                    <div key={img?.id} >
                        <div className='wrapper'>
                                <Link to={`/images/${img?.id}`}>
                                    <div className='feed-container'>
                                        <img src={img?.image_url} className='feed-img' alt='feed-img'/>
                                    </div>
                                </Link>
                            <div className='img-description'>
                                <div className='feed-username'>{img?.username}
                                <div className='caption'>{img?.description}</div></div>
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
