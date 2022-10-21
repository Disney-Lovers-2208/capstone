import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import Pagination from "./Pagination";
import Genres from "./Genres";
import MovieCard from "../productCards/MovieCard";

export const AllMovies = () => {
  const movies = useSelector((state) => state.movies);

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(20);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  //change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container fluid className="all-movies">
      <Row>
        <Col className="all-movies">
          <Row>{/* <Genres movies={movies} /> */}</Row>
          <Row>
            <Pagination
              itemsPerPage={moviesPerPage}
              totalItems={movies.length}
              paginate={paginate}
            />
          </Row>
          <Row>
            <MovieCard movies={currentMovies} />
          </Row>
          <Row>
            <Pagination
              itemsPerPage={moviesPerPage}
              totalItems={movies.length}
              paginate={paginate}
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AllMovies;
