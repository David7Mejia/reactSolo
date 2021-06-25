import './EditPost.css'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as uploadActions from "../../store/upload";
import {useHistory} from 'react-router-dom'
import {updatePostThunk} from "../../store/upload"

function EditPost({post}) {
    const dispatch = useDispatch();
    // const [image_url, setImageUrl] = useState('')
    const [description, setDescription] = useState('')
    // const sessionUser = useSelector((state) => state.session.user);
    const history = useHistory();

    const id = post?.id;
    const onSubmit = e => {
        e.preventDefault();
        // let user_id = sessionUser.id;
        // let username = sessionUser.username
        // history.push('/')
        return dispatch(uploadActions.updatePostThunk( id, description))
    }
    return (
        <div className='wrapper-upload'>

        <form onSubmit={onSubmit} className='upload-form'>
            <label className='upload-img-txt'>
                Edit Your Post
                <br />
            </label>
            <br />
            <label>
                <textarea
                    placeholder='Description'
                    type='text'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required
                    rows="3"
                    cols="30"
                    />
            </label>
            <button className='upload-btn' type="submit">Post!</button>
        </form>
        </div>
    )

}
export default EditPost
