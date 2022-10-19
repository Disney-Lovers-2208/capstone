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
    <div className="search-results">
      <div className="add-button">
        <p>Don't see your fave?</p>
        <Button as={Link} to={"/add"}>
          Add Your Fave!
        </Button>

        <p>You searched for: { title }</p>

      </div>

      <br />

      <div className='tvs'>
        <h2>TV Shows</h2>
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
        <h2>Movies</h2>
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
        <h2>Books</h2>
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

    </div>
  );
};

export default SearchFor;
