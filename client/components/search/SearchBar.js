import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Col, Row, Button } from "react-bootstrap";
import { GoSearch } from "react-icons/go";
import AllProductsTabs from "./AllProductsTabs";
import { fetchTvShows } from "../../store/tvshows";
import { fetchMovies } from "../../store/movies";
import { fetchBooks } from "../../store/books";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleKeyDown = evt => {
    if(evt.key === 13) {
      console.log('Pressed enter');
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', evt => {
      if(evt.key === 'Enter') {
        console.log('You pressed enter');
        handleKeyDown(evt)
      }
    })
  })

  useEffect(() => {
    dispatch(fetchTvShows());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);


  return (
    <Container className='search-bar'>
      <Row>
        <Col>
          <input
            type="search"
            placeholder="Search for..."
            onChange={(evt) => setSearch(evt.target.value)}
            value={search}
            style={{ padding: '5px' }}
          />
          <Button onKeyDown={handleKeyDown} as={Link} to={`/searchfor/${search}`} style={{ padding: '6px', borderRadius: '10px' }}>
            <GoSearch />
          </Button>
        </Col>
        <AllProductsTabs />
      </Row>
    </Container>
  );
};

export default SearchBar;
