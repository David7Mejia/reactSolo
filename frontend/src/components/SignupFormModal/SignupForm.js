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
      <div className="signup_form">
        <form onSubmit={handleSubmit} className="form-inputs">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
          <label className="travlr">
            Join Us
            <br />
            <input
              placeholder="Email"
              className="username"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            <input
              placeholder="Username"
              className="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <br />
          </label>
          <label>
            <input
              placeholder="First Name"
              className="username"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <br />
          </label>
          <label>
            <input
              placeholder="Password"
              className="username"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <label>
            <input
              placeholder="Confirm Password"
              className="username"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        style={{marginBottom: '10px'}}
            />
            <br />
          </label>
          <button className="main-btn" type="submit" id="signup-btn">
            Sign Up
          </button>
        </form>
      </div>
    );
}

export default SignupForm;
