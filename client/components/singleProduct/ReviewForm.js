import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RatingStars from "./RatingStars";

export function ReviewForm(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [starRating, setStarRating] = useState("");
  const [comments, setComments] = useState("");

  return (
    <Container>
      <h1>Leave a Review!</h1>
      <hr />
      <Row>
        <form className="review-form">
          <RatingStars />
          <div>
            <label htmlFor="comments">Comments</label>
            <textarea />
          </div>
        </form>
      </Row>
    </Container>
  );
}

export default ReviewForm;
