import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Card, Row, Col } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { fetchSingleTv } from "../../store/tv";
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo('en-US');


const SingleTvShow = () => {
  const tvshow = useSelector((state) => state.tv);
  const { imageUrl, title, description, genre } = tvshow;
  const posts = tvshow.posts || [];
  const starRatings = tvshow.starRatings || [];
  const dispatch = useDispatch();
  const { id } = useParams();

  let averageRating = starRatings.reduce((accum, current) => {
    return accum += current.rating;
  }, 0) / 5;
  
  // console.log(averageRating);
  averageRating = averageRating.toFixed();

  useEffect(() => {
    dispatch(fetchSingleTv(id));
  }, [dispatch]);


  return (
    <div className="single-view">
      <div>
        <h2>{title}</h2>
        <img src={imageUrl} alt="tvshow-image" style={{ width: "15rem" }} />
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Where to watch:</p>
      </div>

      <div className="reviews">
        <p>Reviews:</p>
        <Card 
          border="info" 
          style={{ width: "15rem", backgroundColor: "#FF5454" }}>
        {posts.map((post) => (
          <Row key={post.tvId}>
            <p>{post.content}</p>
            <p>{timeAgo.format(new Date(post.updatedAt))}</p>
          </Row>
        ))}
        </Card>
      </div>

      <br />

      {/* will show the rating twice */}
      {/* <div className="rating">
        <p>Rating:</p>
      <Card 
        border="info" 
        style={{ width: "15rem", backgroundColor: "#DDFF55" }}>
      {starRatings.map((rating) => (
        <Row key={rating.id}>
          <p>{averageRating}</p>

        </Row>
      ))}
      </Card>
    </div> */}

    {/* this seems to work, but it's a sus way of getting this. 
    It technically works because it's already coming in as an array,
    but not sure if this would be correct/or best way to do this (convert to stars) */}
    <div className="rating">
      <p>Rating:</p>
      <Card border="info" 
        style={{ width: "15rem", backgroundColor: "#DDFF55" }}>
          <p>{averageRating}</p>

      </Card>
    </div>

    {/* this causes an warning error and will say that it's NaN */}
    {/* <div className="rating">
      <p>Rating:</p>
      <Card border="info" 
        style={{ width: "15rem", backgroundColor: "#DDFF55" }}>
      {starRatings.reduce((accum, current) => {
        return accum += current.rating;
      }, 0) / starRatings.length}
      </Card>
    </div> */}

      <br />

      <Row xs={3}>
        <Col>
          <Button variant='info' as={Link} to={`/review/tv/${id}`}>Write A Review</Button>
          <Button variant='dark' as={Link} to={'/profile'}><FaHeart />Add to Favorite</Button>
          <Button variant='success' as={Link} to={'/profile/saved'}>Add to Saved</Button>
          <Button variant='success' as={Link} to={'/profile'}>Add to Featured</Button>
        </Col>
      </Row>
    </div>

  );
};

export default SingleTvShow;
