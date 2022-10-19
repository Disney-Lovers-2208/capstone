import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button, Row, Col, Card, ButtonGroup } from "react-bootstrap";
import Slider from "react-slick";


export const SearchFor = () => {
  const { title } = useParams();

  const titleFilter = item => item.title.toLowerCase().includes(title.toLowerCase());

  const tvshows = useSelector(state => state.tvs).filter(titleFilter);
  const movies = useSelector(state => state.movies).filter(titleFilter);
  const books = useSelector(state => state.books).filter(titleFilter);

  let settings = {
    dots: true,
    speed: 500,
    slidesToShow: 4,
  }

  return (
    <div className="search-results">
      <div className="searched-for">
        <h3>You searched for: { title }</h3>
      </div>

      <br />

      <div className='tvs'>
        <h3>TV Shows</h3>
          <Row>
            <Slider {...settings}>
                {tvshows.map(tvshow => {
                  return (
                      <Col key={tvshow.id} style={{ margin: '2rem' }}>
                        <Link to={`/tvshows/${tvshow.id}`}>
                          <Card.Img className="card-img" variant="top" src={tvshow.imageUrl} />
                        </Link>
                      </Col>
                  )
                })}
            </Slider>
          </Row>
      </div>

      <br />

      <div className='movies'>
        <h3>Movies</h3>
        <Row>
          <Slider {...settings}>
              {movies.map(movie => {
                return (
                    <Col key={movie.id} style={{ margin: '2rem' }}>
                      <Link to={`/movies/${movie.id}`}>
                        <Card.Img className="card-img" variant="top" src={movie.imageUrl} />
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
                        <Card.Img className="card-img" variant="top" src={book.imageUrl} />
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

    </div>
  );
};

export default SearchFor;
