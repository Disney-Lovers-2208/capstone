import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { addFriend, removeFriend } from "../../store/auth";
import Stats from "./Stats";

const Banner = (props) => {
  const { user } = props;
  let auth = useSelector((state) => state.auth);
  const isFriend = auth.friend.find((friend) => friend.id === user.id);
  const isOwnProfile = () => {
    return auth.id === user.id;
  };
  const dispatch = useDispatch();

  const location = useLocation().pathname;

  return (
    <Container fluid>
      <Row>
        <Col
          className="banner-image"
          style={{
            backgroundImage: `url(${user.bannerImage}) `,
          }}
        >
          <Row>
            <Col>
              <img
                src={user.image}
                className="banner-profile-image d-block mx-auto"
                alt="image"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="user-info">
        <Col sm={11} className="">
          <h1 style={{ fontSize: "60px", margin: "2rem" }}>
            {user.firstName} {user.lastName}
          </h1>

          <p style={{ margin: "2rem" }}>{user.bio} </p>
        </Col>

        <Col sm={1}>
          {user.id === auth.id ? (
            <Row>
              {location !== "/profile/edit" ? (
                <Col style={{ marginTop: "1rem ", textAlign: "right" }}>
                  <Link to="/profile/edit">
                    <button style={{ padding: "1rem" }}>Edit</button>
                  </Link>
                </Col>
              ) : null}
            </Row>
          ) : null}
          {!isOwnProfile() ? (
            isFriend ? (
              <button
                style={{ marginTop: "1rem " }}
                onClick={() => dispatch(removeFriend(user.id))}
              >
                Remove Friend
              </button>
            ) : (
              <button
                style={{ padding: "1rem", marginTop: "1rem " }}
                onClick={() => dispatch(addFriend(user.id))}
              >
                Add Friend
              </button>
            )
          ) : null}
        </Col>
      </Row>

      <Stats user={user} />

      {user.id === auth.id ? (
        <Row className="buttons">
          <Col>
            <Link to="/profile">
              <button className="">Profile</button>
            </Link>
          </Col>

          <Col>
            <Link to="/profile/history">
              <button
                className={
                  location === "/profile/history" ? "active-button" : ""
                }
              >
                History
              </button>
            </Link>
          </Col>

          <Col>
            <Link to="/profile/saved">
              <button
                className={location === "/profile/saved" ? "active-button" : ""}
              >
                Saved
              </button>
            </Link>
          </Col>

          <Col>
            <Link to="/profile/friends">
              <button variant="outlined">Friends</button>
            </Link>
          </Col>
        </Row>
      ) : null}
      <hr />
    </Container>
  );
};

export default Banner;
