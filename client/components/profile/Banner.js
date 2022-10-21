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
  }
  const dispatch = useDispatch();

  const location = useLocation().pathname;
  return (
    <Container fluid>
      <Row>
        <Col
          className="banner-image"
          style={{
            backgroundImage: `url(${user.bannerImage})`,
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
          <h1>
            {user.firstName} {user.lastName}
          </h1>
          {!isOwnProfile() ? (
            isFriend ? (
              <button onClick={() => dispatch(removeFriend(user.id))}>Remove Friend</button>
            ) : (
              <button onClick={() => dispatch(addFriend(user.id))}>Add Friend</button>
            )
          ) : null}
          <p>{user.bio} Lorem ipsum</p>
        </Col>

        <Col sm={1}>
          {user.id === auth.id ? (
            <Row>
              {location !== "/profile/edit" ? (
                <Col>
                  <Link to="/profile/edit">
                    <button className="btn btn-sm btn-outline-primary  ml-2">
                      Edit
                    </button>
                  </Link>
                </Col>
              ) : null}
            </Row>
          ) : null}
        </Col>
      </Row>

      <Stats user={user} />

      <hr />
      {user.id === auth.id ? (
        <Row className="buttons">
          <Col>
            <Link to="/profile">
              <button className="btn btn-sm btn-primary  ml-2">Profile</button>
            </Link>
          </Col>

          <Col>
            <Link to="/profile/history">
              <button className="btn btn-sm btn-primary  ml-2">History</button>
            </Link>
          </Col>

          <Col>
            <Link to="/profile/saved">
              <button className="btn btn-sm btn-primary  ml-2">Saved</button>
            </Link>
          </Col>

          <Col>
            <Link to="/profile/friends">
              <button className="btn btn-sm btn-primary ">Friends</button>
            </Link>
          </Col>
        </Row>
      ) : null}
      <hr />
    </Container>
  );
};

export default Banner;
