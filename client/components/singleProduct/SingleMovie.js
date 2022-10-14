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
  const starRatings = movie.starRatings || [];
  const dispatch = useDispatch();
  const { id } = useParams();

  // let average = starRatings.reduce((accumulator, current) => {
  //   return accumulator + current.rating;
  // }, 0) / starRatings.length;
  
  // average = average.toFixed(1);

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
          style={{ width: "15rem", backgroundColor: "#FF5454" }}>
        {posts.map((post) => (
          <Row key={post.movieId}>
            <p>{post.content}</p>
            <p>{timeAgo.format(new Date(post.updatedAt))}</p>
          </Row>
        ))}
        </Card>
      </div>

      <br />

      {/* <div className="star-rating">
          <p>Star Rating:</p>
          <Card 
            border="info" 
            style={{ width: "15rem", backGroundColor: "#DDFF55" }}>
          {starRatings.map((starRating) => {
            <Row key={starRating.movieId}>
              <p>{average}</p>
            </Row>
          })}
          
          </Card>
      </div> */}

      <br />

      <Row xs={3}>
        <Col>
          <Button variant='info' as={Link} to={`/review/movie/${id}`}>Write A Review</Button>
          {/* <Button variant='secondary' as={Link} to={`/starRating/${id}`}>Add a Rating</Button> */}
          <Button variant='success' as={Link} to={'/profile'}>Add to Favorites</Button>
        </Col>
      </Row>
    </div>
  );
};

export default SingleMovie;
