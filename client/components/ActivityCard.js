import React from "react";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import userReducer from "../store/user";

export const ActivityCard = (props) => {
  const { activity } = props;

  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>
            {activity.user.firstName} {activity.user.lastName} reviewed
          </Card.Title>
          {activity.content ? (
            <Card.Text>{activity.content}</Card.Text>
          ) : (
            <Card.Text>{activity.rating}</Card.Text>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ActivityCard;
