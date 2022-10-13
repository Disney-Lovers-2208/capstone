import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { fetchSingleMovie } from "../../store/movie";

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
      <div>
        <h2>{title}</h2>
        <img src={imageUrl} alt="movie-image" style={{ width: "15rem" }} />
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
      </div>
      <Button variant='info' as={Link} to={`/posts/movies/${id}`}>Write A Review</Button>
    </div>
  );
};

export default SingleMovie;
