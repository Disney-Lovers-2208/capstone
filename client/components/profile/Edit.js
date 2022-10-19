import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { updateAuth } from "../../store/auth";
import { useNavigate } from "react-router-dom";

export function Edit(props) {
  const auth = useSelector((state) => state.auth);
  const authId = useSelector((state) => state.auth.id);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [firstName, setFirstName] = useState(auth.firstName);
  const [lastName, setLastName] = useState(auth.lastName);
  const [email, setEmail] = useState(auth.email);
  const [username, setUsername] = useState(auth.username);
  const [bio, setBio] = useState(auth.bio);

  useEffect(() => {
    setFirstName(auth.firstName);
    setLastName(auth.lastName);
    setEmail(auth.email);
    setUsername(auth.username);
    setBio(auth.bio);
  }, [auth.firstName, auth.lastName, auth.email, auth.username, auth.bio]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert("Submitting form");
    dispatch(
      updateAuth(
        authId,
        { firstName, lastName, email, username, bio },
        navigate
      )
    );
  };

  return (
    <Container>
      <h1>Edit Profile</h1>
      <hr />
      <Row>
        {/* Left side */}
        <Col lg={4}>
          <div className="text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              style={{ width: "100px" }}
              alt="image"
            />
            <h6>Upload a different profile photo...</h6>
            <input type="file" className="form-control" />
            <h6>Upload a different banner photo...</h6>
            <input type="file" className="form-control" />
          </div>
        </Col>
        <Col lg={8}>
          <form className="edit-form" onSubmit={handleSubmit}>
            <label htmlFor="firstName" className="form-labels">
              {" "}
              First Name:{" "}
            </label>
            <input
              type="text"
              className="form-inputs"
              value={firstName || ""}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="lastName" className="form-labels">
              {" "}
              Last Name:{" "}
            </label>
            <input
              type="text"
              className="form-inputs"
              value={lastName || ""}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="email" className="form-labels">
              {" "}
              Email:{" "}
            </label>
            <input
              type="text"
              className="form-inputs"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="username" className="form-labels">
              {" "}
              Username:{" "}
            </label>
            <input
              type="text"
              className="form-inputs"
              value={username || ""}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="bio" className="form-labels">
              {" "}
              Bio:{" "}
            </label>
            <textarea
              className="form-inputs"
              value={bio || ""}
              onChange={(e) => setBio(e.target.value)}
            />
            <input type="submit" value="Submit" />
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Edit;
