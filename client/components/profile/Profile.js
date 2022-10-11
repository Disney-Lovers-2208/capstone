import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "./Banner";
import { fetchFavoriteBook } from "../../redux/book";

export class Profile extends React.Component {
  componentDidMount() {
    const authId = this.props.auth.id;
    this.props.favoriteBook(authId);
  }

  render() {
    const user = this.props.auth || [];
    const tvs = user?.tvs || [];
    const books = user?.books || [];
    const movies = user?.movies || [];

    //favorites
    const favoriteBookId = this.props.book.bookId;
    const favoriteBook = books.filter((x) => x.id === favoriteBookId)[0];

    console.log(favoriteBook);
    return (
      <Container fluid className="profile">
        <Row>
          <Col>
            <Banner user={user} />
          </Col>
        </Row>
        <Row className="featured">
          <Col>
            {favoriteBook ? (
              <img src={favoriteBook.imageUrl} alt="image" />
            ) : null}
          </Col>
          <Col></Col>
          <Col>C</Col>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    favoriteBook: (userId) => dispatch(fetchFavoriteBook(userId)),
  };
};

export default connect(mapState, mapDispatchToProps)(Profile);
