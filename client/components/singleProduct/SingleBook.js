import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Col } from "react-bootstrap";
import { fetchSingleBook } from "../../store/book";

// import TimeAgo from 'javascript-time-ago';
// import en from 'javascript-time-ago/locale/en'

// TimeAgo.addDefaultLocale(en);
// const timeAgo = new TimeAgo('en-US')
// timeAgo.format(new Date());


const SingleBook = () => {
  const book = useSelector((state) => state.book);
  const { imageUrl, title, description, genre } = book;
  const posts = book.posts || [];
  // const { content, updatedAt, bookId } = posts;
  console.log('reviews:', book);
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

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
        <p>Current Reviews</p>
        {/* <p>{content}</p>
        <p>{updatedAt}</p> */}
        {posts.map((post) => (
          <Col key={post.bookId}>
            <p>{post.content}</p>
            <p>{timeAgo(post.updatedAt)}</p>
          </Col>
        ))}
      </div>
      <Button variant='info' as={Link} to={`/posts/books/${id}`}>Write A Review</Button>
    </div>
  );
};

export default SingleBook;
