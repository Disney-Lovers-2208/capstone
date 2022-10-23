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
  let settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
  };

  return (
    <div className="search-results">
      <div className="searched-for">
        <h3>You searched for: {title}</h3>
      </div>

<<<<<<< HEAD
      <Row>
        <Col>
          <div className="switch" onClick={toggleSwitch}>
            <motion.div className="handle" layout transition={spring} />
          </div>
        </Col>
      </Row>

      {/* <Row style={{ marginTop: "2rem" }}>
        <motion.div layout className="toggle-results">
          {isOn ? (
            <Row>
              {users.map((user) => {
                 <Col key={user.id}>
                    <h2>People</h2>
                    <Link to={`/users/${user.id}`}>
                      <p>{user.firstName} {user.lastName}</p>
                      <img src={user.image} alt="user-image" />
                    </Link>
                 </Col>
              })}
            </Row>
          ) : null}
        </motion.div>
      </Row> */}

      {/* <Row style={{marginTop: "2rem" }}>
        <motion.div layout className="toggle-results">
          {filtered.map((item) => {
            return (
              <AnimatePresence key={user.id}>
                <motion.div 
                  layout 
                  animate={{ opacity: 1, scale: 1 }} 
                  initial={{ opacity: 0, scale: 0}} 
                  exit={{ opacity: 0, scale: 0 }}>
                  <h2>People</h2>
                  <Link to={`/users/${user.id}`}>
                    <img src={user.image} alt="user-image"/>
                  </Link>
                  {isOn ? (
                   <Row>
                    {users.map((user) => {
                       <Col key={user.id}>
                        <h2>People</h2>
                        <Link to={`/users/${user.id}`}>
                          <img src={user.image} alt="user-image" />
                        </Link>
                       </Col>
                    })}
                   </Row>
                  ) : null}
                </motion.div>
              </AnimatePresence>
            )
          })}
        </motion.div>
      </Row> */}

      {isOn ? (
        <div className="people">
          <h3>People</h3>
          <Row>
            <motion.div>
              <Slider {...settings}>
                {users.map((user) => {
                  return (
                    <AnimatePresence>
                      <Col key={user.id} style={{ margin: "2rem" }}>
                        <Link to={`/users/${user.id}`}>
                          <Card.Title>
                            {user.firstName} {user.lastName}
                          </Card.Title>
                          <Card.Img
                            className="card-img"
                            variant="top"
                            src={user.image}
                            alt="user-image"
                          />
                        </Link>
                      </Col>
                    </AnimatePresence>
                  );
                })}
              </Slider>
            </motion.div>
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
                        />
                      </Link>
                    </Col>
                  );
                })}
              </Slider>
            </Row>
=======
      <div>
        <Row>
          <Col>
            <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
              <motion.div className="handle" layout transition={spring}/>
            </div>
          </Col>
        </Row>
      </div>

      {isOn ? (
        <div className='people'>
          <h3>People</h3>
          <Row>
            <motion.div>
                    <Slider {...settings}>
                      {users.map(user => {
                        return (
                          <AnimatePresence>
                            <Col key={user.id} style={{ margin: '2rem'}}>
                              <Link to={`/users/${user.id}`}>
                                <Card.Title>{user.firstName} {user.lastName}</Card.Title>
                                <Card.Img className="card-img" variant="top" src={user.image} alt="user-image" />
                              </Link>
                            </Col>
                          </AnimatePresence>
                        )
                      })}
                    </Slider>
            </motion.div>
          </Row>
        </div>
      ) : null} 

      {!isOn ? (
        <Row> 
          <div className='tvs'>
            <h3>Shows</h3>
              <Row>
                <Slider {...settings}>
                    {tvshows.map(tvshow => {
                      return (
                          <Col key={tvshow.id} style={{ margin: '2rem' }}>
                            <Link to={`/tvshows/${tvshow.id}`}>
                              <Card.Img className="card-img" variant="top" src={tvshow.imageUrl} alt='tv-image'/>
                            </Link>
                          </Col>
                      )
                    })}
                </Slider>
              </Row>
>>>>>>> 9703b4c8a33330a196b3e28efa76285864b79b74
          </div>

          <br />

<<<<<<< HEAD
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

      {/* <div className='people'>
          <h3>People</h3>
          <Row>
            <motion.div>
            <Slider {...settings}>
              {users.map(user => {
                return (
                  <AnimatePresence>
                    <Col key={user.id} style={{ margin: '2rem'}}>
                      <Link to={`/users/${user.id}`}>
                        <Card.Title>{user.firstName} {user.lastName}</Card.Title>
                        <Card.Img className="card-img" variant="top" src={user.image} alt="user-image" />
                      </Link>
                    </Col>
                  </AnimatePresence>
                )
              })}
            </Slider>
            </motion.div>
          </Row>
      </div>  */}

      <div className="add-button">
        <h2>Don't see your fave?</h2>
        <Button as={Link} to={"/add"}>
          Add Your Fave!
        </Button>
      </div>
=======
          <div className='movies'>
            <h3>Movies</h3>
            <Row>
              <Slider {...settings}>
                  {movies.map(movie => {
                    return (
                        <Col key={movie.id} style={{ margin: '2rem' }}>
                          <Link to={`/movies/${movie.id}`}>
                            <Card.Img className="card-img" variant="top" src={movie.imageUrl} alt="movie-image" />
                          </Link>
                        </Col>
                    )
                  })}
                </Slider>
            </Row>
          </div>

          <br />

          <div className='books'>
            <h3>Books</h3>
            <Row>
              <Slider {...settings}>
                  {books.map(book => {
                    return (
                        <Col key={book.id} style={{ margin: '2rem' }}>
                          <Link to={`/books/${book.id}`}>
                            <Card.Img className="card-img" variant="top" src={book.imageUrl} alt="book-image" />
                          </Link>
                        </Col>
                    )
                  })}
              </Slider>
            </Row>
          </div>

          <div className="add-button">
            <h2>Don't see your fave?</h2>
            <Button as={Link} to={"/add"}>
              Add Your Fave!
            </Button>
          </div>
      </Row> 
      ) : null}  

>>>>>>> 9703b4c8a33330a196b3e28efa76285864b79b74
    </div>
  );
};

export default SearchFor;
