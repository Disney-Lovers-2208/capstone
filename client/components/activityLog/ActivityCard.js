import React from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
import RatedStars from "./RatedStars";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

export const ActivityCard = (props) => {
  const { activity } = props;

  console.log("user", activity.user);
  return (
    <Container className="activity-log-card">
      <>
        {activity.book ? (
          <Container className="activity-log-card">
            <Col className="card-col">
              <Row>
                <Col lg={4} sm={12} className="d-none d-sm-block">
                  <img
                    src={activity.book.imageUrl}
                    alt="book-image"
                    className="activity-card-img"
                  />
                </Col>
                <Col lg={8} sm={12}>
                  <h3 className="post-title">
                    {activity.user.firstName} {activity.user.lastName} reviewed{" "}
                    {activity.book.title}
                  </h3>
                  <Card.Text className="text-left">
                    <RatedStars rating={activity.rating} />
                  </Card.Text>
                  <Card.Text className="text-left">
                    {timeAgo.format(new Date(activity.updatedAt))}
                  </Card.Text>
                  <Card.Text className="text-left">
                    {activity.content}
                  </Card.Text>
                </Col>
              </Row>
            </Col>
          </Container>
        ) : activity.tv ? (
          <Container className="activity-log-card">
            <Col className="card-col">
              <Row>
                <Col lg={4} sm={12} className="d-none d-sm-block">
                  <img
                    src={activity.tv.imageUrl}
                    alt="tv-image"
                    className="activity-card-img"
                  />
                </Col>
                <Col lg={8} sm={12}>
                  <h3 className="post-title">
                    {activity.user.firstName} {activity.user.lastName} reviewed{" "}
                    {activity.tv.title}
                  </h3>
                  <Card.Text className="text-left">
                    <RatedStars rating={activity.rating} />
                  </Card.Text>
                  <Card.Text className="text-left">
                    {timeAgo.format(new Date(activity.updatedAt))}
                  </Card.Text>
                  <Card.Text className="text-left">
                    {activity.content}
                  </Card.Text>
                </Col>
              </Row>
            </Col>
          </Container>
        ) : (
          <Container className="activity-log-card">
            <Col className="card-col">
              <Row>
                <Col lg={4} sm={12} className="d-none d-sm-block">
                  <img
                    src={activity.movie.imageUrl}
                    alt="movie-image"
                    className="activity-card-img"
                  />
                </Col>
                <Col lg={8} sm={12}>
                  <h3 className="post-title">
                    {activity.user.firstName} {activity.user.lastName} reviewed{" "}
                    {activity.movie.title}
                  </h3>
                  <Card.Text className="text-left">
                    <RatedStars rating={activity.rating} />
                  </Card.Text>
                  <Card.Text className="text-left">
                    {timeAgo.format(new Date(activity.updatedAt))}
                  </Card.Text>
                  <Card.Text className="text-left">
                    {activity.content}
                  </Card.Text>
                </Col>
              </Row>
            </Col>
          </Container>
        )}
      </>
    </Container>
  );
};

export default ActivityCard;
