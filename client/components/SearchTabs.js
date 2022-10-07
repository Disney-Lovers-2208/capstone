import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Row, Col, Nav } from 'react-bootstrap';


export const SearchTabs = () => {
    return (
        <Tab.Container id='search-tabs' defaultActiveKey='books'>
            <Row>
                <Col sm={9}>
                    <Nav variant='pills' className='flex-row'>
                        <Nav.Item>
                            <Nav.Link as={Link} to='/books' eventKey='books'>Books</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to='/movies' eventKey='movies'>Movies</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to='/tvshows' eventKey='tvshows'>TV Shows</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to='/users' eventKey='users'>Users</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default SearchTabs;
