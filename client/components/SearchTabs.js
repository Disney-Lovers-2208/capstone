import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Row, Col, Nav, Button } from 'react-bootstrap';


export const SearchTabs = () => {
    return (
        <Tab.Container id='search-tabs'>
            <Row>
                <Col sm={8}>
                    <Nav variant='pills' className='flex-row'>
                        {/* <Nav.Item>
                            <Nav.Link as={Link} to='/all' eventKey='all'>View All</Nav.Link>.
                        </Nav.Item> */}
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

                        <br />

                        {/* <p>Don't see your fave?</p>
                        <Button variant='info' align='center' as={Link} to={'/add'}>Add Your Fave!</Button> */}
                    </Nav>
                </Col>
            </Row>
        </Tab.Container>
    )
}

export default SearchTabs;
