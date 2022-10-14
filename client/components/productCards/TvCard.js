import React from "react";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

export const TvCard = (props) => {
  const { tvShow } = props;

  return (
    <Container fluid className="all-movies">
      {tvShow.map((tv) => (
        <Card key={tv.id} style={{ width: "15rem", margin: "2rem" }}>
          <Link to={`/tvshows/${tv.id}`}>
            <Card.Img className="card-img" variant="top" src={tv.imageUrl} />
          </Link>
        </Card>
      ))}
    </Container>
  );
};

export default TvCard;
