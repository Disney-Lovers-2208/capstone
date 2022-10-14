import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import Pagination from "./Pagination";
import TvCard from "../productCards/TvCard";

export const AllTvShows = () => {
  const tvshows = useSelector((state) => state.tvs);

  const [currentPage, setCurrentPage] = useState(1);
  const [showsPerPage] = useState(18);

  const indexOfLastTv = currentPage * showsPerPage;
  const indexOfFirstTv = indexOfLastTv - showsPerPage;
  const currentTvs = tvshows.slice(indexOfFirstTv, indexOfLastTv);

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
              itemsPerPage={showsPerPage}
              totalItems={tvshows.length}
              paginate={paginate}
            />
          </Row>
          <Row>
            <TvCard tvShow={currentTvs} />
          </Row>
          <Row>
            <Pagination
              itemsPerPage={showsPerPage}
              totalItems={tvshows.length}
              paginate={paginate}
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AllTvShows;
