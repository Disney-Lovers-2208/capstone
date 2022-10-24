import React from "react";
import { Nav } from "react-bootstrap";

export const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="item-page">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </Nav>
  );
};

export default Pagination;
