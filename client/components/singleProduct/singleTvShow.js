import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import { fetchSingleTv } from "../../store/tv";
import { Link } from "react-router-dom";

const SingleTvShow = () => {
  const tvshow = useSelector((state) => state.tv);
  const { imageUrl, title, description, genre } = tvshow;
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleTv(id));
  }, [dispatch]);

  return (
    <div className="single-view">
      {/* <Form>
        <Form.Group className="mb-3" style={{ width: "10rem" }}>
          <Form.Label>Write A Review</Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>
      </Form> */}

      <div>
        <h2>{title}</h2>
        <img src={imageUrl} alt="tvshow-image" style={{ width: "15rem" }} />
        <p>{description}</p>
        <p>{genre}</p>
      </div>
    </div>
  );
};

export default SingleTvShow;
