import React from "react";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

export const TvCard = (props) => {
  const { tvShow } = props;
  const { id, imageUrl, title } = tvShow;

  return (
    <Container>
      <Card
        border="info"
        style={{ width: "15rem", backgroundColor: "#FF5454" }}
      >
        <Link to={`/tvshows/${id}`} style={{ color: "inherit" }}>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
        </Link>
      </Card>
    </Container>
  );
};

export default TvCard;
