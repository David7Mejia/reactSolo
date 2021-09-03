// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import SignUpFormModal from '../SignupFormModal';
import { login } from '../../store/session';


function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const demo = async (e) => {
        e.preventDefault();
        let credential = 'demo'
        let password = 'zzzzzz'
     dispatch(login({credential, password}));
   };

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <>
                <NavLink exact to="/">Travlr</NavLink>
                <div className='btns'>
                    <NavLink to='/upload-image' className='upload-container'>
                        <div className='upload'></div>
                    </NavLink>
                <ProfileButton user={sessionUser} />
                </div>
                </>
        );
    } else {
        sessionLinks = (
                <>
                <NavLink exact to="/">Travlr</NavLink>
                {/* <label>
                    <input
                        className='nav_search'
                        type='text'
                        placeholder='Search...'
                    />
                </label> */}
                <div className='btns'>
                <LoginFormModal />
                    <SignUpFormModal />
                    <button className='main-btn' id='demo-btn' onClick={demo} >
                        Demo
                    </button>
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
