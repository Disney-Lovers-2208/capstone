import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { fetchSingleTv } from "../../store/tv";

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
      <div>
        <h2>{title}</h2>
        <img src={imageUrl} alt="tvshow-image" style={{ width: "15rem" }} />
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
      </div>
      <Button variant='info' as={Link} to={`/posts/tvs/${id}`}>Write A Review</Button>
    </div>
  );
};

export default SingleTvShow;
