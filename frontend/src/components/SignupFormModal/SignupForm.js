import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
import { Redirect } from "react-router-dom";

function SignupForm() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, firstName, password, username }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <div className='signup_form'>

        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
                    {/* Email */}
                    Join Us
                    <br/>
                    <input
                        placeholder='Email'
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
            </label>
            <label>
                {/* Username */}
                    <input
                        placeholder='Username'
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    />
                    <br/>
            </label>
            <label>
                {/* First Name */}
                    <input
                        placeholder='First Name'
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    />
                    <br/>
            </label>
            <label>
                {/* Password */}
                    <input
                        placeholder='Password'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </label>
                {/* <br/> */}
            <label>
                {/* Confirm Password */}
                    <input
                        placeholder='Confirm Password'
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    />
                    <br/>
            </label>
            <button id='main-btn' type="submit">Sign Up</button>
        </form>
                    </div>
    );
}

export default SignupForm;
