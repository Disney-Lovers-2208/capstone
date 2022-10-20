import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';


export const SearchTabs = () => {
    return (
        <div className='search-tabs'>
            <Row>
                <Col>
                    <Link to='/searchfor/tvshows'>
                        <button className="btn btn-sm btn-primary  ml-2">Shows</button>
                    </Link>
                </Col>

                <Col>
                    <Link to='/searchfor/movies'>
                        <button className="btn btn-sm btn-primary  ml-2">Movies</button>
                    </Link>
                </Col>

                <Col>
                    <Link to='/searchfor/books'>
                        <button className="btn btn-sm btn-primary  ml-2">Books</button>
                    </Link>
                </Col>

                <Col>
                    <Link to='/searchfor/users'>
                        <button className="btn btn-sm btn-primary">People</button>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default SearchTabs;
