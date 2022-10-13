import React from "react";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

export const ActivityCard = (props) => {
  const { activity } = props;

  return (
    <Container>
      <Card>
        <Card.Body>
          {activity.book ? (
            <div>
              <Card.Title>
                {activity.user.firstName} {activity.user.lastName} reviewed{" "}
                {activity.book.title}
              </Card.Title>
              {activity.content ? (
                <Card.Text>{activity.content}</Card.Text>
              ) : (
                <Card.Text>{activity.rating}</Card.Text>
              )}
            </div>
          ) : activity.tv ? (
            <div>
              <Card.Title>
                {activity.user.firstName} {activity.user.lastName} reviewed{" "}
                {activity.tv.title}
              </Card.Title>
              {activity.content ? (
                <Card.Text>{activity.content}</Card.Text>
              ) : (
                <Card.Text>{activity.rating}</Card.Text>
              )}
            </div>
          ) : (
            <div>
              <Card.Title>
                {activity.user.firstName} {activity.user.lastName} reviewed{" "}
                {activity.movie.title}
              </Card.Title>
              {activity.content ? (
                <Card.Text>{activity.content}</Card.Text>
              ) : (
                <Card.Text>{activity.rating}</Card.Text>
              )}
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ActivityCard;
