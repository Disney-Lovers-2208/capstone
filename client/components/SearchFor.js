import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import TvCard from './TvCard';
import { Button, Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';
import BookCard from './BookCard';


export const SearchFor = () => {
    const { title } = useParams();
    console.log("title:", title);
    const tvshows = useSelector((state) => state.tvs);
    const movies = useSelector((state) => state.movies);
    const books = useSelector((state) => state.books);
    console.log("tv:", tvshows);
    console.log('movie:', movies);
    console.log('book:', books);
    const [tvList, setTvList] = useState([]);
    const [movieList, setMovieList] = useState([]);
    const [bookList, setBookList] = useState([]);

    // filters through tv shows    
    useEffect(() => {
        const filteredTitles = tvshows.filter(tvshow => {
            console.log('tvshow:', tvshow.title);
            return tvshow.title.toLowerCase().includes(title.toLowerCase())
        });
        setTvList(filteredTitles);
        console.log('filtered tvs:', filteredTitles);
    }, []);

    // filters through movies
    useEffect(() => {
        const filteredTitles = movies.filter(movie => {
            console.log('movie:', movie.title)
            return movie.title.toLowerCase().includes(title.toLowerCase());
        });
        setMovieList(filteredTitles);
        console.log('filtered movies:', filteredTitles);
    }, []);

    // filters through books
    useEffect(() => {
        const filteredTitles = books.filter(book => {
            console.log('movie:', book.title)
            return book.title.toLowerCase().includes(title.toLowerCase());
        });
        setBookList(filteredTitles);
        console.log('filtered books:', filteredTitles);
    }, []);

    return (
        <div className="search-results">
            <p>Don't see your fave?</p>
            <Button variant='info' as={Link} to={'/add'} style={{ align: 'center' }}>Add Your Fave!</Button>

            <br />


            {/* search for movies */}
            <Row xs={3} md={3}>
                {movieList.length ? movieList.map((movie) => (
                    <Col key={movie.id}>
                        <MovieCard movie={movie}/>
                    </Col>
                )) : null}
            </Row>

            {/* search for tv shows */}
            <Row xs={3} md={3}>
                {tvList.length ? tvList.map((tvshow) => (
                    <Col key={tvshow.id}>
                        <TvCard tvShow={tvshow} />
                    </Col>
                )) : null}
            </Row>

            {/* search for books */}
            <Row>
                {bookList.length ? bookList.map((book) => (
                    <Col key={book.id}>
                        <BookCard book={book} />
                    </Col>
                )) : null}
            </Row>
        </div>
    )
};

export default SearchFor;