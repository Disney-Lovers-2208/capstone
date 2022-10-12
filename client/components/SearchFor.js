import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import TvCard from './TvCard';
import { Button, Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';
import BookCard from './BookCard';
import UserCard from './UserCard';


export const SearchFor = () => {
    const { title } = useParams();
    const { name } = useParams();
    const tvshows = useSelector((state) => state.tvs);
    const movies = useSelector((state) => state.movies);
    const books = useSelector((state) => state.books);
    const users = useSelector((state) => state.users);
    const [tvList, setTvList] = useState([]);
    const [movieList, setMovieList] = useState([]);
    const [bookList, setBookList] = useState([]);
    const [nameList, setNameList] = useState([]);

    // filters through tv shows    
    useEffect(() => {
        const filteredTitles = tvshows.filter(tvshow => {
            return tvshow.title.toLowerCase().includes(title.toLowerCase())
        });
        setTvList(filteredTitles);
    }, []);

    // filters through movies
    useEffect(() => {
        const filteredTitles = movies.filter(movie => {
            return movie.title.toLowerCase().includes(title.toLowerCase());
        });
        setMovieList(filteredTitles);
    }, []);

    // filters through books
    useEffect(() => {
        const filteredTitles = books.filter(book => {
            return book.title.toLowerCase().includes(title.toLowerCase());
        });
        setBookList(filteredTitles);
    }, []);

    // useEffect(() => {
    //     const filteredNames = users.filter(user => {
    //         return user.name.toLowerCase().includes(name.toLowerCase());
    //     });
    //     setNameList(filteredNames);
    // }, []);

    return (
        <div className="search-results">
            <p>Don't see your fave?</p>
            <Button variant='info' as={Link} to={'/add'}>Add Your Fave!</Button>

            <br />


            {/* search for movies */}
            <Row xs={3} md={3}>
                {movieList.length ? movieList.map((movie) => (
                    <Col key={movie.id}>
                        <p>Movies:</p>
                        <MovieCard movie={movie}/>
                    </Col>
                )) : null}
            </Row>

            {/* search for tv shows */}
            <Row xs={3} md={3}>
                {tvList.length ? tvList.map((tvshow) => (
                    <Col key={tvshow.id}>
                        <p>Tv Shows:</p>
                        <TvCard tvShow={tvshow} />
                    </Col>
                )) : null}
            </Row>

            {/* search for books */}
            <Row>
                {bookList.length ? bookList.map((book) => (
                    <Col key={book.id}>
                        <p>Books:</p>
                        <BookCard book={book} />
                    </Col>
                )) : null}
            </Row>

            {/* search for users */}
            {/* <Row>
                {nameList.length ? nameList.map((name) => (
                    <Col>
                        <p>Users:</p>
                        <UserCard user={name}/>
                    </Col>
                )) : null}
            </Row> */}
        </div>
    )
};

export default SearchFor;