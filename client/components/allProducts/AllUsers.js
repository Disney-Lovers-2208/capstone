import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import { Pagination } from "./Pagination";
import UserCard from "../productCards/UserCard";

export const AllUsers = () => {
  const users = useSelector((state) => state.users);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container>
      <Row>
        <Col className="all-users">
          <Row>
            <Pagination 
              itemsPerPage={usersPerPage}
              totalItems={users.length}
              paginate={paginate}
            />
          </Row>
          <Row>
            <UserCard users={currentUsers} />
          </Row>
          <Row>
            <Pagination 
              itemsPerPage={usersPerPage}
              totalItems={users.length}
              paginate={paginate}
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AllUsers;
