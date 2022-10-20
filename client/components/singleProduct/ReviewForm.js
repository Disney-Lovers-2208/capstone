import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createReview } from "../../store/reviews";
import { Rating } from "react-simple-star-rating";
import { fetchSingleBook } from "../../store/book";
import { fetchSingleMovie } from "../../store/movie";
import { fetchSingleTv } from "../../store/tv";

export function ReviewForm(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const authId = useSelector((state) => state.auth.id);
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const [toggle, handleToggle] = useState(false);

  const handleRating = (rating) => {
    setRating(rating);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (props.product === "tvshow") {
      dispatch(
        createReview({ rating, content, userId: authId, tvId: id }, "tv", id)
      );
      dispatch(fetchSingleTv(id));
    } else if (props.product === "movie") {
      dispatch(
        createReview(
          { rating, content, userId: authId, movieId: id },
          "movie",
          id
        )
      );
      dispatch(fetchSingleMovie(id));
    } else if (props.product === "book") {
      dispatch(
        createReview(
          { rating, content, userId: authId, bookId: id },
          "book",
          id
        )
      );
      dispatch(fetchSingleBook(id));
    }
    handleToggle(false);
  };

  return (
    <div>
      {toggle ? (
        <Container>
          <h1>Leave a Review!</h1>
          <hr />
          <Row>
            <form className="review-form" onSubmit={handleSubmit}>
              <Rating
                tooltipArray={[
                  "1 stars",
                  "2 stars",
                  "3 stars",
                  "4 stars",
                  "5 stars",
                ]}
                transition
                showTooltip
                onClick={handleRating}
                ratingValue={rating}
              />
              <div>
                <label htmlFor="comments">Comments</label>
                <textarea
                  value={content || ""}
                  onChange={(e) => setContent(e.target.value)}
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Row>
        </Container>
      ) : (
        <Button
          style={{
            borderRadius: "0px",
            backgroundColor: "#48CAE4",
            color: "white",
            fontWeight: "800",
          }}
          variant="info"
          onClick={() => {
            toggle ? handleToggle(false) : handleToggle(true);
          }}
        >
          Write A Review
        </Button>
      )}
    </div>
  );
}

export default ReviewForm;
