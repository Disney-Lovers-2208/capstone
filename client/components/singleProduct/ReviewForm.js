import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Stars from "../Stars";

export function ReviewForm(props) {
  return (
    <Container>
      <h1>Leave a Review!</h1>
      <hr />
      <Row>
        <form className="review-form">
          <Stars />
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
