import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { updateAuth } from "../../store/auth";
import { useNavigate } from "react-router-dom";

export function Edit(props) {
  const auth = useSelector((state) => state.auth);
  const authId = useSelector((state) => state.auth.id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(auth.firstName);
  const [lastName, setLastName] = useState(auth.lastName);
  const [email, setEmail] = useState(auth.email);
  const [username, setUsername] = useState(auth.username);
  const [bio, setBio] = useState(auth.bio);
  const [image, setImage] = useState(auth.image);
  const [bannerImage, setBannerImage] = useState(auth.bannerImage);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFirstName(auth.firstName);
    setLastName(auth.lastName);
    setEmail(auth.email);
    setUsername(auth.username);
    setBio(auth.bio);
    setImage(auth.image);
    setBannerImage(auth.image);
  }, [
    auth.firstName,
    auth.lastName,
    auth.email,
    auth.username,
    auth.bio,
    auth.image,
    auth.bannerImage,
  ]);

  function helperFunc() {
    setLoading(false);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert("Submitting form");
    setLoading(true);
    dispatch(
      updateAuth(
        authId,
        { firstName, lastName, email, username, bio, image, bannerImage },
        navigate,
        helperFunc
      )
    );
  };

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="edit-profile-page">
          <h1>Edit Profile</h1>
          <div>
            <Row className="edit-form">
              <Col lg={4}>
                <div className="text-center">
                  <img
                    src={auth.image}
                    style={{ width: "100px", borderRadius: "100%" }}
                    alt="image"
                  />
                  <h6>Upload a different profile photo...</h6>
                </div>
              </Col>
              <Col lg={8}>
                <form className="edit-form-text" onSubmit={handleSubmit}>
                  <Row className="edit-name">
                    <Col>
                      <label htmlFor="firstName"> First Name: </label>
                      <input
                        type="text"
                        value={firstName || ""}
                        className="form-inputs"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <label htmlFor="lastName"> Last Name: </label>
                      <input
                        type="text"
                        value={lastName || ""}
                        className="form-inputs"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <label htmlFor="email"> Email: </label>
                      <input
                        type="text"
                        value={email || ""}
                        className="form-inputs"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <label htmlFor="username"> Username: </label>
                      <input
                        type="text"
                        value={username || ""}
                        className="form-inputs"
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <label htmlFor="bio"> Bio: </label>
                      <textarea
                        value={bio || ""}
                        className="bio-text"
                        onChange={(e) => setBio(e.target.value)}
                      />
                    </Col>
                  </Row>
                  <Row className="submit">
                    <input
                      type="submit"
                      value="Submit"
                      className="submit-button"
                    />
                  </Row>
                </form>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </div>
  );
}

export default Edit;
