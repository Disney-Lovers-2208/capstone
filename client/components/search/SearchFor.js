import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Button, Row, Col, Card } from "react-bootstrap";


export const SearchFor = () => {
  const { title } = useParams();

  const titleFilter = item => item.title.toLowerCase().includes(title.toLowerCase());

  const tvshows = useSelector(state => state.tvs).filter(titleFilter);
  const movies = useSelector(state => state.movies).filter(titleFilter);
  const books = useSelector(state => state.books).filter(titleFilter);


  return (
    <div className="search-results" style={{ backgroundColor: "#caf0f8" }}>
      <div className="searched-for">
        <h3>You searched for: { title }</h3>
      </div>

      <br />

      <div className='tvs'>
        <h3>TV Shows</h3>
        <Row xs={2} md={4}>
              {tvshows.map(tvshow => {
                return (
                    <Col key={tvshow.id} style={{ margin: '2rem' }}>
                      <Link to={`/tvshows/${tvshow.id}`}>
                        <Card.Img className="card-img" variant="top" src={tvshow.imageUrl} />
                      </Link>
                    </Col>
                )
              })}
        </Row>
      </div>

      <br />

      <div className='movies'>
        <h3>Movies</h3>
        <Row xs={2} md={4}>
              {movies.map(movie => {
                return (
                    <Col key={movie.id} style={{ margin: '2rem' }}>
                      <Link to={`/movies/${movie.id}`}>
                        <Card.Img className="card-img" variant="top" src={movie.imageUrl} />
                      </Link>
                    </Col>
                )
              })}
        </Row>
      </div>

      <br />

      <div className='books'>
        <h3>Books</h3>
        <Row xs={2} md={4}>
              {books.map(book => {
                return (
                    <Col key={book.id} style={{ margin: '2rem' }}>
                      <Link to={`/books/${book.id}`}>
                        <Card.Img className="card-img" variant="top" src={book.imageUrl} />
                      </Link>
                    </Col>
                )
              })}
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
