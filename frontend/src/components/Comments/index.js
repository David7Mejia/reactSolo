import './Comments.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import * as commentActions from "../../store/comment";
import { useParams } from 'react-router'
import { getCommentThunk, postCommentThunk } from '../../store/comment'


function Comments() {
    const dispatch = useDispatch()
    const [commentBody, setCommentBody] = useState('')
    const loggedIn = useSelector(state => state.session).user;
    const postComments = useSelector(state => Object.values(state.cmnt));
    const { id } = useParams()
    const newId = Number(id)


    console.log(`@@@@@@@@@@@@@@@@@@@@@@@@@@@@`, loggedIn)

    useEffect(() => {
        dispatch(getCommentThunk(id))
    }, [dispatch, id])

    const onSubmit = (e) => {
        e.preventDefault();
        let user_id = loggedIn.id;
        return dispatch(postCommentThunk({ image_id: newId, user_id, comment: commentBody }))
    }

    return (
        <div className="comment-wrapper">
            <form onSubmit={onSubmit} className="comment-form">
                <label className='comment-label'>
                    <input
                    placeholder='Type your comment...'
                    className='post-comment'
                    type='text'
                    value={commentBody}
                    onChange={e => setCommentBody(e.target.value)}
                    required
                    />
                    </label>
                    <button id='comment-btn' className='main-btn' type='submit'>Post Comment</button>
            </form>
            <div className='all-comments'>
                {postComments &&
                    postComments.map(com => (
                        <div key={com?.id}>
                            {com.user_id }{com.comment}
                        </div>
                    ))}

            </div>
        </div>
    )
}

export default Comments
