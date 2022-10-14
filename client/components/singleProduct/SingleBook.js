import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { Button, Col, Card, Row } from "react-bootstrap";
import { fetchSingleBook } from "../../store/book";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");
import { Link } from "react-router-dom";

const SingleBook = () => {
  const book = useSelector((state) => state.book);
  const { imageUrl, title, description, genre } = book;
  const posts = book.posts || [];
  const starRatings = book.starRatings || [];
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleBook(id));
  }, [dispatch]);

  return (
    <div className="single-view">
      <div>
        <h2>{title}</h2>
        <img src={imageUrl} alt="book-image" style={{ width: "15rem" }} />
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
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
          <Button variant="info" as={Link} to={`/review/book/${id}`}>
            Write A Review
          </Button>
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
        </Col>
      </Row>
    </div>
  );
};

export default SingleBook;
