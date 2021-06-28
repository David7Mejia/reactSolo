import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import {useParams, useHistory} from 'react-router'
import {updateCommentThunk, getCommentThunk} from "../../store/comment";
import {getPostThunk} from "../../store/upload";

function EditComment({ids}) {
    const dispatch = useDispatch();
    const [comment, setComment] = useState('')
    // const { id } = useParams()
    const history = useHistory()
    // console.log(id)
    const onSubmit = e => {
        e.preventDefault();
        dispatch(updateCommentThunk(13, comment))
        // history.push(`/images/${id}`)
    }

    return (
        <div className='wrapper-upload'>

        <form onSubmit={onSubmit} className='upload-form'>
            <label className='upload-img-txt'>
                Edit Your Comment

            </label>
            <label>
                <textarea
                    placeholder='Comment'
                    type='text'
                    value={comment}
                    onChange={e => setComment(e.target.value)}
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
export default EditComment
