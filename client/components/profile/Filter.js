import { useEffect } from "react";
import React from "react";

export const Filter = ({
  setActiveType,
  activeType,
  setFiltered,
  savedMovies,
  savedTvs,
  savedBooks,
  savedAll,
}) => {
  console.log("ActiveType", activeType);
  return (
    <div className="filter-container">
      <button
        className={activeType === "all" ? "active" : ""}
        onClick={() => {
          setActiveType("all");
          setFiltered(savedAll);
        }}
      >
        All
      </button>
      <button
        className={activeType === "movies" ? "active" : ""}
        onClick={() => {
          setActiveType("movies");
          setFiltered(savedMovies);
        }}
      >
        Movies
      </button>
      <button
        className={activeType === "shows" ? "active" : ""}
        onClick={() => {
          setActiveType("shows");
          setFiltered(savedTvs);
        }}
      >
        Shows
      </button>
      <button
        className={activeType === "books" ? "active" : ""}
        onClick={() => {
          setActiveType("books");
          setFiltered(savedBooks);
        }}
      >
        Books
      </button>
    </div>
  );
};
export default Filter;
