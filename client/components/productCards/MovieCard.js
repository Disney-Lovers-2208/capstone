import React from "react";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

export const MovieCard = (props) => {
  const { movies } = props;

  return (
    <Container fluid className="all-movies">
      {movies.map((movie) => (
        <Card key={movie.id} style={{ width: "15rem", margin: "2rem" }}>
          <Link to={`/movies/${movie.id}`} style={{ color: "inherit" }}>
            <Card.Img className="card-img" variant="top" src={movie.imageUrl} />
          </Link>
        </Card>
      ))}
    </Container>
  );
};

export default MovieCard;
