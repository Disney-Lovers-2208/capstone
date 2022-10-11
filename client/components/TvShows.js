import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
import { useDispatch , useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import TvCard from './TvCard';


export const TvShows = () => {
    const tvshows = useSelector((state) => state.tvs); 

    return (
        <div className="all-tvs">
            {/* <p>Don't see your fave?</p>
            <Button variant='info' as={Link} to={'/add'} style={{ align: 'center' }}>Add Your Fave!</Button> */}

            <br />

            <Row xs={3} md={3}>
                {tvshows.length ? tvshows.map((tvshow) => (
                    <Col key={tvshow.id}>
                        <TvCard tvShow={tvshow} />
                    </Col>
                )) : null}
            </Row>
        </div>
        // <TvCard />
    )

};

export default TvShows;