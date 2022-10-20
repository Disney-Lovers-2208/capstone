import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { Button, Col, Card, Row, Container } from "react-bootstrap";
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
  const { imageUrl, title, description, starRating } = book;
  const userBook = useSelector((state) => state.userBook);
  const reviews = book.reviews || [];
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
      dispatch(
        fetchUpdateUserBook({
          userId: auth.id,
          bookId: id,
          featured,
          status: "Read",
        })
      );
    } else {
      dispatch(
        fetchCreateUserBook({
          userId: auth.id,
          bookId: id,
          featured: true,
          status: "Read",
        })
      );
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
        dispatch(
          fetchUpdateUserBook({
            userId: auth.id,
            bookId: id,
            favorite: false,
            status: "Read",
          })
        );
      } else {
        let text = `You already have a book!\nBy clicking OK you will change your favorite book to ${title} permanently`;
        if (favoriteBook) {
          if (confirm(text) == true) {
            text = "You pressed OK!";
            dispatch(
              fetchUpdateUserBook({
                userId: auth.id,
                bookId: favoriteBook.id,
                favorite: false,
                status: "Read",
              })
            );
            dispatch(
              fetchUpdateUserBook({
                userId: auth.id,
                bookId: id,
                favorite: true,
                status: "Read",
              })
            );
          } else {
            text = "You canceled!";
          }
        } else {
          dispatch(
            fetchUpdateUserBook({
              userId: auth.id,
              bookId: id,
              favorite: true,
              status: "Read",
            })
          );
        }
      }
    } else {
      if (favorite) {
        dispatch(
          fetchUpdateUserBook({
            userId: auth.id,
            bookId: id,
            favorite: false,
            status: "Read",
          })
        );
      } else {
        let text = `You already have a book!\nBy clicking OK you will change your favorite book to ${title} permanently`;
        if (favoriteBook) {
          if (confirm(text) == true) {
            text = "You pressed OK!";
            dispatch(
              fetchUpdateUserBook({
                userId: auth.id,
                bookId: favoriteBook.id,
                favorite: false,
              })
            );
            dispatch(
              fetchCreateUserBook({
                userId: auth.id,
                bookId: id,
                favorite: true,
                status: "Read",
              })
            );
          } else {
            text = "You canceled!";
          }
        } else {
          dispatch(
            fetchCreateUserBook({
              userId: auth.id,
              bookId: id,
              favorite: true,
              status: "Read",
            })
          );
        }
      }
    }
    window.location.reload(false);
  };

  return (
    <Container fluid className="single-view">
      <Row className="single-view-row">
        <Col className="single-product-left" lg={6} sm={12}>
          <img src={imageUrl} alt="book-image" />
        </Col>
        <Col className="single-product-info-right" lg={6} sm={12}>
          <div className="info-container">
            <h1>{title}</h1>
            <Rating
              readonly={true}
              initialValue={starRating}
              allowFraction={true}
              fillColor="#f1a545"
            />
            (number of reviews) Reviews
            <p>{description}</p>
            <SelectDropDown
              status={status}
              selectOptions={selectOptions}
              selected={selected}
              auth={auth}
              id={id}
            />
            <Row className="single-product-button-row">
              <Button onClick={handleFavoriteClick}>
                {favorite === true ? (
                  <> Remove as Favorite </>
                ) : (
                  <>
                    <FaHeart /> Make Favorite
                  </>
                )}
              </Button>
              <Button onClick={handleFeaturedClick}>
                {featured === true ? (
                  <>Remove from Featured </>
                ) : (
                  <> Add to Featured </>
                )}
              </Button>
            </Row>
            <ReviewForm product={book.productType} />
            <hr />
            <p style={{ textAlign: "left" }}>Reviews:</p>
            <Card
              border="info"
              style={{ width: "15rem", backgroundColor: "#FF5454" }}
            >
              {reviews.map((review) => (
                <Row key={review.id}>
                  <p>{review.content}</p>
                  <p>{timeAgo.format(new Date(review.updatedAt))}</p>
                </Row>
              ))}
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleBook;
