import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { GoSearch } from 'react-icons/go';
import SearchTabs from './SearchTabs';
import { fetchTvShows } from '../store/tvshows';
import { fetchMovies } from '../store/movies';
import { fetchBooks } from '../store/books';
import { fetchAllUsers } from '../store/users';

export const SearchBar = () => {
    // const [title, setTitle] = useState('');
    const [search, setSearch] = useState('');
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


    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch]);


    return (
        <Container id='search-bar' className="flex-row">
            <Row>
                <Col>
                    <input 
                        type='search' 
                        placeholder='Search for...' 
                        onChange={(evt) => setSearch(evt.target.value)} 
                        value={search} 
                    />
                    <Button variant='light' as={Link} to={`/searchfor/${search}`}><GoSearch /></Button>
                </Col>
                <SearchTabs />
            </Row>
        </Container>
    )
};


export default SearchBar;