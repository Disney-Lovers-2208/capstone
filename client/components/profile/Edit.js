import React, { useState } from "react";
import { useSelector } from "react-redux";
import Banner from "./Banner";
import { Container, Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";

export const Edit = () => {
  const user = useSelector((state) => state.auth);
  console.log(user);
  return (
    <Container fluid className="edit-profile">
      <h1>Edit Profile</h1>
      <hr />
      <Row className="flex-lg-nowrap">
        {/* Left side */}
        <Col lg={3}>
          <div className="text-center">
            <img src={user.image} className="avatar" alt="avatar" />

            <h6>Upload a different photo...</h6>
            <input type="file" className="form-control" />
          </div>
        </Col>
        {/* Right side */}
        <Col lg={9}>
          <h3>Personal info</h3>
          <Form></Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Edit;
