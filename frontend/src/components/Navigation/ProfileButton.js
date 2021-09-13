// frontend/src/components/Navigation/ProfileButton.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import '../Navigation/Navigation.css';
import {useHistory} from 'react-router'


function ProfileButton() {
    const dispatch = useDispatch();
    const loggedIn = useSelector(state => state.session).user;
    const history = useHistory()

    useEffect(() => {
        if (!loggedIn) history.push('/')
    })

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };


  const toProfile = e => {
    e.preventDefault();
    history.push(`/user/${loggedIn.id}`);
    }

    return (
      <div className="drop_menu">
        <button className="main-btn" onClick={toProfile}>
                <i className="fas fa-user-circle" />
                &nbsp;
          {loggedIn.username}
        </button>

        <button className="main-btn" onClick={logout}>
          Log Out
        </button>
      </div>
    );
}

export default ProfileButton;
