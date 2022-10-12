import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getActivityLog } from "../store/activityLog";
/**
 * COMPONENT
 */
export const Home = (props) => {
  const username = useSelector((state) => state.auth.username);
  const userId = useSelector((state) => state.auth.id);
  let auth = useSelector((state) => state.auth);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatchEvent(getActivityLog(userId));
  // }, [dispatch]);

  return (
    <div>
      <Container>
        <Row>
          <Col lg={8}>
            Welcome, {username} {userId}
          </Col>
          <Col lg={4}>2 of 2</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
