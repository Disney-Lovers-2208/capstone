import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Container, Col, Row, Nav } from 'react-bootstrap';
// import { GoSearch } from 'react-icons/go';
// import SearchTabs from './SearchTabs';


export const SearchBar = ({keyword, setKeyword}) => {


    return (
        <Container className="flex-row">
            <Row>
                <Col>
                    <input type='search' placeholder='Search for...' onChange={(evt) => setKeyword(evt.target.value)} value={keyword} />
                    <Nav.Link as={Link} to='/searchfor'>View All</Nav.Link>
                </Col>
            </Row>
        </Container>
    )
};


export default SearchBar;