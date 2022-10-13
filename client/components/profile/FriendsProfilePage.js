import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "./Banner";
import SimpleSlider from "./SimpleSlider";
import { Link } from "react-router-dom";
import { fetchUser } from "../../store/user";

const FriendsProfilePage = () => {
  const { pathname } = useLocation();
  const userId = pathname.split("/").pop();
  let user = useSelector((state) => state.user);
  const tvs = user?.tvs || [];
  const books = user?.books || [];
  const movies = user?.movies || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch]);

  //favorites
  const favoriteBook = books.filter(
    (book) => book.user_book.favorite === true
  )[0];
  const favoriteMovie = movies.filter(
    (movie) => movie.user_movie.favorite === true
  )[0];
  const favoriteTv = tvs.filter((tv) => tv.user_tv.favorite === true)[0];

  //features
  const featuredTvs = tvs.filter((tv) => tv.user_tv.featured === true);
  const featuredMovies = movies.filter(
    (movie) => movie.user_movie.featured === true
  );
  const featuredBooks = books.filter(
    (book) => book.user_book.featured === true
  );

  return (
    <Container fluid className="profile">
      <Row>
        <Col>
          <Banner user={user} />
        </Col>
      </Row>
      <Row>
        <Col sm={4} className="featured">
          <h2>Favorite Book</h2>
          {favoriteBook ? (
            <Link to={`/books/${favoriteBook.id}`} style={{ color: "inherit" }}>
              <img src={favoriteBook.imageUrl} alt="image" />
            </Link>
          ) : (
            <div>
              <h4>No favorite Book</h4>
              <h4>Add a favorite </h4>
            </div>
          )}
        </Col>
        <Col sm={4} className="featured">
          <h2>Favorite Movie</h2>
          {favoriteMovie ? (
            <Link
              to={`/movies/${favoriteMovie.id}`}
              style={{ color: "inherit" }}
            >
              <img src={favoriteMovie.imageUrl} alt="image" />
            </Link>
          ) : (
            <div>
              <h4>No favorite Movie</h4>
              <h4>Add a favorite </h4>
            </div>
          )}
        </Col>
        <Col sm={4} className="featured">
          <h2>Favorite Show</h2>
          {favoriteTv ? (
            <Link to={`/tvshows/${favoriteTv.id}`} style={{ color: "inherit" }}>
              <img src={favoriteTv.imageUrl} alt="image" />
            </Link>
          ) : (
            <div>
              <h4>No favorite Show</h4>
              <h4>Add a favorite </h4>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default FriendsProfilePage;

{
  /* <Container fluid className="profile">
      <Row>
        <Col>
          <Banner user={user} />
        </Col>
      </Row>
      <Row>
        <Col sm={4} className="featured">
          <h2>Favorite Book</h2>
          {favoriteBook ? (
            <Link to={`/books/${favoriteBook.id}`} style={{ color: "inherit" }}>
              <img src={favoriteBook.imageUrl} alt="image" />
            </Link>
          ) : (
            <div>
              <h4>No favorite Book</h4>
              <h4>Add a favorite </h4>
            </div>
          )}
        </Col>
        <Col sm={4} className="featured">
          <h2>Favorite Movie</h2>
          {favoriteMovie ? (
            <Link
              to={`/movies/${favoriteMovie.id}`}
              style={{ color: "inherit" }}
            >
              <img src={favoriteMovie.imageUrl} alt="image" />
            </Link>
          ) : (
            <div>
              <h4>No favorite Movie</h4>
              <h4>Add a favorite </h4>
            </div>
          )}
        </Col>
        <Col sm={4} className="featured">
          <h2>Favorite Show</h2>
          {favoriteTv ? (
            <Link to={`/tvshows/${favoriteTv.id}`} style={{ color: "inherit" }}>
              <img src={favoriteTv.imageUrl} alt="image" />
            </Link>
          ) : (
            <div>
              <h4>No favorite Show</h4>
              <h4>Add a favorite </h4>
            </div>
          )}
        </Col>
      </Row>
    </Container> */
}
