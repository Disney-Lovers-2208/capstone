import React from "react";
import { connect } from "react-redux";
import Banner from "./Banner";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

export class Saved extends React.Component {
  render() {
    const user = this.props.auth || [];
    const tvs = user?.tvs || [];
    const books = user?.books || [];
    const movies = user?.movies || [];

    const savedBooks = books.filter(
      (book) => book.user_book.status === "Saved"
    );

    const savedMovies = movies.filter(
      (movie) => movie.user_movie.status === "Saved"
    );

    const savedTvs = tvs.filter((tv) => tv.user_tv.status === "Saved");

    console.log("savedTvs", savedTvs);
    console.log("savedMovies", savedMovies);
    console.log("savedBooks", savedBooks);

    return (
      <Container fluid className="profile">
        <Row>
          <Col>
            <Banner user={user} />
          </Col>
        </Row>
        <Row>
          <Col>{savedMovies.map((movie) => {})}</Col>
        </Row>
      </Container>
    );
  }
}

const mapState = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapState, mapDispatchToProps)(Saved);
