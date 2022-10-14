import React from "react";
import { useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Profile from "./Profile";

const UserProfilePage = () => {
  let user = useSelector((state) => state.auth);

  return (
    <Container fluid className="profile">
      <Profile user={user} />
    </Container>
  );
};

export default UserProfilePage;
