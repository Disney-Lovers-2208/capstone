import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { getAllUsers } from "../../store/users";
import UserCard from "../productCards/UserCard";

export const AllUsers = () => {
  const users = useSelector((state) => state.users);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div>
      {count ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="all-items">
          <Row xs={3} md={3}>
            {users.length
              ? users.map((user) => (
                  <Col key={user.id}>
                    <UserCard user={user} />
                  </Col>
                ))
              : null}
          </Row>
        </div>
      )}
    </div>
  );
};

export default AllUsers;
