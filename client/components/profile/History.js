import React from "react";
import { connect } from "react-redux";
import Banner from "./Banner";
import { Container, Row, Col } from "react-bootstrap";
import SimpleSlider from "./SimpleSlider";

export class History extends React.Component {
  render() {
    const user = this.props.auth || [];
    const tvs = user?.tvs || [];
    const books = user?.books || [];
    const movies = user?.movies || [];

    const readBooks = books.filter((book) => book.user_book.status === "Read");

    const watchedMovies = movies.filter(
      (movie) => movie.user_movie.status === "Watched"
    );

    const watchedTvs = tvs.filter((tv) => tv.user_tv.status === "Watched");

    return (
      <Container fluid className="profile">
        <Row>
          <Col>
            <Banner user={user} />
          </Col>
        </Row>
        <Row className="favorite">
          <h2>Read Books</h2>
          <SimpleSlider books={readBooks} />
        </Row>
        <Row className="favorite">
          <h2>Watched Shows</h2>
          <SimpleSlider tvs={watchedTvs} />
        </Row>
        <Row className="favorite">
          <h2>Watched Movies</h2>
          <SimpleSlider movies={watchedMovies} />
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

export default connect(mapState, mapDispatchToProps)(History);
