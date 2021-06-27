// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
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
        if (!showMenu) return;
        const closeMenu = () => {
            setShowMenu(false);
        };
        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    useEffect(() => {
        if (!showEdit) return;

        const closeEdit = () => {
            setShowEdit(false);
        };

        return () => document.removeEventListener("click", closeEdit);
    }, [showEdit]);

    return (
        <div className='edit-menu'>
            <button className='edit-btn'id="elipses" onClick={showMenu === true ? closeMenu : openMenu } >
                {/* <div id="elipses" /> */}
            </button>
            {showMenu && (
                <div className="edit-dropdown">
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
