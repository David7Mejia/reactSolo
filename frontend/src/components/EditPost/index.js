import './EditPost.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as uploadActions from "../../store/upload";
import {useHistory} from 'react-router-dom'
// import { updatePostThunk } from "../../store/upload"
import {useParams} from 'react-router'

function EditPost() {
    const dispatch = useDispatch();
    const [description, setDescription] = useState('')
    // const sessionUser = useSelector((state) => state.session.user);

    const id = useParams().id;


    const onSubmit = e => {
        e.preventDefault();

         dispatch(uploadActions.updatePostThunk(id, description))
    }
    return (
        <div className='wrapper-upload'>

        <form onSubmit={onSubmit} className='upload-form'>
            <label className='upload-img-txt'>
                Edit Your Post

            </label>
            <label>
                <textarea
                    placeholder='Description'
                    type='text'
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required
                    rows="3"
                    cols="20"
                    />
            </label>
            <button className='upload-btn' type="submit">Post!</button>
        </form>
        </div>
    )

}
export default EditPost
