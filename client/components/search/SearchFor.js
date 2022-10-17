import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import TvCard from "../productCards/TvCard";
import { Button, Row, Col } from "react-bootstrap";
import MovieCard from "../productCards/MovieCard";
import BookCard from "../productCards/BookCard";


const MovieItemComponent = ({ item })=> {
  return (
    <li>
      { item.title }
    </li>
  );
};
const RenderList = ({ list, ItemComponent, title })=> {
  return (
    <div>
      <h2>{ title }</h2>
      <ul>
        {
          list.map( item => {
            return (
              <ItemComponent key={ item.id } item={ item } />
            );
          })
        }
      </ul>
    </div>
  );
};
export const SearchFor = () => {
  const { title } = useParams();

  const titleFilter = item => item.title.toLowerCase().includes(title.toLowerCase()); 

  const tvshows = useSelector( state => state.tvs)
    .filter(titleFilter); 
  const movies = useSelector((state) => state.movies)
    .filter(titleFilter); 
  const books = useSelector((state) => state.books)
    .filter(titleFilter); 

  useEffect(()=> {
    console.log(`get data from server for ${title}`);

  }, [title]);
  //const movies = useSelector((state) => state.movies);
  //const books = useSelector((state) => state.books);
  /*
  const [tvList, setTvList] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [bookList, setBookList] = useState([]);
  const filteredTvShows = tvshows.filter((tvshow) => {
    return tvshow.title.toLowerCase().includes(title.toLowerCase());
  });
  */
  return (
    <div>
      <p>You searched for { title }</p>
      <h2>TV Shows</h2>
      <ul>
        {
          tvshows.map( show => {
            return (
              <li key={ show.id }>{ show.title }</li>
            );
          })
        }
      </ul>
      <RenderList title='Movies' list={ movies } ItemComponent={ MovieItemComponent } />
      <h2>Books</h2>
      <ul>
        {
          books.map( book => {
            return (
              <li key={ book.id }>{ book.title }</li>
            );
          })
        }
      </ul>
    </div>
  );

  // filters through tv shows
  useEffect(() => {
    const filteredTitles = tvshows.filter((tvshow) => {
      return tvshow.title.toLowerCase().includes(title.toLowerCase());
    });
    setTvList(filteredTitles);
  }, []);

  // filters through movies
  useEffect(() => {
    const filteredTitles = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(title.toLowerCase());
    });
    setMovieList(filteredTitles);
  }, []);

  // filters through books
  useEffect(() => {
    const filteredTitles = books.filter((book) => {
      return book.title.toLowerCase().includes(title.toLowerCase());
    });
    setBookList(filteredTitles);
  }, []);

  return (
    <div className="search-results">
      <p>Don't see your fave?</p>
      <Button variant="info" as={Link} to={"/add"} style={{ align: "center" }}>
        Add Your Fave!
      </Button>

      <br />

      {/* search for movies */}
      <Row xs={3} md={3}>
        {movieList.length
          ? movieList.map((movie) => (
              <Col key={movie.id}>
                <p>Movies:</p>
                <MovieCard movie={movie} />
              </Col>
            ))
          : null}
      </Row>

      {/* search for tv shows */}
      <Row xs={3} md={3}>
        {tvList.length
          ? tvList.map((tvshow) => (
              <Col key={tvshow.id}>
                <p>Tv Shows:</p>
                <TvCard tvShow={tvshow} />
              </Col>
            ))
          : null}
      </Row>

      {/* search for books */}
      <Row>
        {bookList.length
          ? bookList.map((book) => (
              <Col key={book.id}>
                <p>Books:</p>
                <BookCard book={book} />
              </Col>
            ))
          : null}
      </Row>
    </div>
  );
};

export default SearchFor;
