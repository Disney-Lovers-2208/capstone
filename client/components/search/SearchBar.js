import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Col, Row, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { fetchTvShows } from "../../store/tvshows";
import { fetchMovies } from "../../store/movies";
import { fetchBooks } from "../../store/books";
import { getAllUsers } from "../../store/users";
import SearchTabs from "./SearchTabs";

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleKeyDown = (evt) => {
    if (evt.key === 13) {
      console.log("Pressed enter");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", (evt) => {
      if (evt.key === "Enter") {
        console.log("You pressed enter");
        window.location.href = `/searchfor/${search}`;
        handleKeyDown(evt);
      }
    });
  });

  useEffect(() => {
    dispatch(fetchTvShows());
    dispatch(fetchMovies());
    dispatch(fetchBooks());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <>
      <Row>
        <Col style={{ display: "flex", flexDirection: "row" }}>
          <input
            type="search"
            placeholder="Search for..."
            onChange={(evt) => setSearch(evt.target.value)}
            value={search}
            className="search-bar"
            onKeyDown={handleKeyDown}
          />
          <Button
            type="submit"
            as={Link}
            to={`/searchfor/${search}`}
            style={{
              padding: "6px",
              borderRadius: "10px",
              backgroundColor: "transparent",
              border: "none",
              color: "#03045e",
            }}
          >
            <BsSearch size={30} />
          </Button>
        </Col>
      </Row>
      <SearchTabs />
    </>
  );
};

export default SearchBar;
