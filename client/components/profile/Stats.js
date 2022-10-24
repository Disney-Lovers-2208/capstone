import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Stats = ({ user }) => {
  const books = user?.books || [];
  const tvs = user?.tvs || [];
  const movies = user?.movies || [];

  const readBooks = books.filter((book) => book.user_book.status === "Read");

  const watchedMovies = movies.filter(
    (movie) => movie.user_movie.status === "Watched"
  );
  const watchedTvs = tvs.filter((tv) => tv.user_tv.status === "Watched");

  return (
    <div>
      <Row className="stats-row">
        <Col lg={6} sm={12}>
          <Row>
            <Col className="stats">
              <Row className="stats-inner-row">
                <Col lg={4} className="stats-image-icon d-none d-lg-block">
                  <img src="https://www.salinasuhsd.org/cms/lib/CA02208720/Centricity/Domain/194/Book-512.png" />
                </Col>
                <Col lg={8}>
                  <h2>{readBooks.length}</h2>
                  <p> Books Read</p>
                </Col>
              </Row>
            </Col>
            <Col className="stats">
              <Row className="stats-inner-row">
                <Col lg={4} className="stats-image-icon d-none d-lg-block">
                  <img src="https://cdn-icons-png.flaticon.com/512/83/83519.png" />
                </Col>
                <Col lg={8}>
                  <h2> {watchedMovies.length} </h2>
                  <p> Movies Watched</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col lg={6} sm={12}>
          <Row>
            <Col className="stats">
              <Row className="stats-inner-row">
                <Col lg={4} className="stats-image-icon d-none d-lg-block">
                  <img src="https://icons-for-free.com/download-icon-television+tv+icon-1320086462225673727_512.png" />
                </Col>
                <Col lg={8}>
                  <h2> {watchedTvs.length} </h2>
                  <p> TV Shows Watched</p>
                </Col>
              </Row>
            </Col>
            <Col className="stats">
              {/* <Link to="/profile/friends"> */}
              <Row className="stats-inner-row">
                <Col lg={4} className="stats-image-icon d-none d-lg-block">
                  <img src="https://static.thenounproject.com/png/655193-200.png" />
                </Col>
                <Col lg={8}>
                  <h2> {user.friend.length} </h2>
                  <p>Friends</p>
                </Col>
              </Row>
              {/* </Link> */}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Stats;
