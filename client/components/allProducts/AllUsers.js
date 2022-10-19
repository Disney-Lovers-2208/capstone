import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { getAllUsers } from "../../store/users";
import UserCard from "../productCards/UserCard";

export const AllUsers = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
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
  );
};

export default AllUsers;
