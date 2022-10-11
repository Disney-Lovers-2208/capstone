import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Banner = (props) => {
  const { user } = props;
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
        <Col sm={10} className="">
          <h1>
            {user.firstName} {user.lastName}
          </h1>
          <p>{user.bio} Lorem ipsum</p>
        </Col>
        <Col sm={2}>
          <Row className="buttons">
            {location !== "/profile" ? (
              <Col>
                <Link to="/profile">
                  <button className="btn btn-sm btn-primary  ml-2">
                    Profile
                  </button>
                </Link>
              </Col>
            ) : null}
            {location !== "/profile/history" ? (
              <Col>
                <Link to="/profile/history">
                  <button className="btn btn-sm btn-primary  ml-2">
                    History
                  </button>
                </Link>
              </Col>
            ) : null}
            {location !== "/profile/friends" ? (
              <Col>
                <Link to="/profile/friends">
                  <button className="btn btn-sm btn-primary ">Friends</button>
                </Link>
              </Col>
            ) : null}
            {location !== "/profile/edit" ? (
              <Col>
                <button className="btn btn-sm btn-outline-primary  ml-2">
                  Edit
                </button>
              </Col>
            ) : null}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;

{
  /* <Container fluid className="banner">
<Row>
  <img src={user.image} alt="image" />
</Row>
<Row className="banner-info">
  <h1 className="name">
    {user.firstName} {user.lastName}
  </h1>
  <div className="bio"> {user.bio}</div>
  <div className="buttons">
    <button class="btn btn-sm btn-primary  ml-2">History</button>
    <Link to="/profile/friends">
      <button class="btn btn-sm btn-primary ">Friends</button>
    </Link>
    <button class="btn btn-sm btn-outline-primary  ml-2">Edit</button>
  </div>
</Row>
</Container> */
}