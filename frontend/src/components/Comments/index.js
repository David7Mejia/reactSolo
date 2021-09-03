import './Comments.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import EditCommentBtn from './EditCommentBtn'
import { useParams } from 'react-router'
import { getCommentThunk, postCommentThunk, deleteCommentThunk, editCommentThunk } from '../../store/comment'
import { getPostThunk } from '../../store/upload'


function Comments() {
    const dispatch = useDispatch()
    const [commentBody, setCommentBody] = useState('')
    const loggedIn = useSelector(state => state.session).user;
    const postComments = useSelector(state => Object.values(state.cmnt));
    const sessionUser = useSelector((state) => state.session.user);
    const { id } = useParams()
    // const newId = Number(id)

    useEffect(() => {
        dispatch(getCommentThunk(id))
    }, [dispatch, id])

    useEffect(() => {
        dispatch(getPostThunk(id))
    }, [dispatch, id])

    const deleteComment = id => {
        dispatch(deleteCommentThunk(id))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let user_id = loggedIn.id;
        let username = sessionUser.username;
        setCommentBody('')
        return dispatch(postCommentThunk({ image_id: id, user_id, comment: commentBody, username }))
    }

    return (
        <div>

        <div className="comment-wrapper">
            <form onSubmit={onSubmit} className="comment-form">
                <div className='comment-label'>
                    <input
                    placeholder='Type your comment...'
                    className='post-comment'
                    type='text'
                    value={commentBody}
                    onChange={e => setCommentBody(e.target.value)}
                    required
                    />
                    </div>
                    <button id='comment-btn' className='main-btn' type='submit'>Post Comment</button>
            </form>
        </div>
            <div className='all-comments'>
                {postComments &&
                    postComments.map(com => (
                        <div className='comment-flex' key={com?.id}>
                            {com?.username}: {com?.comment}
                            <div className='holder'>
                            {
                                loggedIn?.id === com?.user_id &&
                                <div className='com-cont'>
                                    <EditCommentBtn ids={ com?.id} comnt={com?.comment}/>
                            <button  id='del-btn-com' onClick={()=> deleteComment(com?.id)}></button>
                                </div>
                            }


                            </div>
                        </div>
                    ))}

            </div>
                    </div>
    )
}

export default Comments
