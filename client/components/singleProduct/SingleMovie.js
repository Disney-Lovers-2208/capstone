import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Card, Row, Col } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import RatedStars from "../activityLog/RatedStars";
import { fetchSingleMovie } from "../../store/movie";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import ReviewForm from "./ReviewForm";
import { fetchMovieRating } from "../../store/starRating";

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

const SingleMovie = () => {
  const movie = useSelector((state) => state.movie);
  const movieRating = useSelector((state) => state.rating);
  const { imageUrl, title, description, genre } = movie;
  const rating = movieRating;
  const posts = movie.posts || [];
  const dispatch = useDispatch();
  const { id } = useParams();
  // const [toggle, handleToggle] = useState(false);

  useEffect(() => {
    dispatch(fetchSingleMovie(id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMovieRating(id));
  }, [dispatch]);

  return (
    <div className="single-view">
      <div>
        <h2>{title}</h2>
        <img src={imageUrl} alt="movie-image" style={{ width: "15rem" }} />
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Where to watch:</p>
        <p>Rating: <RatedStars rating={rating} allowFraction={true} /></p>
      </div>

      <div className="reviews">
        <p>Reviews:</p>
        <Card
          border="info"
          style={{ width: "15rem", backgroundColor: "#FF5454" }}
        >
          {posts.map((post) => (
            <Row key={post.movieId}>
              <p>{post.content}</p>
              <p>{timeAgo.format(new Date(post.updatedAt))}</p>
            </Row>
          ))}
        </Card>
      </div>

      <br />

      <Row xs={3}>
        <Col>
          <Button variant="dark" as={Link} to={"/profile"}>
            <FaHeart />
            Add to Favorite
          </Button>
          <Button variant="success" as={Link} to={"/profile/saved"}>
            Add to Saved
          </Button>
          <Button variant="success" as={Link} to={"/profile"}>
            Add to Featured
          </Button>
          <ReviewForm product={movie.productType} />
        </Col>
      </Row>
    </div>
  );
};

export default SingleMovie;
