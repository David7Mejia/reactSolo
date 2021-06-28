// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as uploadActions from '../../store/upload';
import EditComment from '../EditComment'
import { useParams } from "react-router";
import {getCommentThunk} from "../../store/comment"


function EditCommentBtn({ ids }) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    useEffect(() => {
        dispatch(uploadActions.getPostThunk(id))
    }, [dispatch, id])
    useEffect(() => {
        dispatch(getCommentThunk(id))
    }, [dispatch, id])

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };
    const closeMenu = () => {
            if (!showMenu) return;
        setShowMenu(false);
    };





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
        <div className='edit-menu-comm'>
            <button className='edit-pen' onClick={showMenu === true ? closeMenu : openMenu} >
            </button>
            {showMenu && (
                <div className="edit-dropdown">
                    <EditComment ids={ids }/>
                </div>
            )}
        </div>
    );
}

export default EditCommentBtn;
