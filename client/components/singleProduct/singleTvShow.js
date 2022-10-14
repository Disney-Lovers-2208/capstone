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
      </div>

      <div className="reviews">
        <p>Reviews:</p>
        <Card 
          border="info" 
          style={{ width: "15rem", backgroundColor: "#FF5454" }}>
        {posts.map((post) => (
          <Row key={post.id}>
            <p>{post.content}</p>
            <p>{timeAgo.format(new Date(post.updatedAt))}</p>
          </Row>
        ))}
        </Card>
      </div>

      <br />

      <div className="star-rating">
        <p>Star Rating:</p>
        <Card 
          border="info"
          style={{ width: "15rem", backgroundColor: "#DDFF55" }}>

        {starRatings.map((starRating) => (
          <Row key={starRating.id}>
          </Row>
        ))}
        </Card>
      </div>

      <br />
      <Row xs={3}>
        <Col>
          <Button variant='info' as={Link} to={`/review/tv/${id}`}>Write A Review</Button>
          <Button variant='dark' as={Link} to={'/profile'}><FaHeart />Add to Favorite</Button>
          <Button variant='success' as={Link} to={'/profile'}>Add to Favorites</Button>
          <Button variant='success' as={Link} to={'/profile/saved'}>Add to Saved</Button>
          <Button variant='success' as={Link} to={'/profile'}>Add to Featured</Button>
        </Col>
      </Row>
    </div>
  );
};

export default SingleTvShow;
