// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import * as sessionActions from '../../store/session';
import '../Navigation/Navigation.css';
import {useHistory} from 'react-router'


function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const loggedIn = useSelector(state => state.session).user;
    const history = useHistory()


    console.log(loggedIn)
    useEffect(() => {
        if (!loggedIn) history.push('/')
    })

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };


    return (
      <div className="drop_menu">
        <Link className="main-btn" to={`/user/${loggedIn.id}`}>
                <i className="fas fa-user-circle" />
                &nbsp;
          {loggedIn.username}
        </Link>

        <button className="main-btn" onClick={logout}>
          Log Out
        </button>
      </div>
    );
}

export default ProfileButton;

/**
 *
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
 */
