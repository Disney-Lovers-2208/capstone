import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { authenticate } from "../store";
import { Container, Row, Col } from "react-bootstrap";

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    dispatch(authenticate(username, password, formName));
  };

  return (
    <div className="auth">
      <form
        className="authForm"
        onSubmit={handleSubmit}
        name={location?.slice(1)}
      >
        {location === "/login" ? <h1>Login</h1> : <h1>Sign Up</h1>}
        {location === "/signup" ? (
          <div>
            <label htmlFor="email"></label>
            <input
              className="signup"
              name="email"
              placeholder="email"
              type="email"
            />
          </div>
        ) : null}
        <div>
          <label htmlFor="username"></label>
          <input name="username" placeholder="Username" type="text" />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input name="password" placeholder="Password" type="password" />
        </div>

        <div>
          <button className="sameAsLocation" type="submit">
            {location === "/login" ? "Login" : "Sign Up"}
          </button>
        </div>

        <div>
          <button className="opposite" type="submit">
            {location === "/login" ? "Sign Up" : "LogIn"}
          </button>
        </div>

        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  );
};

export default AuthForm;
