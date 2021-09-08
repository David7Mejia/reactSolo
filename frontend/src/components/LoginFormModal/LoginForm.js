// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './LoginForm.css';

function LoginForm() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };

    return (
        <div className="login_form">

        <form onSubmit={handleSubmit} >
            <ul>
                {errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
            <label className='travlr'>
                    Log In to Travlr
                    <br/>
                    <input
                        className='username'
                    type="text"
                    value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        placeholder="Username or Email"
                    required
                    />
                </label>
            <label>
                    <br />
                    <input
                    className='password'

                    type="password"
                    value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                    required
                />
            </label>
            <button id='btn' className='main-btn' type="submit" style={{marginRight: '0'}}>Log In</button>
        </form>
                    </div>
    );
}

export default LoginForm;
