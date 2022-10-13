import React from "react";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

export const MovieCard = (props) => {
  const { movies, loading } = props;
  console.log(loading);
  if (loading) {
    return <h2>Loading</h2>;
  }
  return (
    <Container fluid className="all-movies">
      {movies.map((movie) => (
        <Card
          border="info"
          style={{ width: "15rem", backgroundColor: "#FF5454", margin: "2rem" }}
        >
          <Card.Img variant="top" src={movie.imageUrl} />
          <Card.Body>
            <Link to={`/movies/${movie.id}`} style={{ color: "inherit" }}>
              <Card.Title>{movie.title}</Card.Title>
            </Link>
            <Card.Text>{movie.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default MovieCard;
