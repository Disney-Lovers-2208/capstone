import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Card, Row, Col } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { fetchSingleTv } from "../../store/tv";
import { fetchTvRating } from "../../store/starRating";
import RatedStars from "../activityLog/RatedStars";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import ReviewForm from "./ReviewForm";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

const SingleTvShow = () => {
  const tvshow = useSelector((state) => state.tv);
  // const tvRating = useSelector((state) => state.tvId);
  const { imageUrl, title, description, genre } = tvshow;
  const posts = tvshow.posts || [];
  const dispatch = useDispatch();
  const { id } = useParams();
  const [toggle, handleToggle] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);


  useEffect(() => {
    dispatch(fetchSingleTv(id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTvRating(id));
  }, [dispatch]);

  return (
    <div className="single-view">
      <div>
        <h2>{title}</h2>
        <img src={imageUrl} alt="tvshow-image" style={{ width: "15rem" }} />
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Where to watch:</p>
        <p>Rating: <RatedStars ratingValue={rating} /></p>
      </div>

      <div className="reviews">
        <p>Reviews:</p>
        <Card
          border="info"
          style={{ width: "15rem", backgroundColor: "#FF5454" }}
        >
          {posts.map((post) => (
            <Row key={post.id}>
              <p>{post.content}</p>
              <p>{timeAgo.format(new Date(post.updatedAt))}</p>
            </Row>
          ))}
        </Card>
      </div>

      <div className='rating'>
        <Card border='info' style={{ width: "15rem", backgroundColor: "#DDFF55" }}>
          <RatedStars />
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
          {toggle ? (
            <ReviewForm product={tvshow.productType} />
          ) : (
            <Button
              variant="info"
              onClick={() => {
                toggle ? handleToggle(false) : handleToggle(true);
              }}
            >
              Write A Review
            </Button>
          )}
        </Col>
      </Row>
    </div>

  );
};

export default SingleTvShow;
