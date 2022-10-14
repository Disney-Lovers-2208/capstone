import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import { fetchSingleMovie } from "../../store/movie";
import { Link } from "react-router-dom";

const SingleMovie = () => {
  const movie = useSelector((state) => state.movie);
  const { imageUrl, title, description, genre } = movie;
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleMovie(id));
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
        <img src={imageUrl} alt="movie-image" style={{ width: "15rem" }} />
        <p>{description}</p>
        <p>{genre}</p>
      </div>
      <Link to={"/reviewform"}>Write a review</Link>
    </div>
  );
};

export default SingleMovie;
