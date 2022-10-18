import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { Button, Col, Card, Row } from "react-bootstrap";
import { fetchSingleBook } from "../../store/book";
import { fetchBookRating } from "../../store/starRating";
import RatedStars from "../activityLog/RatedStars";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import ReviewForm from "./ReviewForm";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

const SingleBook = () => {
  const book = useSelector((state) => state.book);
  const { imageUrl, title, description, genre, starRating } = book;
  console.log('book:', book);
  console.log('rating:', rating);
  const posts = book.posts || [];
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleBook(id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchBookRating(id));
  }, [dispatch]);

  return (
    <div className="single-view">
      <div>
        <h2>{title}</h2>
        <img src={imageUrl} alt="book-image" style={{ width: "15rem" }} />
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Rating: <RatedStars rating={rating} fillColor="#FFDD55"/></p>
      </div>

      <br />

      <div className="reviews">
        <p>Reviews:</p>
        <Card
          border="info"
          style={{ width: "15rem", backgroundColor: "#FF5454" }}
        >
          {posts.map((post) => (
            <Row key={post.bookId}>
              <p>{post.content}</p>
              <p>{timeAgo.format(new Date(post.updatedAt))}</p>
            </Row>
          ))}
        </Card>
      </div>

      <br />


      <Row xs={3}>
        <Col>
          <Button variant="dark" as={Link} to={"/profile"}>
            <FaHeart />
            Add to Favorite
          </Button>
          <Button variant="success" as={Link} to={"/profile/saved"}>
            Add to Saved
          </Button>
          <Button variant="success" as={Link} to={"/profile"}>
            Add to Featured
          </Button>
          <ReviewForm product={book.productType} />
        </Col>
      </Row>
    </div>
  );
};

export default SingleBook;
