import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

export const AllProductsTabs = () => {
    return (
        <div className='all-products-tabs'>
            <Row>
                <Col>
                    <Link to='/tvshows'>
                        <button className="btn btn-sm btn-primary  ml-2">Shows</button>
                    </Link>
                </Col>

                <Col>
                    <Link to='/movies'>
                        <button className="btn btn-sm btn-primary  ml-2">Movies</button>
                    </Link>
                </Col>

                <Col>
                    <Link to='/books'>
                        <button className="btn btn-sm btn-primary  ml-2">Books</button>
                    </Link>
                </Col>

                <Col>
                    <Link to='/users'>
                        <button className="btn btn-sm btn-primary">People</button>
                    </Link>
                </Col>
                
            </Row>
        </div>
    )
}

export default AllProductsTabs;