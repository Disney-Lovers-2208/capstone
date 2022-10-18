import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Card, Row, Col } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import { fetchSingleTv } from "../../store/tv";
import { Rating } from "react-simple-star-rating";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import ReviewForm from "./ReviewForm";


TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

const SingleTvShow = () => {
  const tvshow = useSelector((state) => state.tv);
  const { imageUrl, title, description, genre, starRating } = tvshow;
  const posts = tvshow.posts || [];
  const dispatch = useDispatch();
  const { id } = useParams();
  const [rating, setRating] = useState(0);

  useEffect(() => {
    dispatch(fetchSingleTv(id));
    console.log(starRating);
    setRating(starRating);
    console.log(starRating);
  }, [dispatch])
  
  return (
    <div className="single-view">
      <div>
        <h2>{title}</h2>
        <img src={imageUrl} alt="tvshow-image" style={{ width: "15rem" }} />
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>Rating: <Rating readonly={true} initialValue={rating} 
        allowFraction={true} fillColor="#f1a545"/></p>
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
          <ReviewForm product={tvshow.productType} />
        </Col>
      </Row>
    </div>

  );
};

export default SingleTvShow;
