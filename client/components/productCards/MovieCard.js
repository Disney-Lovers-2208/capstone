import React from "react";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

export const MovieCard = (props) => {
  const { movies } = props;
  const { id, imageUrl, title } = movies;

  return (
    // <Container>
    //   <Card
    //     border="info"
    //     style={{ width: "15rem", backgroundColor: "#FF5454" }}
    //   >
    //     <Link to={`/movies/${id}`} style={{ color: "inherit" }}>
    //       <Card.Img variant="top" src={imageUrl} />
    //       {/* <Card.Body>
    //         <Card.Title>{title}</Card.Title>
    //       </Card.Body> */}
    //     </Link>
    //   </Card>
    // </Container>

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
