import React from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import RatedStars from "./RatedStars";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

export const ActivityCard = (props) => {
  const { activity } = props;
  return (
    <Container>
      <Card>
        <Card.Body>
          {activity.book ? (
            <div>
              <Row>
                <Col>
                  <img
                    src={activity.book.imageUrl}
                    alt="book-image"
                    className="activity-card-img"
                  />
                </Col>
                <Col>
                  <Card.Title>
                    {activity.user.firstName} {activity.user.lastName} reviewed{" "}
                    {activity.book.title}
                  </Card.Title>
                  <Card.Text>{activity.content}</Card.Text>
                  <Card.Text>
                    <RatedStars rating={activity.rating} />
                  </Card.Text>
                  <Card.Text>
                    {timeAgo.format(new Date(activity.updatedAt))}
                  </Card.Text>
                </Col>
              </Row>
            </div>
          ) : activity.tv ? (
            <div>
              <Row>
                <Col>
                  <img
                    src={activity.tv.imageUrl}
                    alt="tv-image"
                    className="activity-card-img"
                  />
                </Col>
                <Col>
                  <Card.Title>
                    {activity.user.firstName} {activity.user.lastName} reviewed{" "}
                    {activity.tv.title}
                  </Card.Title>
                  <Card.Text>{activity.content}</Card.Text>
                  <Card.Text>
                    <RatedStars rating={activity.rating} />
                  </Card.Text>
                  <Card.Text>
                    {timeAgo.format(new Date(activity.updatedAt))}
                  </Card.Text>
                </Col>
              </Row>
            </div>
          ) : (
            <div>
              <Row>
                <Col>
                  <img
                    src={activity.movie.imageUrl}
                    alt="movie-image"
                    className="activity-card-img"
                  />
                </Col>
                <Col>
                  <Card.Title>
                    {activity.user.firstName} {activity.user.lastName} reviewed{" "}
                    {activity.movie.title}
                  </Card.Title>
                  <Card.Text>{activity.content}</Card.Text>
                  <Card.Text>
                    <RatedStars rating={activity.rating} />
                  </Card.Text>
                  <Card.Text>
                    {timeAgo.format(new Date(activity.updatedAt))}
                  </Card.Text>
                </Col>
              </Row>
            </div>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ActivityCard;
