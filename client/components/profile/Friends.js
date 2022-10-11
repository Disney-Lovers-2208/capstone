import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "./Banner";

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

        <Row>
          <Col className="friends-list">
            {friends
              ? friends.map((friend) => {
                  return (
                    <div className="friend-card" key={friend.id}>
                      <img src={friend.image} alt="image" />
                      {friend.firstName}
                    </div>
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
