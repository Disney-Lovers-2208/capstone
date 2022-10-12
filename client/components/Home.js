import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { getActivityLog } from "../store/activityLog";
/**
 * COMPONENT
 */
export const Home = () => {
  const username = useSelector((state) => state.auth.username);
  const userId = useSelector((state) => state.auth.id);
  let auth = useSelector((state) => state.auth);
  let activityLog = useSelector((state) => state.activityLog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivityLog(userId));
  }, [dispatch]);

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
