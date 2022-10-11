import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { authenticate } from "../store";
import { Container, Col, Row } from "react-bootstrap";

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const handleLoginSubmit = (evt) => {
    evt.preventDefault();
    const formName = "login";
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    dispatch(authenticate(username, password, formName));
  };

  const handleSignupSubmit = (evt) => {
    evt.preventDefault();
    const formName = "signup";
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    const email = evt.target.email.value;
    const firstName = evt.target.firstname.value;
    const lastName = evt.target.lastname.value;
    dispatch(
      authenticate(
        username,
        password,
        formName,
        email,
        firstName,
        lastName,
        navigate
      )
    );
  };

  if (location === "/signup") {
    return (
      <Container className="auth">
        <Row>
          <Col className="sideDesign">
            <h2>Application</h2>
            <h2>Sign Up Page</h2>
            <p>Sign Up from here to access.</p>
          </Col>
          <Col className="formDesign" lg={6} sm={12}>
            <div>
              <form onSubmit={handleSignupSubmit} name={location?.slice(1)}>
                <div>
                  <label htmlFor="email"></label>
                  <input name="email" placeholder="email" type="text" />
                </div>
                <div>
                  <label htmlFor="firstname"></label>
                  <input
                    name="firstname"
                    placeholder="First Name"
                    type="text"
                  />
                </div>
                <div>
                  <label htmlFor="lastname"></label>
                  <input name="lastname" placeholder="Last Name" type="text" />
                </div>
                <div>
                  <label htmlFor="username"></label>
                  <input name="username" placeholder="Username" type="text" />
                </div>
                <div>
                  <label htmlFor="password"></label>
                  <input
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                </div>
                <br />
                <div>
                  <button type="submit">Sign Up</button>
                </div>
                {error && error.response && <div> {error.response.data} </div>}
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container className="auth">
        <Row>
          <Col>
            <h2>Application</h2>
            <h2>Login Page</h2>
            <p>Login or register from here to access.</p>
          </Col>
          <Col lg={6} sm={12}>
            <div>
              <form onSubmit={handleLoginSubmit} name={location?.slice(1)}>
                <div>
                  <label htmlFor="username"></label>
                  <input name="username" placeholder="Username" type="text" />
                </div>
                <div>
                  <label htmlFor="password"></label>
                  <input
                    name="password"
                    placeholder="Password"
                    type="password"
                  />
                </div>

                <br />
                <div>
                  <button type="submit">Login</button>
                </div>
                {error && error.response && <div> {error.response.data} </div>}
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default AuthForm;
