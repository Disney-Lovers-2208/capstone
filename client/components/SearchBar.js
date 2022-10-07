import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Container, Col, Row, Nav } from 'react-bootstrap';
// import { GoSearch } from 'react-icons/go';
import SearchTabs from './SearchTabs';


export const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");


    const handleChange = (evt) => {
        evt.preventDefault();
        setSearchInput(evt.target.value);
    };


    return (
        <Container className="flex-row">
            <Row>
                <Col>
                    <input type='search' placeholder='Search' onChange={handleChange} value={searchInput} />
                    {/* <Nav.Link as={Link} to='/search-results'><GoSearch /></Nav.Link> */}
                </Col>
                <SearchTabs />
            </Row>
        </Container>
    )
}
// mapState and mapDispatch once products are up an running

export default SearchBar;