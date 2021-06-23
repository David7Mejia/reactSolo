import './Posts.css'
import { useEffect } from 'react';
import { getFeedThunk } from '../../store/upload';
import { useDispatch, useSelector } from "react-redux";

function Posts() {
    const dispatch = useDispatch()
    const feedPhotos = useSelector(state => Object.values(state.img));

    useEffect(() => {
        dispatch(getFeedThunk())
    }, [dispatch])



    return (
        <div className='test'>

            { feedPhotos &&
                feedPhotos.map(img => (
                    <div key={img.id} className='feed-container'>
                        <img src={img.image_url} className='feed-img'></img>


                    </div>
                ))

            }
        </div>
    )
}

export default Posts
