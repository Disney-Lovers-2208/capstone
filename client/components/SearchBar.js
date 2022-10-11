import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Nav, Button } from 'react-bootstrap';
import { GoSearch } from 'react-icons/go';
import SearchTabs from './SearchTabs';



export const SearchBar = () => {
    const [title, setTitle] = useState('');


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
                    <Button variant='light' as={Link} to={`/searchfor/tvshows/${title}`}><GoSearch /></Button>
                </Col>
                <SearchTabs />
            </Row>
        </Container>
    )
};


export default SearchBar;