import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { getActivityLog } from "../store/activityLog";
import { getAllUsers } from "../store/users";
import ActivityCard from "./activityLog/ActivityCard";
/**
 * COMPONENT
 */
export const Home = () => {
  const username = useSelector((state) => state.auth.username);
  const userId = useSelector((state) => state.auth.id);
  const users = useSelector((state) => state.users);
  let auth = useSelector((state) => state.auth);
  let activityLog = useSelector((state) => state.activityLog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getActivityLog(userId));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className="activity-log">
      <Row xs={3} md={3}>
        {activityLog.length
          ? activityLog.map((activity, index) => (
              <Col key={index}>
                <ActivityCard activity={activity} />
              </Col>
            ))
          : null}
      </Row>
    </div>
  );
};

export default Home;
