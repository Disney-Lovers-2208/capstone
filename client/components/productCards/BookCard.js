import React from "react";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

export const BookCard = (props) => {
  const { books } = props;

  return (
    <Container fluid className="all-movies">
      {books.map((book) => (
        <Card
          key={book.id}
          border="info"
          style={{ width: "15rem", margin: "2rem" }}
        >
          <Link to={`/books/${book.id}`}>
            <Card.Img variant="top" src={book.imageUrl} />
          </Link>
        </Card>
      ))}
    </Container>
  );
};

export default BookCard;
