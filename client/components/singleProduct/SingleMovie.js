import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Card, Row, Col } from "react-bootstrap";
import { fetchSingleMovie } from "../../store/movie";

import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

const SingleMovie = () => {
  const movie = useSelector((state) => state.movie);
  const { imageUrl, title, description, genre } = movie;
  const posts = movie.posts || [];
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

      <div className="reviews">
        <p>Reviews:</p>
        <Card 
          border="info" 
          style={{ width: "15rem", backgroundColor: "#DDFF55" }}>
        {posts.map((post) => (
          <Row key={post.movieId}>
            <p>{post.content}</p>
            <p>{timeAgo.format(new Date(post.updatedAt))}</p>
          </Row>
        ))}
        </Card>
      </div>

      <br />

      <Button variant='info' as={Link} to={`/posts/movies/${id}`}>Write A Review</Button>
    </div>
  );
};

export default SingleMovie;
