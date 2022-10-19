import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { Button, Col, Card, Row, Container } from "react-bootstrap";
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
        fetchUpdateUserMovie({
          userId: auth.id,
          movieId: id,
          featured,
          status: "Watched",
        })
      );
    } else {
      dispatch(
        fetchCreateUserMovie({
          userId: auth.id,
          movieId: id,
          featured: true,
          status: "Watched",
        })
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
        dispatch(
          fetchUpdateUserMovie({
            userId: auth.id,
            movieId: id,
            favorite: false,
            status: "Watched",
          })
        );
      } else {
        let text = `You already have a movie!\nBy clicking OK you will change your favorite movie to ${title} permanently`;
        if (favoriteMovie) {
          if (confirm(text) == true) {
            text = "You pressed OK!";
            dispatch(
              fetchUpdateUserMovie({
                userId: auth.id,
                movieId: favoriteMovie.id,
                favorite: false,
                status: "Watched",
              })
            );
            dispatch(
              fetchUpdateUserMovie({
                userId: auth.id,
                movieId: id,
                favorite: true,
                status: "Watched",
              })
            );
          } else {
            text = "You canceled!";
          }
        } else {
          dispatch(
            fetchUpdateUserMovie({
              userId: auth.id,
              movieId: id,
              favorite: true,
              status: "Watched",
            })
          );
        }
      }
    } else {
      if (favorite) {
        dispatch(
          fetchUpdateUserMovie({
            userId: auth.id,
            movieId: id,
            favorite: false,
            status: "Watched",
          })
        );
      } else {
        let text = `You already have a movie!\nBy clicking OK you will change your favorite movie to ${title} permanently`;
        if (favoriteMovie) {
          if (confirm(text) == true) {
            text = "You pressed OK!";
            dispatch(
              fetchUpdateUserMovie({
                userId: auth.id,
                movieId: favoriteMovie.id,
                favorite: false,
                status: "Watched",
              })
            );
            dispatch(
              fetchCreateUserMovie({
                userId: auth.id,
                movieId: id,
                favorite: true,
                status: "Watched",
              })
            );
          } else {
            text = "You canceled!";
          }
        } else {
          dispatch(
            fetchCreateUserMovie({
              userId: auth.id,
              movieId: id,
              favorite: true,
              status: "Watched",
            })
          );
        }
      }
    }
    window.location.reload(false);
  };

  return (
    <Container fluid className="single-view">
      <Row className="single-view-row">
        <Col className="single-product-left" lg={6} sm={12}>
          <img src={imageUrl} alt="movie-image" />
        </Col>
        <Col className="single-product-info-right" lg={6} sm={12}>
          <div className="info-container">
            <h1>{title}</h1>
            <Rating
              readonly={true}
              initialValue={starRating}
              allowFraction={true}
              fillColor="#f1a545"
            />
            (number of reviews) Reviews
            <p>{description}</p>
            <SelectDropDown
              status={status}
              selectOptions={selectOptions}
              selected={selected}
              auth={auth}
              id={id}
            />
            <Row className="single-product-button-row">
              <Button onClick={handleFavoriteClick}>
                {favorite === true ? (
                  <> Remove as Favorite </>
                ) : (
                  <>
                    <FaHeart /> Make Favorite
                  </>
                )}
              </Button>
              <Button onClick={handleFeaturedClick}>
                {featured === true ? (
                  <>Remove from Featured </>
                ) : (
                  <> Add to Featured </>
                )}
              </Button>
            </Row>
            <ReviewForm product={movie.productType} />
            <hr />
            <p style={{ textAlign: "left" }}>Reviews:</p>
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
        </Col>
      </Row>
    </Container>
  );
};

export default SingleMovie;
