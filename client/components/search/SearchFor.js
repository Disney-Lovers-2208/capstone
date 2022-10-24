import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button, Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import { AnimatePresence, motion } from "framer-motion";

export const SearchFor = () => {
  const { title } = useParams();
  // const { firstName } = useParams();
  // console.log('first name:', firstName);

  const titleFilter = (item) =>
    item.title.toLowerCase().includes(title.toLowerCase());
  const nameFilter = (user) =>
    user.firstName.toLowerCase().includes(title.toLowerCase());

  const tvshows = useSelector((state) => state.tvs).filter(titleFilter);
  const movies = useSelector((state) => state.movies).filter(titleFilter);
  const books = useSelector((state) => state.books).filter(titleFilter);
  const users = useSelector((state) => state.users).filter(nameFilter);
  const count = useSelector((state) => state.count);

  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  // toggle button
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  // carousel for search results
  const settings = {
    className: "center",
    infinite: users.length > 5,
    centerPadding: "80px",
    slidesToShow: 5,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          content: " url(../images/next.png)",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          content: " url(../images/back.png)",
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <div>
      {count ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="search-results">
          <Row className="searched-for">
            <Col lg={4} sm={12}>
              <h3 style={{ padding: "5rem" }}>You searched for: {title}</h3>
            </Col>
            <Col lg={4} sm={12}></Col>
            <Col lg={4} sm={12} style={{ textAlign: "right" }}>
              <Row className="add-button">
                <h3>Don't see your fave?</h3>
                <button className="add-button-button" as={Link} to={"/add"}>
                  Add it!
                </button>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="switch" data-ison={isOn} onClick={toggleSwitch}>
                <motion.div className="handle" layout transition={spring} />
              </div>
            </Col>
          </Row>

          {isOn ? (
            <div className="tvs people">
              <h3>People</h3>
              <Row>
                <Slider {...settings}>
                  {users.map((user) => {
                    return (
                      <Col className="search-for-user-card" key={user.id}>
                        <Link to={`/users/${user.id}`}>
                          <img src={user.image} alt="user-image" />
                          <Card.Title style={{ paddingTop: "1rem" }}>
                            <h2>
                              {user.firstName} {user.lastName}
                            </h2>
                          </Card.Title>
                          <Card.Title style={{ paddingTop: "1rem" }}>
                            {user.username}
                          </Card.Title>
                          <button style={{ marginTop: "1rem" }}>
                            Add Friend
                          </button>
                        </Link>
                      </Col>
                    );
                  })}
                </Slider>
              </Row>
            </div>
          ) : (
            <div>
              <div className="tvs">
                <h3>Shows</h3>
                <Row>
                  <Slider {...settings}>
                    {tvshows.map((tvshow) => {
                      return (
                        <Col key={tvshow.id} style={{ margin: "2rem" }}>
                          <Link to={`/tvshows/${tvshow.id}`}>
                            <Card.Img
                              className="card-img"
                              variant="top"
                              src={tvshow.imageUrl}
                              alt="tv-image"
                              style={{ height: "340px" }}
                            />
                          </Link>
                        </Col>
                      );
                    })}
                  </Slider>
                </Row>
              </div>

              <br />

              <div className="movies">
                <h3>Movies</h3>
                <Row>
                  <Slider {...settings}>
                    {movies.map((movie) => {
                      return (
                        <Col key={movie.id} style={{ margin: "2rem" }}>
                          <Link to={`/movies/${movie.id}`}>
                            <Card.Img
                              className="card-img"
                              variant="top"
                              src={movie.imageUrl}
                              alt="movie-image"
                              style={{ height: "340px" }}
                            />
                          </Link>
                        </Col>
                      );
                    })}
                  </Slider>
                </Row>
              </div>

              <br />

              <div className="books">
                <h3>Books</h3>
                <Row>
                  <Slider {...settings}>
                    {books.map((book) => {
                      return (
                        <Col key={book.id} style={{ margin: "2rem" }}>
                          <Link to={`/books/${book.id}`}>
                            <Card.Img
                              className="card-img"
                              variant="top"
                              src={book.imageUrl}
                              alt="book-image"
                              style={{ height: "340px" }}
                            />
                          </Link>
                        </Col>
                      );
                    })}
                  </Slider>
                </Row>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchFor;
