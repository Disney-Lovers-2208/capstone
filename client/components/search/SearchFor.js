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
      <p>You searched for { title }</p>
      <p>Don't see your fave?</p>
      <Button variant="info" as={Link} to={"/add"} style={{ align: "center" }}>
        Add Your Fave!
      </Button>

      <h2>TV Shows</h2>
      <Row xs={3} md={3}>
        {tvshows.map(tvshow => {
          return (
            <Card key={tvshow.id} style={{ width: "15rem" , margin: "2rem" }}>
              <Col>
                <Link to={`/tvshows/${tvshow.id}`}>
                  <Card.Img className="card-img" variant="top" src={tvshow.imageUrl} />
                </Link>
              </Col>
            </Card>
          )
        })}
      </Row>

      <br />

      <h2>Movies</h2>
      <Row xs={3} md={3}>
        {movies.map(movie => {
          return (
            <Card key={movie.id} style={{ width: "15rem" , margin: "2rem" }}>
              <Col>
                <Link to={`/movies/${movie.id}`}>
                  <Card.Img className="card-img" variant="top" src={movie.imageUrl} />
                </Link>
              </Col>
            </Card>
          )
        })}
      </Row>

      <br />

      <h2>Books</h2>
      <Row xs={3} md={3}>
        {books.map(book => {
          return (
            <Card key={book.id} style={{ width: "15rem" , margin: "2rem" }}>
              <Col>
                <Link to={`/books/${book.id}`}>
                  <Card.Img className="card-img" variant="top" src={book.imageUrl} />
                </Link>
              </Col>
            </Card>
          )
        })}
      </Row>
    </div>
  );
};

export default SearchFor;
