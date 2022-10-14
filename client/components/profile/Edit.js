import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { updateUser, fetchUser } from "../../store/user";
import { useNavigate } from "react-router-dom";
import { me } from "../../store/auth";

export function Edit(props) {
  const user = useSelector((state) => state.user);
  const userId = useSelector((state) => state.auth.id);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch]);

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState(user.bio);

  useEffect(() => {
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
    setUsername(user.username);
    setBio(user.bio);
  }, [user.firstName, user.lastName, user.email, user.username, user.bio]);

  function refreshPage() {
    window.location.reload(false);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert("Submitting form");
    dispatch(
      updateUser(
        user.id,
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
        <Col lg={3}>
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
        <Col lg={9}>
          <form className="edit-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName"> First Name: </label>
              <input
                type="text"
                value={firstName || ""}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="lastName"> Last Name: </label>
              <input
                type="text"
                value={lastName || ""}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email"> Email: </label>
              <input
                type="text"
                value={email || ""}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="username"> Username: </label>
              <input
                type="text"
                value={username || ""}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="bio"> Bio: </label>
              <textarea
                value={bio || "bio"}
                onChange={(e) => setBio(e.target.value)}
              />
            </div>
            <input type="submit" value="Submit" />
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Edit;
