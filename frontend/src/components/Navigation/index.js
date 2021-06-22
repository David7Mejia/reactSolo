// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SignUpFormModal from '../SignupFormModal';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
                <>
                <NavLink exact to="/">Travlr</NavLink>
                <div className='btns'>
                <LoginFormModal />
                <SignUpFormModal />
                </div>
                </>
        );
    }

    return (
        <div className='nav_bar'>
            <div className='nav_buttons' >
            {isLoaded}{sessionLinks}
            </div>
        </div>
    );
}

export default Navigation;
