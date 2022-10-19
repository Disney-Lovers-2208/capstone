import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { Button, Col, Card, Row } from "react-bootstrap";
import { fetchSingleMovie } from "../../store/movie";
import { Rating } from "react-simple-star-rating";
import { fetchUserMovie, fetchUpdateUserMovie } from "../../store/userMovie";
import { fetchCreateUserMovie } from "../../store/userMovies";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import ReviewForm from "./ReviewForm";
import SelectDropDown from "./SelectDropDown";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

const SingleMovie = () => {
  const auth = useSelector((state) => state.auth);
  const movie = useSelector((state) => state.movie);
  const { imageUrl, title, description, genre, starRating } = movie;
  const userMovie = useSelector((state) => state.userMovie);
  const posts = movie.posts || [];
  const dispatch = useDispatch();
  const { id } = useParams();

  let favorite = userMovie ? userMovie.favorite : null;
  let featured = userMovie ? userMovie.featured : null;
  let status = userMovie ? userMovie.status : null;

  useEffect(() => {
    dispatch(fetchUserMovie({ userId: auth.id, movieId: id }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchSingleMovie(id));
  }, [dispatch]);

  //update status movie
  const selectOptions = ["Status", "Saved", "Watched"];
  const [selected, setSelected] = useState(selectOptions[0]);

  //update featured movies
  const handleFeaturedClick = (evt) => {
    evt.preventDefault();
    if (userMovie) {
      featured === true ? (featured = false) : (featured = true);
      dispatch(
        fetchUpdateUserMovie({ userId: auth.id, movieId: id, featured })
      );
    } else {
      featured = true;
      dispatch(
        fetchCreateUserMovie({ userId: auth.id, movieId: id, featured })
      );
    }
    window.location.reload(false);
  };

  //update favorite Movie
  const favoriteMovie = auth.movies.filter(
    (movie) => movie.user_movie.favorite === true
  )[0];

  const handleFavoriteClick = (evt) => {
    evt.preventDefault();
    if (userMovie) {
      if (favorite) {
        favorite = false;
        dispatch(
          fetchUpdateUserMovie({ userId: auth.id, movieId: id, favorite })
        );
      } else {
        let text = `You already have a movie!\nBy clicking OK you will change your favorite movie to ${title} permanently`;
        if (favoriteMovie) {
          console.log(favoriteMovie);
          if (confirm(text) == true) {
            text = "You pressed OK!";
            favorite = false;
            dispatch(
              fetchUpdateUserMovie({
                userId: auth.id,
                movieId: favoriteMovie.id,
                favorite,
              })
            );
            favorite = true;
            dispatch(
              fetchUpdateUserMovie({ userId: auth.id, movieId: id, favorite })
            );
          } else {
            text = "You canceled!";
          }
        } else {
          favorite = true;
          dispatch(
            fetchUpdateUserMovie({ userId: auth.id, movieId: id, favorite })
          );
        }
      }
    } else {
      if (favorite) {
        favorite = false;
        dispatch(
          fetchUpdateUserMovie({ userId: auth.id, movieId: id, favorite })
        );
      } else {
        let text = `You already have a movie!\nBy clicking OK you will change your favorite movie to ${title} permanently`;
        if (favoriteMovie) {
          if (confirm(text) == true) {
            text = "You pressed OK!";
            favorite = false;
            dispatch(
              fetchUpdateUserTv({
                userId: auth.id,
                movieId: favoriteMovie.id,
                favorite,
              })
            );
            favorite = true;
            dispatch(
              fetchCreateUserMovie({ userId: auth.id, movieId: id, favorite })
            );
          } else {
            text = "You canceled!";
          }
        } else {
          favorite = true;
          dispatch(
            fetchCreateUserMovie({ userId: auth.id, movieId: id, favorite })
          );
        }
      }
    }
    window.location.reload(false);
  };

  return (
    <div className="single-view">
      <div>
        <h2>{title}</h2>
        <img src={imageUrl} alt="book-image" style={{ width: "15rem" }} />
        <p>Summary: {description}</p>
        <p>Genre: {genre}</p>
        <p>
          {" "}
          <Rating
            readonly={true}
            initialValue={starRating}
            allowFraction={true}
            fillColor="#f1a545"
          />
        </p>
      </div>

      <br />

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
          <Button variant="dark" onClick={handleFavoriteClick}>
            {favorite === true ? (
              <> Remove as Favorite </>
            ) : (
              <>
                <FaHeart />
                Make Favorite
              </>
            )}
          </Button>
          <SelectDropDown
            status={status}
            selectOptions={selectOptions}
            selected={selected}
            auth={auth}
            id={id}
          />
          <Button variant="success" onClick={handleFeaturedClick}>
            {featured === true ? (
              <>Remove from Featured </>
            ) : (
              <> Add to Featured </>
            )}
          </Button>

          <ReviewForm product={movie.productType} />
        </Col>
      </Row>
    </div>
  );
};

export default SingleMovie;
