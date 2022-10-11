import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "./Banner";
import { fetchFavoriteBook } from "../../redux/book";
import { fetchFavoriteMovie } from "../../redux/movie";
import { fetchFavoriteTv } from "../../redux/tv";

export class Profile extends React.Component {
  componentDidMount() {
    const authId = this.props.auth.id;
    this.props.favoriteBook(authId);
    this.props.favoriteMovie(authId);
    this.props.favoriteTv(authId);
  }

  render() {
    const user = this.props.auth || [];
    const tvs = user?.tvs || [];
    const books = user?.books || [];
    const movies = user?.movies || [];

    //favorites
    const favoriteBookId = this.props.book.bookId;
    const favoriteBook = books.filter((book) => book.id === favoriteBookId)[0];

    const favoriteMovieId = this.props.movie.movieId;
    const favoriteMovie = movies.filter(
      (movie) => movie.id === favoriteMovieId
    )[0];

    console.log("this.props", this.props);
    const favoriteTvId = this.props.tv.tvId;
    const favoriteTv = tvs.filter((tv) => tv.id === favoriteTvId)[0];

    return (
      <Container fluid className="profile">
        <Row>
          <Col>
            <Banner user={user} />
          </Col>
        </Row>
        <Row>
          <Col sm={4} className="featured">
            <h2>favorite Book</h2>
            {favoriteBook ? (
              <img src={favoriteBook.imageUrl} alt="image" />
            ) : null}
          </Col>
          <Col sm={4} className="featured">
            <h2>favorite Movie</h2>
            {favoriteMovie ? (
              <img src={favoriteMovie.imageUrl} alt="image" />
            ) : null}
          </Col>
          <Col sm={4} className="featured">
            <h2>favorite Show</h2>
            {favoriteTv ? <img src={favoriteTv.imageUrl} alt="image" /> : null}
          </Col>
        </Row>
      </Container>
    );
    // return (
    //   <div className="profile">
    //     <Banner user={user} />
    //     <div className="featured"></div>
    //     <div className="favorites">
    //       {tvs
    //         ? tvs.map((tv) => {
    //             return (
    //               <div className="product-card" key={tv.id}>
    //                 <img src={tv.imageUrl} alt="image" />
    //               </div>
    //             );
    //           })
    //         : null}
    //     </div>
    //     <div className="favorites">
    //       {movies
    //         ? movies.map((movie) => {
    //             return (
    //               <div className="product-card" key={movie.id}>
    //                 <img src={movie.imageUrl} alt="image" />
    //               </div>
    //             );
    //           })
    //         : null}
    //     </div>
    //     <div className="favorites">
    //       {books
    //         ? books.map((book) => {
    //             return (
    //               <div className="product-card" key={book.id}>
    //                 <img src={book.imageUrl} alt="image" />
    //               </div>
    //             );
    //           })
    //         : null}
    //     </div>
    //   </div>
    // );
  }
}

const mapState = (state) => {
  console.log("state:", state);
  return {
    auth: state.auth,
    book: state.book,
    movie: state.movie,
    tv: state.tv,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    favoriteBook: (userId) => dispatch(fetchFavoriteBook(userId)),
    favoriteMovie: (userId) => dispatch(fetchFavoriteMovie(userId)),
    favoriteTv: (userId) => dispatch(fetchFavoriteTv(userId)),
  };
};

export default connect(mapState, mapDispatchToProps)(Profile);
