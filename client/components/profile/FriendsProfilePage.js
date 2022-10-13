import React from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "./Banner";
import SimpleSlider from "./SimpleSlider";

const FriendsProfilePage = (props) => {
  let location = useLocation();

  console.log("location", location);
  React.useEffect(() => {}, []);
  return <Container fluid className="profile"></Container>;
};

export default FriendsProfilePage;
