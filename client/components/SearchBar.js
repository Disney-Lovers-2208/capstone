import React, { useState } from 'react';
import SearchTabs from './SearchTabs';
import { Container, Col, Row } from 'react-bootstrap';
// import { GiMagnifyingGlass } from 'react-icons/gi';


export const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");


    const handleChange = (evt) => {
        evt.preventDefault();
        setSearchInput(evt.target.value);
    };


    return (
        <Container className="search-bar">
            <Row>
                <Col>
                <input
                    type='search'
                    placeholder='Search'
                    onChange={handleChange}
                    value={searchInput}
                />
                </Col>
            {/* <Col>
                <Button className='btn' variant='FFFFFF'><GiMagnifyingGlass/></Button>
            </Col> */}
            </Row>
        </Container>
    )
}
// mapState and mapDispatch once products are up an running

export default SearchBar;