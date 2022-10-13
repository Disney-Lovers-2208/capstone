import React from "react";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

export const MovieCard = (props) => {
  const { movie } = props;
  const { id, imageUrl, title, description } = movie;

  return (
    <Container>
      <Card
        border="info"
        style={{ width: "15rem", backgroundColor: "#FF5454" }}
      >
        <Link to={`/movies/${id}`} style={{ color: "inherit" }}>
          <Card.Img variant="top" src={imageUrl} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Container>
  );
};

export default MovieCard;
