import React from "react";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

export const BookCard = (props) => {
  const { book } = props;
  const { id, imageUrl, title } = book;

  // return (
  //   <Container>
  //     <Card
  //       border="info"
  //       style={{ width: "15rem", backgroundColor: "#FF5454" }}
  //     >
  //       <Link to={`/books/${id}`} style={{ color: "inherit" }}>
  //         <Card.Img variant="top" src={imageUrl} />
  //         <Card.Body>
  //           <Card.Title>{title}</Card.Title>
  //         </Card.Body>
  //       </Link>
  //     </Card>
  {/* const { books } = props; */}

  return (
    <Container fluid className="all-movies">
      {book.map((book) => (
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
