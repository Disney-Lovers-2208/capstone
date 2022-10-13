import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Col, Card, Row } from "react-bootstrap";
import { fetchSingleBook } from "../../store/book";
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo('en-US');

const SingleBook = () => {
  const book = useSelector((state) => state.book);
  const { imageUrl, title, description, genre } = book;
  const posts = book.posts || [];
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

        <button>Heart</button>
      </div>

      <br />

      <div className="reviews">
        <p>Reviews:</p>
        <Card 
          border="info" 
          style={{ width: "15rem", backgroundColor: "#DDFF55" }}>
        {posts.map((post) => (
          <Row key={post.bookId}>
            <p>{post.content}</p>
            <p>{timeAgo.format(new Date(post.updatedAt))}</p>
          </Row>
        ))}
        </Card>
      </div>

      <br />

      <Button variant='info' as={Link} to={`/posts/books/${id}`}>Write A Review</Button>
    </div>
  );
};

export default SingleBook;
