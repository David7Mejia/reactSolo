// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from 'react-redux';
import * as uploadActions from '../../store/upload';
import './SinglePost.css';
import EditPost from '../EditPost'
import { useHistory, useParams } from "react-router";
import { deleteImageThunk } from '../../store/upload'


function EditButton({ img }) {
    const { id } = useParams();
    const history = useHistory()
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const modalRef = useRef();


    useEffect(() => {
        dispatch(uploadActions.getPostThunk(id))
    }, [dispatch, id])

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    const closeMenu = () => {
            if (!showMenu) return;
        setShowMenu(false);
    };

    const openEdit = () => {
        if (showEdit) return;
        setShowEdit(true);
    };
    const closeEdit = () => {
            if (!showEdit) return;
        setShowEdit(false);
    };

    const deletePost = id => {
        dispatch(deleteImageThunk(id))
        history.push('/')
    }

    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            if (!modalRef?.current?.contains(e.target)) {
                setShowMenu(false);
            }
        });
 });

    return (
        <div className='edit-menu'>
            <button className='edit-btn'id="elipses" onClick={showMenu === true ? closeMenu : openMenu } >
            </button>
            {showMenu && (
                <div className="edit-dropdown" ref={modalRef}>
                    <button onClick={() => deletePost(id)} className='delete-btn'>Delete</button>
                    <button onClick={showEdit === true ? closeEdit : openEdit} className='delete-btn' id='edit-btn'>Edit</button>
                    {showEdit && (
                        <EditPost post={img} />
                        )}
                </div>
            )}
        </div>
    );
}

export default EditButton;
