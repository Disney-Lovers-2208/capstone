import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "./Banner";
import { Link } from "react-router-dom";

export class Friends extends React.Component {
  render() {
    const user = this.props.auth || {};
    let friends = user?.friend || [];

    return (
      <Container fluid className="friends">
        <Row>
          <Col>
            <Banner user={user} />
          </Col>
        </Row>
        <h1>Friends</h1>
        <Row>
          <Col className="friends-list">
            {friends
              ? friends.map((friend) => {
                  return (
                    <Link to={`/friend/${friend.id}`} key={friend.id}>
                      <div className="friend-card">
                        <img src={friend.image} alt="image" />
                        {friend.firstName}
                      </div>
                    </Link>
                  );
                })
              : null}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapState = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapState, mapDispatchToProps)(Friends);
