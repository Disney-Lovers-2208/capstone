import React from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import BookCard from "./BookCard";

export const AllBooks = () => {
  const books = useSelector((state) => state.books);

  return (
    <div className="all-items">
      <Row xs={3} md={3}>
        {books.length
          ? books.map((book) => (
              <Col key={book.id}>
                <BookCard book={book} />
              </Col>
            ))
          : null}
      </Row>
    </div>
  );
};

export default AllBooks;
