import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Col, Row, Button, Nav } from "react-bootstrap";
import { GoSearch } from "react-icons/go";
import SearchTabs from "./SearchTabs";
import { fetchTvShows } from "../../store/tvshows";
import { fetchMovies } from "../../store/movies";
import { fetchBooks } from "../../store/books";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  // function helperFunc() {
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   setLoading(true);
  //   dispatch(fetchTvShows());
  //   dispatch(fetchMovies());
  //   dispatch(fetchBooks(helperFunc));
  // }, [dispatch]);

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <Container className="search-bar">
          <Row>
            <Col>
              <input
                type="search"
                placeholder="Search for..."
                onChange={(evt) => setSearch(evt.target.value)}
                value={search}
                style={{ padding: "5px" }}
              />
              <Button
                variant="light"
                as={Link}
                to={`/searchfor/${search}`}
                style={{ padding: "6px", borderRadius: "10px" }}
              >
                <GoSearch />
              </Button>
            </Col>
            <SearchTabs />
          </Row>
        </Container>
      )}
    </div>
  );
};

export default SearchBar;
