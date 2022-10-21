import React from "react";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";

export const UserCard = (props) => {
  const { user } = props;
  const { id, firstName, lastName, image } = user;

  return (
    <Container className="all-users">
      <Card
        border="info"
        style={{ width: "15rem", backgroundColor: "#FF5454" }}
      >
        <Card.Body>
          <Link to={`/users/${id}`} style={{ color: "inherit" }}>
            <Card.Img src={image}></Card.Img>
            <Card.Title>
              {firstName} {lastName}
            </Card.Title>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserCard;
