import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { Button, Col, Card, Row } from "react-bootstrap";
import { fetchSingleBook } from "../../store/book";
import { fetchUserBook, fetchUpdateUserBook } from "../../store/userBook";
import { fetchCreateUserBook } from "../../store/userBooks";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import ReviewForm from "./ReviewForm";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

const SingleBook = () => {
  const auth = useSelector((state) => state.auth);
  const book = useSelector((state) => state.book);
  const { imageUrl, title, description, genre } = book;
  const userBook = useSelector((state) => state.userBook);
  const posts = book.posts || [];
  const starRatings = book.starRatings || [];
  const dispatch = useDispatch();
  const { id } = useParams();
  const [toggle, handleToggle] = useState(false);

  let favorite = null;
  let featured = null;
  let status = null;

  useEffect(() => {
    dispatch(fetchUserBook({ userId: auth.id, bookId: id }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSingleBook(id));
  }, [dispatch]);

  const favoriteBook = auth.books.filter(
    (book) => book.user_book.favorite === true
  )[0];

  if (userBook) {
    favorite = userBook.favorite;
    featured = userBook.featured;
    status = userBook.status;
  }

  //update featured books
  const handleFeaturedClick = (evt) => {
    evt.preventDefault();
    if (userBook) {
      featured === true ? (featured = false) : (featured = true);
      dispatch(fetchUpdateUserBook({ userId: auth.id, bookId: id, featured }));
    } else {
      featured = true;
      dispatch(fetchCreateUserBook({ userId: auth.id, bookId: id, featured }));
    }
    window.location.reload(false);
  };

  //update favorite book
  const handleFavoriteClick = (evt) => {
    evt.preventDefault();
    if (favorite) {
      favorite = false;
      dispatch(fetchUpdateUserBook({ userId: auth.id, bookId: id, favorite }));
    } else {
      let text = `You already have a book!\nBy clicking OK you will change your favorite book to ${title} permanently`;
      if (favoriteBook) {
        console.log(favoriteBook);
        if (confirm(text) == true) {
          text = "You pressed OK!";
          favorite = false;
          dispatch(
            fetchUpdateUserBook({
              userId: auth.id,
              bookId: favoriteBook.id,
              favorite,
            })
          );
          favorite = true;
          dispatch(
            fetchUpdateUserBook({ userId: auth.id, bookId: id, favorite })
          );
        } else {
          text = "You canceled!";
        }
      } else {
        favorite = true;
        dispatch(
          fetchUpdateUserBook({ userId: auth.id, bookId: id, favorite })
        );
      }
    }
    window.location.reload(false);
  };

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
          {/* Favorite Book */}
          {favorite === true ? (
            <Button variant="dark" onClick={handleFavoriteClick}>
              Remove as Favorite
            </Button>
          ) : (
            <Button variant="dark" onClick={handleFavoriteClick}>
              <FaHeart />
              Make Favorite
            </Button>
          )}
          {/* Save / read drop down  */}
          <select>
            <option value="book">Saved</option>
            <option value="movie">Read</option>
          </select>
          {/* Add to featured */}
          {featured === true ? (
            <Button variant="success" onClick={handleFeaturedClick}>
              Remove from Featured
            </Button>
          ) : (
            <Button variant="success" onClick={handleFeaturedClick}>
              Add to Featured
            </Button>
          )}
          {toggle ? (
            <ReviewForm product={book.productType} />
          ) : (
            <Button
              variant="info"
              onClick={() => {
                toggle ? handleToggle(false) : handleToggle(true);
              }}
            >
              Write A Review
            </Button>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default SingleBook;
