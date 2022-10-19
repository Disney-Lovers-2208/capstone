import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { Button, Col, Card, Row } from "react-bootstrap";
import { fetchSingleBook } from "../../store/book";
import { Rating } from "react-simple-star-rating";
import { fetchUserBook, fetchUpdateUserBook } from "../../store/userBook";
import { fetchCreateUserBook } from "../../store/userBooks";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import ReviewForm from "./ReviewForm";
import SelectDropDown from "./SelectDropDown";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

const SingleBook = () => {
  const auth = useSelector((state) => state.auth);
  const book = useSelector((state) => state.book);
  const { imageUrl, title, description, genre, starRating } = book;
  const userBook = useSelector((state) => state.userBook);
  const posts = book.posts || [];
  const dispatch = useDispatch();
  const { id } = useParams();

  let favorite = userBook ? userBook.favorite : null;
  let featured = userBook ? userBook.featured : null;
  let status = userBook ? userBook.status : null;

  useEffect(() => {
    dispatch(fetchUserBook({ userId: auth.id, bookId: id }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSingleBook(id));
  }, [dispatch]);

  //update status book
  const selectOptions = ["Status", "Saved", "Read"];
  const [selected, setSelected] = useState(selectOptions[0]);

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
  const favoriteBook = auth.books.filter(
    (book) => book.user_book.favorite === true
  )[0];

  const handleFavoriteClick = (evt) => {
    evt.preventDefault();
    if (userBook) {
      if (favorite) {
        favorite = false;
        dispatch(
          fetchUpdateUserBook({ userId: auth.id, bookId: id, favorite })
        );
      } else {
        let text = `You already have a book!\nBy clicking OK you will change your favorite book to ${title} permanently`;
        if (favoriteBook) {
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
    } else {
      if (favorite) {
        favorite = false;
        dispatch(
          fetchUpdateUserBook({ userId: auth.id, bookId: id, favorite })
        );
      } else {
        let text = `You already have a book!\nBy clicking OK you will change your favorite book to ${title} permanently`;
        if (favoriteBook) {
          if (confirm(text) == true) {
            text = "You pressed OK!";
            favorite = false;
            dispatch(
              fetchUpdateUserTv({
                userId: auth.id,
                bookId: favoriteBook.id,
                favorite,
              })
            );
            favorite = true;
            dispatch(
              fetchCreateUserBook({ userId: auth.id, bookId: id, favorite })
            );
          } else {
            text = "You canceled!";
          }
        } else {
          favorite = true;
          dispatch(
            fetchCreateUserBook({ userId: auth.id, bookId: id, favorite })
          );
        }
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
        <p>
          {" "}
          <Rating
            readonly={true}
            initialValue={starRating}
            allowFraction={true}
            fillColor="#f1a545"
          />
        </p>
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
          <Button variant="dark" onClick={handleFavoriteClick}>
            {favorite === true ? (
              <> Remove as Favorite </>
            ) : (
              <>
                <FaHeart />
                Make Favorite
              </>
            )}
          </Button>
          <SelectDropDown
            status={status}
            selectOptions={selectOptions}
            selected={selected}
            auth={auth}
            id={id}
          />
          <Button variant="success" onClick={handleFeaturedClick}>
            {featured === true ? (
              <>Remove from Featured </>
            ) : (
              <> Add to Featured </>
            )}
          </Button>

          <ReviewForm product={book.productType} />
        </Col>
      </Row>
    </div>
  );
};

export default SingleBook;
