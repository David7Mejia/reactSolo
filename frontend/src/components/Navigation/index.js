// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SignUpFormModal from '../SignupFormModal';
import Upload from '../Upload';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <NavLink exact to="/">Travlr</NavLink>
                    <label>
                        <input
                            className='nav_search'
                            type='text'
                            placeholder='Search...'
                        />
                        </label>
                <div className='btns'>
                    <NavLink to='/upload-image' className='upload-container'>
                        <div className='upload'>
                    </div>
                    </NavLink>
                <ProfileButton user={sessionUser} />
                </div>
                </>
        );
    } else {
        sessionLinks = (
                <>
                <NavLink exact to="/">Travlr</NavLink>
                <label>
                    <input
                        className='nav_search'
                        type='text'
                        placeholder='Search...'
                    />
                </label>
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
