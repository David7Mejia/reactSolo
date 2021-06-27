import './Comments.css'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as commentActions from "../../store/comment";
import {useParams} from 'react-router'
// import {useHistory} from 'react-router-dom'

function Comments() {
const dispatch = useDispatch()
const [commentBody, setCommentBody] = useState('')
const loggedIn = useSelector(state => state.session).user;
const postComments = useSelector(state => (state.cmnt));
// const imgInfo = useSelector(state => Object.values(state.img));
// console.log(`@@@@@@@@@@@@@@@@@@@@`,imageInfo)
    const { id } = useParams()
    const newId = Number(id)
    const onSubmit = (e) => {
    e.preventDefault();
        let user_id = loggedIn.id;

    // let username = sessionUser.username
    // history.push('/')
    return dispatch(commentActions.postCommentThunk({ image_id: newId, user_id, comment: commentBody }))
}

    return (
    <div className="comment-wrapper">
        <form onSubmit={onSubmit} className="comment-form">
            <label className='comment-label'>
                <input
                placeholder='Comment...'
                className='post-comment'
                type='text'
                value={commentBody}
                onChange={e => setCommentBody(e.target.value)}
                required
                />
                </label>
                <button type='submit'>Post Comment</button>
        </form>
    </div>
)
}

export default Comments
