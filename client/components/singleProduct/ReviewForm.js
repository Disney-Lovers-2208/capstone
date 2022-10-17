import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../store/posts";
import { createStarRating } from "../../store/starRatings";
import { Rating } from "react-simple-star-rating";

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
      dispatch(createPost({ content, userId: authId, tvId: id }));
      dispatch(createStarRating({ rating, userId: authId, tvId: id }));
    } else if (props.product === "movie") {
      dispatch(createPost({ content, userId: authId, movieId: id }));
      dispatch(createStarRating({ rating, userId: authId, movieId: id }));
    } else if (props.product === "book") {
      dispatch(createPost({ content, userId: authId, bookId: id }));
      dispatch(createStarRating({ rating, userId: authId, bookId: id }));
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
          variant="info"
          onClick={() => {
            toggle ? handleToggle(false) : handleToggle(true);
            console.log("hit button in on click");
          }}
        >
          Write A Review
        </Button>
      )}
    </div>
  );
}

export default ReviewForm;
