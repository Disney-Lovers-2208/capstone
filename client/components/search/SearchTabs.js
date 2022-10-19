import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Row, Col, Nav } from 'react-bootstrap';


export const SearchTabs = () => {
    return (
        <div className='search-tabs'>
            <Row>
                <Col sm={8}>
                    <Nav variant='pills' className='flex-row'>
                        <Nav.Item>
                            <Nav.Link 
                                as={Link} 
                                to='/books' 
                                eventKey='books' style={{ padding: '2px', display: 'inline' }}>Books</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to='/movies' eventKey='movies' style={{ padding: '2px', display: 'inline' }}>Movies</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to='/tvshows' eventKey='tvshows' style={{ padding: '2px', display: 'inline' }}>TV Shows</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to='/users' eventKey='users' style={{ padding: '2px', display: 'inline' }}>People</Nav.Link>
                        </Nav.Item>

                        <br />

                    </Nav>
                </Col>
            </Row>
        </div>
    )
}

export default SearchTabs;
