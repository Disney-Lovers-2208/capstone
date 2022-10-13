import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./profile/Pagination";

export const AllMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage] = useState(14);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("/api/movies");
      setMovies(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  //change page
  const paginate = (pageNumber) => {
    console.log("paginate!!!", pageNumber);
    setCurrentPage(pageNumber);
  };
  return (
    <Container fluid className="all-movies">
      <Pagination
        itemsPerPage={moviesPerPage}
        totalItems={movies.length}
        paginate={paginate}
      />
      <Row>
        <MovieCard movies={currentMovies} loading={loading} />
      </Row>
      <Pagination
        itemsPerPage={moviesPerPage}
        totalItems={movies.length}
        paginate={paginate}
      />
    </Container>
  );
};

export default AllMovies;
