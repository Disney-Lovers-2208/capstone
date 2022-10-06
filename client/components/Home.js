import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
/**
 * COMPONENT
 */
export const Home = (props) => {
  const username = useSelector((state) => state.auth.username);

  return (
    <div>
      <Container>
        <Row>
          <Col lg={8}>Welcome, {username}</Col>
          <Col lg={4}>2 of 2</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
