import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { GoSearch } from 'react-icons/go';
import SearchTabs from './SearchTabs';
import { fetchTvShows } from '../store/tvshows';
import { fetchMovies } from '../store/movies';
import { fetchBooks } from '../store/books';

export const SearchBar = () => {
    const [title, setTitle] = useState('');
    const dispatch = useDispatch();

    // noticing an issue where it can only search once and can't search again
    useEffect(() => {
        dispatch(fetchTvShows());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);

    return (
        <Container id='search-bar' className="flex-row">
            <Row>
                <Col>
                    <input 
                        type='search' 
                        placeholder='Search for...' 
                        onChange={(evt) => setTitle(evt.target.value)} 
                        value={title} 
                    />
                    <Button variant='light' as={Link} to={`/searchfor/${title}`}><GoSearch /></Button>
                </Col>
                <SearchTabs />
            </Row>
        </Container>
    )
};


export default SearchBar;