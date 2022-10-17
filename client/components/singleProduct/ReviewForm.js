import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RatingStars from "./RatingStars";
import { createPost } from "../../store/posts";

export function ReviewForm(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const authId = useSelector((state) => state.auth.id);
  const { id } = useParams();
  const [starRating, setStarRating] = useState(0);
  const [content, setContent] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("in handle submit");
    dispatch(createPost({ content, authId, bookId: id }));
    // if (props.product === "tvshow") {
    //   dispatch(createPost({ content, authId, tvId: id }));
    // } else if (props.product === "movie") {
    //   dispatch(createPost({ content, authId, movieId: id }));
    // } else if (props.product === "book") {
    //   dispatch(createPost({ content, authId, bookId: id }));
    // }
  };

  return (
    <Container>
      <h1>Leave a Review!</h1>
      <hr />
      <Row>
        <form className="review-form" onSubmit={handleSubmit}>
          <RatingStars />
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
  );
}

export default ReviewForm;
