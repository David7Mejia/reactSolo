// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import '../Navigation/Navigation.css';


function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <div className='drop_menu'>
            <button id='main-btn' onClick={openMenu}>
                <i className="fas fa-user-circle" />
            </button>
            {showMenu && (
                <div className="profile-dropdown">
                    {user.username}
                    <br/>
                    {user.email}
                    <br/>
                <button id='main-btn' onClick={logout}>Log Out</button>
                </div>

            )}
        </div>
    );
}

export default ProfileButton;
