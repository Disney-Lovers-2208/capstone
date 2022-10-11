import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import TvCard from './TvCard';


export const AllTvShows = () => {
    const tvshows = useSelector((state) => state.tvs); 

    return (
        <div className="all-items">
            <Row xs={3} md={3}>
                {tvshows.length ? tvshows.map((tvshow) => (
                    <Col key={tvshow.id}>
                        <TvCard tvShow={tvshow} />
                    </Col>
                )) : null}
            </Row>
        </div>
    )

};

export default AllTvShows;