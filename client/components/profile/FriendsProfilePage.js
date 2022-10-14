import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { fetchUser } from "../../store/user";
import Profile from "./Profile";

const FriendsProfilePage = () => {
  const { pathname } = useLocation();
  const userId = pathname.split("/").pop();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser(userId));
  }, [dispatch]);

  return (
    <Container fluid className="profile">
      {Object.keys(user).length !== 0 ? <Profile user={user} /> : null}
    </Container>
  );
};

export default FriendsProfilePage;
